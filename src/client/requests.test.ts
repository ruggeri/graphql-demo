import { createCat, createFriendship, fetchCat } from "./requests";

const CURIE_ID = 1;
const SALLY_ID = 2;
const MARKOV_ID = 3;

test("fetchCat finds a cat by id", async (): Promise<void> => {
  const cat = await fetchCat(1);

  expect(cat).toMatchObject({
    id: 1,
    firstName: "Gizmo",
    lastName: "Ruggeri",
    age: 15,
  });
});

test("createCat creates a new cat", async (): Promise<void> => {
  const newCat = await createCat({
    firstName: "Senacy",
    lastName: "Tamboer",
    age: -1,
  });

  expect(typeof newCat.id).toBe("number");

  expect(newCat).toMatchObject({
    firstName: "Senacy",
    lastName: "Tamboer",
    age: -1,
  });
});

test("fetchCat should fetch friendships", async (): Promise<void> => {
  const cat = await fetchCat(CURIE_ID);

  if (cat === undefined) {
    throw new Error("expected to find cat...");
  }

  expect(cat.friends).toHaveLength(2);
  expect(cat.friends).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        firstName: "Markov",
      }),

      expect.objectContaining({
        firstName: "Sally",
      }),
    ]),
  );
});

test("createFriendship creates friends", async (): Promise<void> => {
  await createFriendship(2, 3);

  const markov = (await fetchCat(MARKOV_ID))!;
  const sally = (await fetchCat(SALLY_ID))!;

  [
    { cat: markov, friendName: "Sally" },
    { cat: sally, friendName: "Markov" },
  ].forEach(
    ({ cat, friendName }): void => {
      expect(cat.friends).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            firstName: friendName,
          }),
        ]),
      );
    },
  );
});
