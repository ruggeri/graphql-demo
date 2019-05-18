import { Cat, createCat, CatParams, fetchCat } from "../datastore";

const resolvers = {
  cat({ id }: { id: number }): Cat | undefined {
    return fetchCat(id);
  },

  createCat({ catParams }: { catParams: CatParams }): Cat {
    return createCat(catParams);
  },
};

export default resolvers;
