import { createCat, fetchCat } from "../datastore";
import { Cat, CatParams } from "../types";

const resolvers = {
  cat({ id }: { id: number }): Cat | undefined {
    return fetchCat(id);
  },

  createCat(catParams: CatParams): Cat {
    return createCat(catParams);
  },

  Cat: {
    square(n: number): number {
      // TODO: This isn't being called when the square property is
      // requested on a cat?
      return n * n;
    },
  },
};

export default resolvers;
