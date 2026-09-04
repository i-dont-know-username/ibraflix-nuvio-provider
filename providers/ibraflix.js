const TMDB_ID = "333643";

const EPISODES = {
  "1:1": "https://0807.st/epiNrPV.mp4",
  // Add future episodes: "1:2": "https://...", "2:1": "https://..."
};

function getStreams(tmdbId, mediaType, season, episode) {
  return new Promise(function(resolve, reject) {
    if (mediaType !== "tv") return resolve([]);
    if (String(tmdbId) !== TMDB_ID) return resolve([]);

    const url = EPISODES[`${season}:${episode}`];
    if (!url) return resolve([]);

    resolve([{
      name: "Ibraflix Productions",
      title: `Supernatural Powers S${season}E${episode}`,
      url: url,
      quality: "1080p"
    }]);
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getStreams };
} else {
  global.getStreams = getStreams;
}
