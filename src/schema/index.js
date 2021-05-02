const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLList, GraphQLFloat, GraphQLBoolean } = require("graphql");

const HealthCheckType = new GraphQLObjectType({
  name: 'Health',
  fields: () => ({
    message: { type: GraphQLNonNull(GraphQLString) },
    uptime: { type: GraphQLFloat },
    success: { type: GraphQLBoolean }
  })
})


const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    health: {
      description: 'Server health information',
      type: HealthCheckType,
      resolve: (parent, args) => {
        return {
          success: true,
          message: "Server is running",
          uptime: process.uptime()
        }
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQueryType,
})