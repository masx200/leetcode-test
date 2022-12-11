export default function percentageLetter(s: string, letter: string): number {
    return Math.floor(
        // deno-lint-ignore ban-ts-comment
        //@ts-ignore
        (Array.prototype.reduce.call(s, (a, v) => a + Number(v === letter), 0) /
            s.length) *
            100,
    );
}
