import { Cat, CatParams, createCat, fetchCat } from "../datastore";

const resolvers = {
  Query: {
    cat(_: object, { id }: { id: number }): Cat | undefined {
      return fetchCat(id);
    },
  },

  Mutation: {
    createCat(_: object, { catParams }: { catParams: CatParams }): Cat {
      return createCat(catParams);
    },
  },
};

export default resolvers;
