import { Cat, CatParams } from "./types";

const cats: Map<number, Cat> = new Map([
  [
    1,
    {
      id: 1,
      firstName: "Gizmo",
      lastName: "Ruggeri",
      age: 15,
    },
  ],
  [
    2,
    {
      id: 2,
      firstName: "Sally",
      lastName: "Ride",
      age: 7,
    },
  ],
  [
    3,
    {
      id: 3,
      firstName: "Markov",
      lastName: "Ruggeri",
      age: 15,
    },
  ],
]);

export function fetchCat(id: number): Cat | undefined {
  return cats.get(id);
}

export function createCat(catParams: CatParams): Cat {
  const newId = cats.size + 1;
  const newCat = {
    id: newId,
    ...catParams,
  };

  cats.set(newId, newCat);

  return newCat;
}
