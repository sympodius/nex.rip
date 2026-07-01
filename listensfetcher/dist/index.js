// src/index.ts
import { readFileSync, writeFileSync as writeFileSync2, mkdirSync as mkdirSync2 } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

// src/api.ts
var BASE_URL = "https://ws.audioscrobbler.com/2.0/";
function getApiKey() {
  const key = process.env.LASTFM_API_KEY;
  if (!key) {
    throw new Error("LASTFM_API_KEY not set in environment");
  }
  return key;
}
var RETRYABLE_CODES = /* @__PURE__ */ new Set([16, 32]);
var MAX_RETRIES = 3;
var RETRY_DELAY_MS = 1e3;
function buildUrl(method, params) {
  const url = new URL(BASE_URL);
  url.searchParams.set("api_key", getApiKey());
  url.searchParams.set("format", "json");
  url.searchParams.set("method", method);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  return url.toString();
}
async function request(method, params, parse) {
  let lastError = null;
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    if (attempt > 0) {
      await sleep(RETRY_DELAY_MS);
    }
    const url = buildUrl(method, params);
    const response = await fetch(url);
    if (!response.ok) {
      lastError = new Error(`HTTP ${response.status} from Last.fm API`);
      continue;
    }
    const data = await response.json();
    if (data.error) {
      const code = Number(data.error);
      if (RETRYABLE_CODES.has(code)) {
        lastError = new Error(`Last.fm error ${code}: ${data.message}`);
        continue;
      }
      throw new Error(`Last.fm error ${code}: ${data.message}`);
    }
    return parse(data);
  }
  throw lastError || new Error("Request failed after retries");
}
function sleep(ms) {
  return new Promise((resolve2) => setTimeout(resolve2, ms));
}
async function getTopArtists(user) {
  const result = await request(
    "user.getTopArtists",
    { user, period: "7day", limit: "5" },
    (data) => {
      const raw = data.topartists.artist;
      return raw.map((a) => ({
        name: a.name,
        play_count: parseInt(a.playcount, 10),
        url: a.url
      }));
    }
  );
  return result;
}
async function getRecentTracks(user, limit = 200) {
  const result = await request(
    "user.getRecentTracks",
    { user, limit: String(limit) },
    (data) => {
      const raw = data.recenttracks.track;
      return raw.map((t) => ({
        name: t.name,
        artist: t.artist["#text"],
        timestamp: parseInt(t.date.uts, 10),
        url: t.url,
        albumName: t.album?.["#text"] ?? ""
      }));
    }
  );
  return result;
}
async function getTrackInfo(artist, track) {
  const result = await request(
    "track.getInfo",
    { artist, track },
    (data) => {
      const t = data;
      const album = t.track.album;
      let largestImage = null;
      if (album?.image && album.image.length > 0) {
        const sizes = ["extralarge", "large", "medium", "small"];
        for (const size of sizes) {
          const img = album.image.find((i) => i.size === size && i["#text"]);
          if (img) {
            largestImage = img["#text"];
            break;
          }
        }
      }
      return {
        name: t.track.name,
        url: t.track.url,
        album: {
          name: album?.title ?? "",
          url: album?.url ?? "",
          image: largestImage
        }
      };
    }
  );
  return result;
}
async function getAlbumInfo(artist, album) {
  const result = await request(
    "album.getInfo",
    { artist, album },
    (data) => {
      const a = data;
      let largestImage = null;
      if (a.album.image && a.album.image.length > 0) {
        const sizes = ["extralarge", "large", "medium", "small"];
        for (const size of sizes) {
          const img = a.album.image.find((i) => i.size === size && i["#text"]);
          if (img) {
            largestImage = img["#text"];
            break;
          }
        }
      }
      return {
        name: a.album.name,
        url: a.album.url,
        image: largestImage
      };
    }
  );
  return result;
}

// src/images.ts
import { createHash } from "node:crypto";
import { writeFileSync } from "node:fs";
import { extname } from "node:path";
var MAX_RETRIES2 = 3;
var RETRY_DELAY_MS2 = 1e3;
function hashUrl(url) {
  return createHash("md5").update(url).digest("hex");
}
function getExtension(url) {
  const ext = extname(new URL(url).pathname);
  return ext || ".jpg";
}
function sleep2(ms) {
  return new Promise((resolve2) => setTimeout(resolve2, ms));
}
async function downloadImage(url, dir) {
  const hash = hashUrl(url);
  const ext = getExtension(url);
  const filename = `${hash}${ext}`;
  for (let attempt = 0; attempt < MAX_RETRIES2; attempt++) {
    if (attempt > 0) {
      await sleep2(RETRY_DELAY_MS2);
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        continue;
      }
      const buffer = Buffer.from(await response.arrayBuffer());
      writeFileSync(dir + "/" + filename, buffer);
      return filename;
    } catch {
      continue;
    }
  }
  return null;
}

// src/swap.ts
import {
  mkdirSync,
  rmSync,
  renameSync,
  existsSync
} from "node:fs";
function cleanupFile(filePath) {
  if (existsSync(filePath)) {
    rmSync(filePath, { force: true });
  }
}
function atomicFileSwap(srcPath, targetPath) {
  renameSync(srcPath, targetPath);
}

