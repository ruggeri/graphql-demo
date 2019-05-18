import { buildSchema } from "graphql";

const schema = buildSchema(`
input CatParams {
  firstName: String!
  lastName: String!
  age: Int!
}

type Cat {
  id: Int!
  firstName: String!
  lastName: String!
  age: Int

  square(number: Int!): Int!
}

type Query {
  cat(id: Int!): Cat
}

type Mutation {
  createCat(catParams: CatParams): Cat
}
`);

export default schema;
