const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./modules/rootSchema');
const resolvers = require('./modules/rootResolver');
const { buildSchema } = require('graphql');

const app = express();

app.use(express.json());

console.log(schema);

console.log(resolvers);


// graphql endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(`
      ${schema}      
    `),
    rootValue: resolvers,
    graphiql: true    
  })
)


module.exports = app;