export default class FileSharing {
    #chunkUsersMap = new Map<number, Set<number>>();

    #userChunksMap = new Map<number, Set<number>>();
    #userQueue = new BinaryHeap<number>((a, b) => a - b);
    #maxUser = 0;
    constructor(_m: number) {}

    join(ownedChunks: number[]): number {
        let userID = 0;

        if (this.#userQueue.isEmpty()) {
            this.#maxUser++;
            userID = this.#maxUser;
        } else {
            userID = this.#userQueue.pop() as number;
        }

        for (const chunk of ownedChunks) {
            const users = this.#chunkUsersMap.get(chunk) ?? new Set();
            users.add(userID);
            this.#chunkUsersMap.set(chunk, users);
        }
        this.#userChunksMap.set(userID, new Set(ownedChunks));
        return userID;
    }
    leave(userID: number) {
        if (this.#userChunksMap.has(userID)) {
            const chunks = this.#userChunksMap.get(userID) ?? [];
            for (const chunk of chunks) {
                if (this.#chunkUsersMap.has(chunk)) {
                    const users = this.#chunkUsersMap.get(chunk) as Set<number>;
                    users.delete(userID);
                    if (users.size > 0) this.#chunkUsersMap.set(chunk, users);
                    else this.#chunkUsersMap.delete(chunk);
                }
            }
            this.#userChunksMap.delete(userID);
        }

        this.#userQueue.push(userID);
    }

    request(userID: number, chunkID: number): Array<number> {
        const usersList = Array<number>();
        if (
            !this.#chunkUsersMap.has(chunkID) ||
            !this.#userChunksMap.has(userID)
        ) return [];

        usersList.push(...(this.#chunkUsersMap.get(chunkID) ?? []));

        const users = this.#chunkUsersMap.get(chunkID) as Set<number>;
        users.add(userID);

        this.#chunkUsersMap.set(chunkID, users);

        const chunks = this.#userChunksMap.get(userID) as Set<number>;

        chunks.add(chunkID);
        this.#userChunksMap.set(userID, chunks);
        usersList.sort((a, b) => a - b);
        return usersList;
    }
}
import { BinaryHeap } from "https://deno.land/std@0.162.0/collections/binary_heap.ts";
