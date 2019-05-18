import { Cat, CatParams, Friendship } from "../models";

const resolvers = {
  Query: {
    async cat(
      _: object,
      { id }: { id: number },
    ): Promise<Cat | undefined> {
      return Cat.fetch(id);
    },
  },

  Mutation: {
    async createCat(
      _: object,
      { catParams }: { catParams: CatParams },
    ): Promise<Cat> {
      return Cat.create(catParams);
    },

    async createFriendship(
      _: object,
      {
        friendId1,
        friendId2,
      }: { friendId1: number; friendId2: number },
    ): Promise<void> {
      return Friendship.create(friendId1, friendId2);
    },
  },

  Cat: {
    async friends(cat: Cat): Promise<Cat[]> {
      const friendIds = await Friendship.fetchFriendIdsFor(cat.id);

      const friendPromises = friendIds.map(
        async (friendId): Promise<Cat> => {
          // I throw away undefined because the cats ids are explicitly
          // from the Friendships table.
          return (await Cat.fetch(friendId))!;
        },
      );

      return Promise.all(friendPromises);
    },
  },
};

export default resolvers;
