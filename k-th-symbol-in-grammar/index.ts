import hammingWeight from "../number-of-1-bits/index.ts";

export default function kthGrammar(_n: number, k: number): number {
    return hammingWeight(k - 1) % 2;
}
