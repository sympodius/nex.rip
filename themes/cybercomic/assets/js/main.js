// --- Configuration ---
const CONFIG = {
  colors: {
    primary: '#F19A10',   // orange — ring, dust, halo
    accent: '#CD315B',    // pink — sparks, halo
  },
  ripple: {
    duration: 600,        // animation length (ms)
    maxRadius: 75,        // ring final radius (px)
    sparkExtend: 30,      // sparks drift outward by this much (px)
    sparkGap: 8,          // sparks start this many px outside ring
    numSparks: 5,
    sparkInitialHeight: 12,
    sparkAnimHeight: 16,  // height at t=0 in animation loop
    sparkShrinkFactor: 0.7,
    largeParticles: { count: 5, sizeMin: 10, sizeMax: 18, speedMin: 10, speedMax: 25 },
    smallParticles: { count: 8, sizeMin: 2, sizeMax: 5, speedMin: 35, speedMax: 80 },
    dustDelay: 45,       // ms before dust particles start appearing
    zIndex: 9999,
  },
  halo: {
    spawnInterval: 60,    // ms between particle spawns
    particleSize: 3,      // px
    vxRange: 1.5,         // horizontal drift range (±px/frame)
    vyMin: 1,             // vertical rise (px/frame)
    vyMax: 2.5,
    lifeMin: 40,          // frames
    lifeMax: 60,
    zIndex: 9998,
  },
};

// --- Helpers ---
const makeEl = (parent, tag, styles) => {
  const el = document.createElement(tag);
  el.style.cssText = styles;
  parent.appendChild(el);
  return el;
};

const rand = (min, max) => min + Math.random() * (max - min);

