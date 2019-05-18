import { Cat, CatParams } from "../models";

const resolvers = {
  Query: {
    cat(_: object, { id }: { id: number }): Cat | undefined {
      return Cat.fetch(id);
    },
  },

  Mutation: {
    createCat(_: object, { catParams }: { catParams: CatParams }): Cat {
      return Cat.create(catParams);
    },
  },
};

export default resolvers;
