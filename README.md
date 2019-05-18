* We define our GraphQL schema in SDL.
  * You have `Query` and `Mutation` types.
  * You have any user-defined types (like `Cat`).
  * You can define input types (like `CatParams`).
* You need resolvers.
  * You have `Query` and `Mutation` namespaces.
  * But you can also have namespaces for any individual type you want.
* You create your **executable schema** using `graphql-tools`. This is a
  helper library for graphql from Apollo.
  * Facebook's `graphql-js` will invoke *methods* for you when doing
    nested queries, but it only has top-level `Query` resolvers.
  * But if you want to separate concerns of the DB model layer, and how
    models are queried for via GraphQL, I don't think you want to
    implicitly call methods on your model objects for GraphQL query
    resolution.
* Once you have the executable schema, you can query it directly using
  `graphql-js`'s `graphql` method. Queries are in SDL. If you name a
  query, you can pass it variables `$catParams`.
* Alternatively, you can use `express-graphql`. This gives you a
  `graphqlHTTP` middleware.

## TODO

* Add proper testing.
* Authentication:
    * graphql-resolvers (combineResolvers)
* TypeGraphQL.
* Dataloader.
* Look into Relay (Apollo is an alternative for this, right?).
