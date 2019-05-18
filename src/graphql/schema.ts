import { buildSchema } from "graphql";

const schema = buildSchema(`
type Cat {
  id: Int!
  firstName: String
  lastName: String
  age: Int
}

type Query {
  cat(id: Int!): Cat
}

type Mutation {
  createCat(firstName: String!, lastName: String!, age: Int!): Cat
}
`);

export default schema;
