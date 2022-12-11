import { BinarySearchTree } from "../deps.ts";
import { traversal_bst_range } from "./traversal_bst_range.ts";

export default class TweetCounts {
    #name_to_bst = new Map<string, BinarySearchTree<number>>();
    #key_to_count = new Map<number, number>();

    recordTweet(tweetName: string, time: number): void {
        const bst = this.#name_to_bst.get(tweetName) ??
            new BinarySearchTree<number>();
        const node = bst.find(time);
        if (node) {
            this.#key_to_count.set(
                time,
                (this.#key_to_count.get(time) ?? 0) + 1,
            );

            return;
        }
        bst.insert(time);
        this.#key_to_count.set(time, (this.#key_to_count.get(time) ?? 0) + 1);
        this.#name_to_bst.set(tweetName, bst);
    }

    getTweetCountsPerFrequency(
        freq: string,
        tweetName: string,
        startTime: number,
        endTime: number,
    ): number[] {
        const bst = this.#name_to_bst.get(tweetName);
        if (!bst) return [];
        const length = freq === "minute"
            ? 60
            : freq === "hour"
            ? 3600
            : freq === "day"
            ? 86400
            : 0;
        if (length === 0) {
            throw Error("invalid frequency");
        }
        const result: number[] = Array(
            Math.ceil((endTime - startTime + 1) / length),
        ).fill(0);
        traversal_bst_range(bst.root(), startTime, endTime, (num: number) => {
            const time = num;
            const value = this.#key_to_count.get(time) ?? 0;

            result[Math.floor((num - startTime + 1) / length)] += value;
        });
        return result;
    }
}