// --- Accessibility: respect reduced-motion preference ---
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // Click Ripple — ring + dust cloud + radial sparks
  // ============================================================
  if (!prefersReducedMotion) {
    document.addEventListener('click', (e) => {
      const { ripple } = CONFIG;
      const container = makeEl(document.body, 'div', `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: ${ripple.zIndex};
      `);

      // Expanding ring
      const ring = makeEl(container, 'div', `
        position: absolute;
        border-radius: 50%;
        border: 2px solid ${CONFIG.colors.primary};
        background: transparent;
        transform: translate(-50%, -50%);
      `);

      // Dust particles — two populations
      const particles = [];
      const addParticles = (cfg) => {
        for (let i = 0; i < cfg.count; i++) {
          const size = rand(cfg.sizeMin, cfg.sizeMax);
          const el = makeEl(container, 'div', `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: ${CONFIG.colors.primary};
            left: 0;
            top: 0;
            opacity: 0;
          `);
          particles.push({
            el,
            angle: rand(0, 360),
            speed: rand(cfg.speedMin, cfg.speedMax),
            size,
          });
        }
      };
      addParticles(ripple.largeParticles);
      addParticles(ripple.smallParticles);

      // Radial sparks
      const sparks = [];
      for (let i = 0; i < ripple.numSparks; i++) {
        const angle = (360 / ripple.numSparks) * i;
        const el = makeEl(container, 'div', `
          position: absolute;
          width: 2px;
          height: ${ripple.sparkInitialHeight}px;
          background: ${CONFIG.colors.accent};
          border-radius: 1px;
          transform-origin: center center;
          left: 0;
          top: 0;
        `);
        sparks.push({ el, angle });
      }

      // Animation loop
      const start = performance.now();
      const frame = (now) => {
        const t = Math.min((now - start) / ripple.duration, 1);
        const radius = ripple.maxRadius * t;

        ring.style.width = ring.style.height = radius * 2 + 'px';
        ring.style.opacity = 1 - t;

        const dustT = Math.max(0, (t - ripple.dustDelay / ripple.duration));
        for (const p of particles) {
          const a = p.angle * Math.PI / 180;
          const dist = p.speed * dustT;
          p.el.style.transform = `translate(${Math.cos(a) * dist}px, ${Math.sin(a) * dist}px)`;
          const s = p.size * (1 - dustT * 0.6);
          p.el.style.width = p.el.style.height = s + 'px';
          p.el.style.opacity = dustT > 0 ? (1 - dustT) * 0.7 : 0;
        }

        for (const spark of sparks) {
          const a = spark.angle * Math.PI / 180;
          const dist = radius + ripple.sparkGap + ripple.sparkExtend * t;
          const x = Math.cos(a) * dist;
          const y = Math.sin(a) * dist;
          const h = ripple.sparkAnimHeight * (1 - t * ripple.sparkShrinkFactor);
          spark.el.style.height = h + 'px';
          spark.el.style.transform = `translate(${x - 1}px, ${y - h / 2}px) rotate(${spark.angle + 90}deg)`;
          spark.el.style.opacity = (1 - t) * 0.8;
        }

        if (t < 1) {
          requestAnimationFrame(frame);
        } else {
          container.remove();
        }
      };

      requestAnimationFrame(frame);
    });
  }

  // ============================================================
  // Link Hover — Blinking Corner Brackets
  // ============================================================
  if (!prefersReducedMotion) {
    const brackets = [];
    const braceSize = 6;
    for (let i = 0; i < 4; i++) {
      brackets.push(makeEl(document.body, 'div', `
        position: fixed;
        width: ${braceSize}px;
        height: ${braceSize}px;
        pointer-events: none;
        z-index: ${CONFIG.halo.zIndex};
        opacity: 0;
      `));
    }
    brackets[0].style.cssText += `border-top: 2px solid ${CONFIG.colors.primary}; border-left: 2px solid ${CONFIG.colors.primary};`;
    brackets[1].style.cssText += `border-top: 2px solid ${CONFIG.colors.primary}; border-right: 2px solid ${CONFIG.colors.primary};`;
    brackets[2].style.cssText += `border-bottom: 2px solid ${CONFIG.colors.primary}; border-left: 2px solid ${CONFIG.colors.primary};`;
    brackets[3].style.cssText += `border-bottom: 2px solid ${CONFIG.colors.primary}; border-right: 2px solid ${CONFIG.colors.primary};`;

    let activeLink = null;
    let linkReady = false;
    let animId = null;
    let blinkStart = null;
    let prevBlinkOn = false;
    const blinkDuration = 600;
    const pad = 4;
    const cssTransitionMs = 250; // time for hover scale/rotate transitions to settle

    // Recalculate bracket positions to track the active link during scroll/resize
    const updateBrackets = (force) => {
      if (!activeLink || (!linkReady && !force)) return;
      const linkRect = activeLink.getBoundingClientRect();
      const childRect = activeLink.firstElementChild
        ? activeLink.firstElementChild.getBoundingClientRect()
        : linkRect;
      const rect = {
        left: Math.min(linkRect.left, childRect.left),
        top: Math.min(linkRect.top, childRect.top),
        right: Math.max(linkRect.right, childRect.right),
        bottom: Math.max(linkRect.bottom, childRect.bottom),
      };
      const effectivePad = pad + 2;
      brackets[0].style.left = rect.left - effectivePad + 'px';
      brackets[0].style.top = rect.top - effectivePad + 'px';
      brackets[1].style.left = rect.right + effectivePad - braceSize + 'px';
      brackets[1].style.top = rect.top - effectivePad + 'px';
      brackets[2].style.left = rect.left - effectivePad + 'px';
      brackets[2].style.top = rect.bottom + effectivePad - braceSize + 'px';
      brackets[3].style.left = rect.right + effectivePad - braceSize + 'px';
      brackets[3].style.top = rect.bottom + effectivePad - braceSize + 'px';
    };

    const blink = (now) => {
      if (!activeLink) {
        brackets.forEach(b => b.style.opacity = '0');
        animId = null;
        return;
      }
      const t = ((now - blinkStart) % blinkDuration) / blinkDuration;
      const on = t < 0.5;
      // On first entry into an "off" phase after CSS transitions have settled,
      // recalculate bracket positions so the snap is invisible
      if (prevBlinkOn && !on && !linkReady && (now - blinkStart) >= cssTransitionMs) {
        linkReady = true;
        updateBrackets();
      }
      prevBlinkOn = on;
      brackets.forEach(b => b.style.opacity = on ? 1 : 0);
      animId = requestAnimationFrame(blink);
    };

    document.addEventListener('mouseover', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      if (link.closest('.page-item.disabled')) return; // skip disabled pagination
      if (activeLink) return;
      activeLink = link;
      linkReady = false;
      prevBlinkOn = false;
      // Position immediately for instant feedback
      updateBrackets(true);
      blinkStart = performance.now();
      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(blink);
    });

    document.addEventListener('mouseout', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      if (link.contains(e.relatedTarget)) return;
      activeLink = null;
      linkReady = false;
      if (animId) cancelAnimationFrame(animId);
      brackets.forEach(b => b.style.opacity = '0');
    });

    // Keep brackets locked to the link during scroll and resize
    window.addEventListener('scroll', updateBrackets, { passive: true });
    window.addEventListener('resize', updateBrackets, { passive: true });
  }

});
