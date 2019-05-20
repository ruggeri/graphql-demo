import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";
import schema from "./schema";

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

export { executableSchema as schema };
