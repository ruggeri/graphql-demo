const schema = `
input CatParams {
  firstName: String!
  lastName: String!
  age: Int!
}

type Cat {
  id: Int!
  firstName: String!
  lastName: String!
  age: Int!

  friends: [Cat!]!
  square(number: Int!): Int!
}

type Query {
  cat(id: Int!): Cat
}

type Mutation {
  createCat(catParams: CatParams): Cat
  createFriendship(friendId1: Int!, friendId2: Int!): Boolean
}
`;

export default schema;
