# NODE GRAPHQL API

Sample web apis using Node & GraphQL.

- [Node Website](https://nodejs.org)
- [GraphQL Website](https://graphql.org)

---
## Features

- [x]  Setup graphql server
- [x]  Health Checkpoint
- [ ]  Add MongoDB
- [ ]  User CRUD
- [ ]  Books CRUD
- [ ]  User Authentication
- [ ]  Notification through subscriptions


---
## How to run this application

- To build this application using docker

`docker build -t node-graphql-api .`

- To run this application

`docker run -dp 4000:4000 node-graphql-api`

- Check if application is working or not

`curl -i http://localhost:4000/health`


## Notes on GraphQL
- What is GraphQL?
  > GraphQL is a Query Language for API. :thinking:
  > Simply, GraphQL or Graph Query Language is a specification for your API that tell the consumer application (or frontend) how they can interact with your API in an efficient way. It gives a complete description of data in your API to the clients, now clients can decide which data they want which not.

- Why GraphQL?
  <br/>
  > Before GraphQL, Restful API's (REpresentational State Transfer) was rulling the world (although it does not mean REST is deprecated). REST offers a great way of defining APIs. It has constraints like <i>stateless server</i>, <i>uniform interface</i> which makes REST great. The key abstraction of information in REST is a *resource* and we need to define a specific resource identifier or endpoint to indentify the resource.
  > `GET /user/:id` - get a user 
  > `POST /user/` - create a user
  > `GET /posts/` - get posts
  > `PUT /post/:id` - update a post
  >  `....`
  > In an typical application using there's more than one resource we need to fetch to gather all the information needed. In REST then we need to make multiple fetch request to gather all the information. On the other hand in GraphQL, we need to define the structure of data we need in a single fetch request.
  >> *Example*:
  >> Think of an profile page of an instagram user. We need to show the user details and his/her posts and his/her follower.
  <br/> 
  >> In RESTful scenario, 
  >> we need to make request to the server, for example
  >> - `GET /users/1` to get the user information
  >> - `GET /users/1/followers` - to get the followers of users
  >> - `GET /users/1/posts` - to get the posts of the user
  <br/>
  >> In GraphQL scenario,
  >> we need to define only one query to fetch all of this information
  >> ```
  >> query {
  >>   user(id: 1) {
  >>    name
  >>    total_followers
  >>    posts {
  >>      image
  >>      location
  >>     }
  >>   }
  >> }
  >> ```
  