// src/index.ts
try {
  const envPath = resolve(import.meta.dirname, "../../.env");
  for (const line of readFileSync(envPath, "utf-8").split("\n")) {
    const match = line.match(/^([^#][^=]+)=(.*)$/);
    if (match) {
      process.env[match[1].trim()] = match[2].trim();
    }
  }
} catch {
}
var API_KEY = process.env.LASTFM_API_KEY;
var USER = process.env.LASTFM_USER;
if (!API_KEY) {
  console.error("Error: LASTFM_API_KEY not set in .env");
  process.exit(1);
}
if (!USER) {
  console.error("Error: LASTFM_USER not set in .env");
  process.exit(1);
}
var ROOT_DIR = resolve(import.meta.dirname, "../..");
var DATA_FILE = resolve(ROOT_DIR, "data", "lastfm.json");
var IMAGES_DIR = resolve(ROOT_DIR, "assets", "lastfm", "images");
var TMP_BASE = resolve(ROOT_DIR, "data");
var EMPTY_ALBUM = {
  image: null,
  name: "",
  url: ""
};
function matchTopTracks(artists, recentTracks) {
  const sevenDaysAgo = Date.now() / 1e3 - 7 * 24 * 60 * 60;
  const filtered = recentTracks.filter((t) => t.timestamp >= sevenDaysAgo);
  const trackCounts = /* @__PURE__ */ new Map();
  for (const t of filtered) {
    const key = `${t.artist}::${t.name}`;
    const existing = trackCounts.get(key);
    if (existing) {
      existing.count += 1;
      existing.track.play_count = existing.count;
    } else {
      trackCounts.set(key, {
        track: {
          name: t.name,
          play_count: 1,
          url: t.url,
          album: { ...EMPTY_ALBUM }
          // New object per track — don't share EMPTY_ALBUM
        },
        count: 1,
        albumName: t.albumName
      });
    }
  }
  const topTracks = /* @__PURE__ */ new Map();
  for (const artist of artists) {
    let bestTrack = null;
    let bestCount = 0;
    let bestAlbumName = "";
    for (const [key, entry] of trackCounts) {
      const [artistName] = key.split("::");
      if (artistName === artist.name) {
        if (entry.count > bestCount) {
          bestCount = entry.count;
          bestTrack = entry.track;
          bestAlbumName = entry.albumName;
        }
      }
    }
    if (bestTrack) {
      bestTrack.album.name = bestAlbumName;
      topTracks.set(artist.name, bestTrack);
    }
  }
  return topTracks;
}
async function main() {
  let tmpFile = null;
  try {
    console.log(`\u280B Fetching top artists for ${USER}...`);
    const topArtists = await getTopArtists(USER);
    console.log(`\u2713 Found ${topArtists.length} top artist(s)`);
    console.log(`\u280B Fetching recent tracks...`);
    const recentTracks = await getRecentTracks(USER, 200);
    console.log(`\u2713 Fetched ${recentTracks.length} recent track(s)`);
    const topTracks = matchTopTracks(topArtists, recentTracks);
    mkdirSync2(IMAGES_DIR, { recursive: true });
    console.log(`\u280B Fetching album art...`);
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));
    for (const [artistName, track] of topTracks) {
      console.log(`  \u280B ${artistName}...`);
      const albumName = track.album.name;
      let artFound = false;
      if (albumName) {
        try {
          const albumInfo = await getAlbumInfo(artistName, albumName);
          track.album.url = albumInfo.url;
          if (albumInfo.image) {
            const filename = await downloadImage(albumInfo.image, IMAGES_DIR);
            if (filename) {
              track.album.image = filename;
              console.log(`  \u2713 ${artistName} \u2014 art saved as ${filename}`);
              artFound = true;
            } else {
              console.log(`  \u26A0 ${artistName} \u2014 art download failed`);
            }
          }
        } catch {
        }
      }
      if (!artFound) {
        try {
          const trackInfo = await getTrackInfo(artistName, track.name);
          if (trackInfo.album.image) {
            const filename = await downloadImage(trackInfo.album.image, IMAGES_DIR);
            if (filename) {
              track.album.image = filename;
              track.album.url = trackInfo.album.url;
              console.log(`  \u2713 ${artistName} \u2014 art saved (via track lookup) as ${filename}`);
              artFound = true;
            }
          }
        } catch {
        }
      }
      if (!artFound) {
        console.log(`  \u26A0 ${artistName} \u2014 no album art found`);
        track.album.image = null;
      }
      const remaining = topTracks.size - 1 - Array.from(topTracks.keys()).indexOf(artistName);
      if (remaining > 0) {
        await delay(500);
      }
    }
    const artists = [];
    for (const [rank, artist] of topArtists.entries()) {
      const topTrack = topTracks.get(artist.name);
      if (!topTrack) {
        continue;
      }
      artists.push({
        rank: rank + 1,
        name: artist.name,
        play_count: artist.play_count,
        url: artist.url,
        top_track: topTrack
      });
    }
    const data = {
      fetched_at: (/* @__PURE__ */ new Date()).toISOString(),
      user: USER,
      period_days: 7,
      artists
    };
    console.log(`\u280B Writing data...`);
    tmpFile = resolve(TMP_BASE, `lastfm_tmp_${Date.now()}.json`);
    writeFileSync2(tmpFile, JSON.stringify(data, null, 2));
    console.log(`\u280B Swapping data...`);
    atomicFileSwap(tmpFile, DATA_FILE);
    tmpFile = null;
    console.log(`\u2713 Wrote ${artists.length} artist(s) to data/lastfm.json`);
    console.log(`  user: ${USER}`);
    console.log(`  fetched_at: ${data.fetched_at}`);
    process.exit(0);
  } catch (err) {
    if (tmpFile) {
      cleanupFile(tmpFile);
    }
    console.error(`\u2717 Fetch failed: ${err instanceof Error ? err.message : String(err)}`);
    process.exit(1);
  }
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
export {
  matchTopTracks
};
