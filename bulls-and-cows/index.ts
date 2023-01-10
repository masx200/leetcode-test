import { counter } from "../substring-with-concatenation-of-all-words/counter.ts";

function getHint(secret: string, guess: string): string {
    const bulls = [...secret].filter((v, i) => guess[i] === v).length;

    const cntS = counter(secret);
    const cntG = counter(guess);
    const cows = [...cntS.entries()].reduce(
        (p, [k, v]) => p + Math.min(v, cntG.get(k) ?? 0),
        0,
    ) - bulls;
    return `${bulls}A${cows}B`;
}
export default getHint;
