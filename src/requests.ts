import { graphql } from "graphql";
import { Cat, CatParams } from "./models";
import { schema } from "./graphql";

// This tests out your schema/resolvers and makes some requests.

export async function fetchCat(id: number): Promise<Cat | undefined> {
  const result = await graphql<{ cat: Cat | undefined }>(
    schema,
    `
      query FetchCat($id: Int!) {
        cat(id: $id) {
          id
          firstName
          lastName
          age

          square(number: 123)
        }
      }
    `,
    {},
    {},
    { id },
  );

  if (result.errors) {
    throw result.errors;
  }

  return result.data!.cat;
}

export async function createCat(
  catParams: CatParams,
): Promise<Cat | undefined> {
  const result = await graphql<{ createCat: Cat | undefined }>(
    schema,
    `
      mutation CreateCat($catParams: CatParams) {
        createCat(catParams: $catParams) {
          id
          firstName
          lastName
          age
        }
      }
    `,
    {},
    {},
    { catParams },
  );

  if (result.errors) {
    throw result.errors;
  }

  return result.data!.createCat;
}
