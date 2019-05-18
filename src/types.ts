export interface CatParams {
  firstName: string;
  lastName: string;
  age: number;
}

export interface Cat extends CatParams {
  id: number;
}
