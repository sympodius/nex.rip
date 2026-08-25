window.Hindrex = (function () {
    "use strict";

    let mapping = null;
    let codeToValue = null;
    let superseding = null;
    let maxScore = null;

    // Data comes from window.HINDREX_DATA, which the hindrex-js partial
    // sets as the first statement of the combined asset this file is
    // bundled into at build time (data/hindrex.json + this source, then
    // minified and fingerprinted). hindrex.json stays the single source
    // of truth for scores, codes, and the superseding rules.
    (function init() {
        const data = window.HINDREX_DATA;
        if (!data || !Array.isArray(data.codes)) {
            throw new Error(
                "Hindrex: window.HINDREX_DATA is missing — " +
                "did the page load the combined hindrex asset?"
            );
        }
        mapping = data.codes.map(c => [c.score, c.code]);
        codeToValue = Object.fromEntries(mapping.map(([value, code]) => [code, value]));
        superseding = data.superseding || {};
        maxScore = mapping.reduce((sum, [value]) => sum + value, 0);
    })();

    function scoreToCode(score) {
        const parts = [];
        for (const [value, code] of mapping) {
            if (score & value) {
                parts.push(code);
                score &= ~value;
            }
        }
        return parts.join("-");
    }

    function codeToScore(code) {
        const parts = code.split("-").filter(Boolean);
        const unique = [...new Set(parts)];
        const present = new Set(unique);

        // Remove any code superseded by a higher-priority code that is also present
        const filtered = unique.filter(part => {
            for (const [dominant, dominated] of Object.entries(superseding)) {
                if (present.has(dominant) && dominated.includes(part)) {
                    return false;
                }
            }
            return true;
        });

        return filtered.reduce((sum, part) => sum + (codeToValue[part] || 0), 0);
    }

    function findSupersedingConflicts(parts) {
        const present = new Set(parts);
        const conflicts = [];
        for (const [dominant, dominated] of Object.entries(superseding)) {
            if (present.has(dominant)) {
                for (const sub of dominated) {
                    if (present.has(sub)) {
                        conflicts.push({ dominant, sub });
                    }
                }
            }
        }
        return conflicts;
    }

    // Given a raw score, return { code, conflicts, correctedParts, correctedScore }.
    // conflicts is empty for a valid score; correctedScore is the score after
    // removing superseded codes.
    function analyzeScore(score) {
        const code = scoreToCode(score);
        const parts = code.split("-").filter(Boolean);
        const conflicts = findSupersedingConflicts(parts);

        const correctedParts = parts.filter(part => {
            for (const [dominant, dominated] of Object.entries(superseding)) {
                if (parts.includes(dominant) && dominated.includes(part)) return false;
            }
            return true;
        });

        const correctedScore = correctedParts.reduce((sum, part) => sum + codeToValue[part], 0);

        return { code, conflicts, correctedParts, correctedScore };
    }

    // Returns true if every part of the code is a known code.
    function isCodeValid(code) {
        const parts = code.split("-").filter(Boolean);
        return parts.length > 0 && parts.every(part => part in codeToValue);
    }

    return {
        mapping,
        codeToValue,
        superseding,
        maxScore,
        scoreToCode,
        codeToScore,
        findSupersedingConflicts,
        analyzeScore,
        isCodeValid,
    };
})();
