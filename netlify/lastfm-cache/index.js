// Netlify Build plugin: persists the listensfetcher state (previous data
// pull + album art) between builds via the Netlify build cache.
//
// The fetcher (listensfetcher) reads .lastfm-state/lastfm.json when it is
// newer than the committed data/lastfm.json, and writes the state directory
// at the end of a successful run. Both cache operations are best-effort:
// a cache failure must never fail the build.
module.exports = {
  async onPreBuild({ utils }) {
    try {
      await utils.cache.restore(".lastfm-state");
    } catch (error) {
      console.warn(`lastfm-cache: could not restore state: ${error.message}`);
    }
  },
  async onPostBuild({ utils }) {
    try {
      await utils.cache.save(".lastfm-state");
    } catch (error) {
      console.warn(`lastfm-cache: could not save state: ${error.message}`);
    }
  }
};
