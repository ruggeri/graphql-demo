import { buildSchema } from "graphql";

// TODO: Input types? For easier params checking?

const schema = buildSchema(`
type Cat {
  id: Int!
  firstName: String
  lastName: String
  age: Int

  square(number: Int!): Int!
}

type Query {
  cat(id: Int!): Cat
}

type Mutation {
  createCat(firstName: String!, lastName: String!, age: Int!): Cat
}
`);

export default schema;
