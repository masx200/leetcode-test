import { BinarySearchTree } from "../deps.ts";
import { traversal_bst_range } from "./traversal_bst_range.ts";

export default class TweetCounts {
    #name_to_bst = new Map<string, BinarySearchTree<number, number>>();
    constructor() {}

    recordTweet(tweetName: string, time: number): void {
        const bst = this.#name_to_bst.get(tweetName) ??
            new BinarySearchTree<number, number>();
        const node = bst.find(time);
        if (node) {
            node.setValue(node.getValue() + 1);
            return;
        }
        bst.insert(time, 1);
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
        traversal_bst_range(
            bst.root(),
            startTime,
            endTime,
            (num: number, value: number) => {
                result[Math.floor((num - startTime + 1) / length)] += value;
            },
        );
        return result;
    }
}
