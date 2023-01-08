export default function numJewelsInStones(
    jewels: string,
    stones: string
): number {
    const set = new Set(jewels);

    // deno-lint-ignore ban-ts-comment
    //@ts-ignore
    return Array.prototype.reduce.call(
        stones,
        // deno-lint-ignore ban-ts-comment
        //@ts-ignore
        (a, v) => a + Number(set.has(v)),
        0
    );
}
