export default class Solution {
    #select: () => number;
    constructor(w: number[]) {
        this.#select = Selector(
            w.map((v, i) => ({ result: i, chance: v })),
        ).select;
    }

    pickIndex(): number {
        return this.#select();
    }
}
import { Selector } from "https://deno.land/x/masx200_weighted_randomly_select@2.1.1/mod.ts";
