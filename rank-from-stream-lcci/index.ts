import { BinaryIndexTree } from "./BinaryIndexTree.ts";

export default class StreamRank {
    #bit = new BinaryIndexTree(50001);
    constructor() {}

    track(x: number): void {
        this.#bit.update(x + 1, 1);
    }

    getRankOfNumber(x: number): number {
        return this.#bit.query(x + 1);
    }
}
