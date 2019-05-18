import { Cat, CatParams } from "./cat";

const catsMap: Map<number, Cat> = new Map();

const catsSeedData = [
  {
    id: 1,
    data: {
      firstName: "Gizmo",
      lastName: "Ruggeri",
      age: 15,
    },
  },
  {
    id: 2,
    data: {
      firstName: "Sally",
      lastName: "Ride",
      age: 7,
    },
  },
  {
    id: 3,
    data: {
      firstName: "Markov",
      lastName: "Ruggeri",
      age: 15,
    },
  },
];

export function createCat(catParams: CatParams): Promise<Cat> {
  const newId = catsMap.size + 1;
  const newCat = new Cat(newId, catParams);

  catsMap.set(newId, newCat);

  return new Promise(
    (resolve): void => {
      // Sleep 10ms to pretend that we're create a new cat.
      setTimeout((): void => resolve(newCat), 10);
    },
  );
}

export function fetchCat(id: number): Promise<Cat | undefined> {
  return new Promise(
    (resolve): void => {
      // Sleep 10ms to pretend that we're fetching a new cat.
      setTimeout((): void => resolve(catsMap.get(id)), 10);
    },
  );
}

export function seedCats(): void {
  catsSeedData.forEach(
    ({ data, id }): void => {
      const cat = new Cat(id, data);
      catsMap.set(id, cat);
    },
  );
}
