import { counter } from "../substring-with-concatenation-of-all-words/counter.ts";

function maxNumberOfBalloons(text: string): number {
    const cnt = counter(text);
    const bat = counter("balloon");
    return Math.min(
        ...Array.from(bat.entries()).map(([s, c]) =>
            Math.floor((cnt.get(s) ?? 0) / c)
        ),
    );
}

export default maxNumberOfBalloons;
