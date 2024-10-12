const gql = require("graphql-tag");

const typeDfs = gql`
"A track is a group of Modules that teaches about a specific topic"
type Track {
  "ID of the track, should not be null"
  id: ID!

  "Title of the track, should not be null"
  title: String!

  "Author of the track, should not be null"
  author: Author!

  "Thumbnail image for the track, can be null in certain instances"
  thumbnail: String

  "Length of the track in minutes, can be null in certain instances"
  length: Int

  "Number of modules in the track, can be null in certain instances"
  modulesCount: Int

  "The track's complete description, can be in Markdown format"
  description: String

  "The number of times a track has been viewed"
  numberOfViews: Int

  "The track's complete array of Modules"
  modules: [Module!]!
}

"A Module is a single unit of teaching. Multiple Modules compose a Track"
type Module {
  id: ID!
  "The Module's title"
  title: String!
  "The Module's length in minutes"
  length: Int
}

"Author of a complete Track or a Module"
type Author {
  id: ID!
  name: String!
  photo: String
}

"A query is the entry point to our schema
type Query {
  "Get all tracks"
  tracks: [Track]

  "Fetch a specific track, provided a track's ID"
  track(id: ID!): Track
}
`;

module.exports = typeDfs;
