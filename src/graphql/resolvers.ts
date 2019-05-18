import { Cat, createCat, fetchCat } from "../datastore";
import { CatParams } from "../types";

const resolvers = {
  cat({ id }: { id: number }): Cat | undefined {
    return fetchCat(id);
  },

  createCat(catParams: CatParams): Cat {
    return createCat(catParams);
  },
};

export default resolvers;
