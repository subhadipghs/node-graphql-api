# NODE GRAPHQL API

Sample web apis using Node & GraphQL.

- [Node Website](https://nodejs.org)
- [GraphQL Website](https://graphql.org)

---
## Features

- [x] - Health Checkpoint
- [ ] - Add graphql endpoint
- [ ] - Define schema and resolvers
- [ ] - Add api docs (swagger)
- [ ] - User Authentication
- [ ] - Travel Booking API

---
## How to run

- To build this application using docker

`docker build -t node-graphql-api .`

- To run this application

`docker run -dp 4000:4000 node-graphql-api`

- Check if application is working or not

`curl -i http://localhost:4000/health`
