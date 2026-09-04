const TMDB_ID = "333643";

const EPISODES = {
  "1:1": "https://0807.st/epiNrPV.mp4",

  // Add later:
  // "1:2": "https://...",
  // "1:3": "https://..."
};

function getStreams(tmdbId, mediaType, season, episode) {
  if (mediaType !== "tv") return [];
  if (String(tmdbId) !== TMDB_ID) return [];

  const url = EPISODES[`${season}:${episode}`];

  if (!url) return [];

  return [{
    name: "Ibraflix Productions",
    title: `Supernatural Powers S${season}E${episode}`,
    url,
    quality: "1080p"
  }];
}

module.exports = { getStreams };
