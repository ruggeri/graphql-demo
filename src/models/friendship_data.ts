const friendshipsMap: Map<number, number[]> = new Map();

const firendshipsSeedData = [
  // Gizmo friends with Sally and Markov
  {
    friendId1: 1,
    friendId2: 2,
  },
  {
    friendId1: 1,
    friendId2: 3,
  },
];

// unidirectional private helper function
function persistFriendship(friendId1: number, friendId2: number): void {
  if (friendshipsMap.get(friendId1) === undefined) {
    friendshipsMap.set(friendId1, []);
  }

  friendshipsMap.get(friendId1)!.push(friendId2);
}

export function createFriendships(
  friendId1: number,
  friendId2: number,
): Promise<void> {
  return new Promise(
    (resolve): void => {
      persistFriendship(friendId1, friendId2);
      persistFriendship(friendId2, friendId1);

      // Sleep 10ms to pretend that we're create a new cat.
      setTimeout((): void => resolve(), 10);
    },
  );
}

export function fetchFriendIdsFor(catId: number): Promise<number[]> {
  return new Promise(
    (resolve): void => {
      // Sleep 10ms to pretend that we're fetching a new cat.
      const friendIds = friendshipsMap.get(catId) || [];
      setTimeout((): void => resolve(friendIds), 10);
    },
  );
}

export function seedFriendships(): void {
  firendshipsSeedData.forEach(
    ({ friendId1, friendId2 }): void => {
      persistFriendship(friendId1, friendId2);
      persistFriendship(friendId2, friendId1);
    },
  );
}
