const schema = `
  type Health {
    success: Boolean!
    message: String!
    uptime: Float
  }

  type Query {
    health: Health
  }
`;

module.exports = {
  schema
};