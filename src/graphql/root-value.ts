import { createCat, fetchCat } from "../datastore";
import { Cat, CatParams } from "../types";

const rootValue = {
  cat({ id }: { id: number }): Cat | undefined {
    return fetchCat(id);
  },

  createCat(catParams: CatParams): Cat {
    return createCat(catParams);
  },
};

export default rootValue;
