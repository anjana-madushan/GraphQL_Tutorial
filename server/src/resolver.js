const TrackAPI = require("./track-api");

const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracks: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracks();
    },
  },
  Track: {
    author: ({ authorId }, __, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },

  // get a single track by ID, for the track page
  track: (_, { id }, { dataSources }) => {
    return dataSources.trackAPI.getTrack(id);
  },
};

module.exports = resolvers;