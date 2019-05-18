import { graphql } from "graphql";
import { Cat } from "./types";
import { rootValue, schema } from "./graphql";

// This tests out your schema/resolvers and makes some requests.

export async function fetchCat(id: number): Promise<Cat | undefined> {
  // TODO: Something is wrong with variables...
  const result = await graphql<{ cat: Cat | undefined }>(
    schema,
    `
      query FetchCat($id: Int!) {
        cat(id: $id) {
          id
          firstName
          lastName
          age
        }
      }
    `,
    rootValue,
    {},
    { id },
  );

  if (result.errors) {
    throw result.errors;
  }

  return result.data!.cat;
}

export async function createCat(
  firstName: string,
  lastName: string,
  age: number,
): Promise<Cat | undefined> {
  // TODO: Something is wrong with variables...
  const result = await graphql<{ createCat: Cat | undefined }>(
    schema,
    `
      mutation {
        createCat(firstName: "${firstName}", lastName: "${lastName}", age: ${age}) {
          id
          firstName
          lastName
          age
        }
      }
    `,
    rootValue,
  );

  if (result.errors) {
    throw result.errors;
  }

  return result.data!.createCat;
}
