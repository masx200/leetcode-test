export default function countConsistentStrings(
    allowed: string,
    words: string[]
): number {
    const chars = new Set(allowed);

    return words.reduce(
        (p, c) =>
            p + Number(Array.prototype.every.call(c, (w) => chars.has(w))),
        0
    );
}
