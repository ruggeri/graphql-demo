export interface CatParams {
  firstName: string;
  lastName: string;
  age: number;
}

export interface ICat extends CatParams {
  id: number;
}
