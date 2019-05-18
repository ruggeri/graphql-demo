import { createCat, fetchCat, seedCats } from "./cats_data";

export interface CatParams {
  firstName: string;
  lastName: string;
  age: number;
}

export class Cat {
  public static fetch(id: number): Promise<Cat | undefined> {
    return fetchCat(id);
  }

  public static create(catParams: CatParams): Promise<Cat> {
    return createCat(catParams);
  }

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

seedCats();
