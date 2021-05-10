const { gql } = require('apollo-server');

const typeDefs = gql`

  type Health {
    message: String!
    uptime: String!
    success: Boolean!
  }

  # queries
  type Query {
    health: Health
  }
`

module.exports = typeDefs;