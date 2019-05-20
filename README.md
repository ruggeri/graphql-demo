* We define our GraphQL schema in SDL.
  * You have `Query` and `Mutation` types.
  * You have any user-defined types (like `Cat`).
  * You can define input types (like `CatParams`).
* You need resolvers.
  * You have `Query` and `Mutation` namespaces.
  * But you can also have namespaces for any individual type you want.
  * E.g., `Cat#friends`.
* You create your **executable schema** using `graphql-tools`. This is a
  helper library for graphql from Apollo.
  * Facebook's `graphql-js` will invoke *methods* for you when doing
    nested queries, but it only has top-level `Query` resolvers.
  * `graphql-tools` lets you separate resolver logic from models.
* Once you have the executable schema, you can query it directly using
  `graphql-js`'s `graphql` method. Queries are in SDL. If you name a
  query, you can pass it variables `$catParams`.
* Alternatively, you can use `express-graphql`. This gives you a
  `graphqlHTTP` middleware.

## TODO

* TypeGraphQL.
* Authentication/Authorization:
    * graphql-resolvers (combineResolvers)
    * The FB Graphql docs recommend doing authorization in the business
      logical layer, rather than in the resolver.
    * You can get the authed user because the express `Request` object
      is passed in as the context to your resolvers.
* Dataloader.
* Look into Relay (Apollo is an alternative for this, right?).
