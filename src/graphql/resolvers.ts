import { Cat, CatParams, createCat, fetchCat } from "../datastore";

const resolvers = {
  Query: {
    cat(_, { id, ...rest }: { id: number }): Cat | undefined {
      return fetchCat(id);
    },
  },

  Mutation: {
    createCat(_, { catParams }: { catParams: CatParams }): Cat {
      return createCat(catParams);
    },
  },
};

export default resolvers;
