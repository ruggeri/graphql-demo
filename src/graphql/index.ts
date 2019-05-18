import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";
import typeDefs from "./type-defs";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export { schema };
