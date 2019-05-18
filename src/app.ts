import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import * as winston from "winston";
import { rootValue, schema } from "./graphql";

export default async function startApp(): Promise<void> {
  const app = express();
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      rootValue,
      pretty: true,
      graphiql: true,
    }),
  );

  await app.listen(8080);
  winston.debug("We're running the app server!");
}
