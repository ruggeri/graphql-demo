import { graphql } from "graphql";
import { Cat, CatParams } from "../models";
import { schema } from "../graphql";

// This tests out your schema/resolvers and makes some requests.

interface CatWithFriends extends Cat {
  friends: Cat[];
}

export async function fetchCat(
  id: number,
): Promise<CatWithFriends | undefined> {
  const result = await graphql<{ cat: CatWithFriends | undefined }>(
    schema,
    `
      query FetchCat($id: Int!) {
        cat(id: $id) {
          id
          firstName
          lastName
          age

          friends {
            id
            firstName
            lastName
          }
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

export async function createCat(catParams: CatParams): Promise<Cat> {
  const result = await graphql<{ createCat: Cat }>(
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

export async function createFriendship(
  friendId1: number,
  friendId2: number,
): Promise<Cat | undefined> {
  const result = await graphql<{ createCat: Cat | undefined }>(
    schema,
    `
      mutation CreateCat($friendId1: Int!, $friendId2: Int!) {
        createFriendship(friendId1: $friendId1, friendId2: $friendId2)
      }
    `,
    {},
    {},
    { friendId1, friendId2 },
  );

  if (result.errors) {
    throw result.errors;
  }

  return result.data!.createCat;
}
