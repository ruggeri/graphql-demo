export interface CatParams {
  firstName: string;
  lastName: string;
  age: number;
}

export class Cat {
  public constructor(id: number, params: CatParams) {
    this.id = id;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.age = params.age;
  }

  public id: number;

  public firstName: string;

  public lastName: string;

  public age: number;

  // eslint-disable-next-line class-methods-use-this
  public square({ number }: { number: number }): number {
    return number * number;
  }
}

const cats: Map<number, Cat> = new Map([
  [
    1,
    new Cat(1, {
      firstName: "Gizmo",
      lastName: "Ruggeri",
      age: 15,
    }),
  ],
  [
    2,
    new Cat(2, {
      firstName: "Sally",
      lastName: "Ride",
      age: 7,
    }),
  ],
  [
    3,
    new Cat(3, {
      firstName: "Markov",
      lastName: "Ruggeri",
      age: 15,
    }),
  ],
]);

export function fetchCat(id: number): Cat | undefined {
  return cats.get(id);
}

export function createCat(catParams: CatParams): Cat {
  const newId = cats.size + 1;
  const newCat = new Cat(newId, catParams);

  cats.set(newId, newCat);

  return newCat;
}
