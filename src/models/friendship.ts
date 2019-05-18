import {
  createFriendships,
  fetchFriendIdsFor,
  seedFriendships,
} from "./friendship_data";

export class Friendship {
  public static fetchFriendIdsFor(catId: number): Promise<number[]> {
    return fetchFriendIdsFor(catId);
  }

  public static create(
    friendId1: number,
    friendId2: number,
  ): Promise<void> {
    return createFriendships(friendId1, friendId2);
  }

  public friendId1: number;

  public friendId2: number;
}

seedFriendships();
