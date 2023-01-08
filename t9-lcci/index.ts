export default function getValidT9Words(
    num: string,
    words: string[]
): string[] {
    return words.filter((w) =>
        Array.prototype.every.call(
            w,
            (c, i) =>
                num[i] === String(key[c.charCodeAt(0) - "a".charCodeAt(0)])
        )
    );
}
const key = [
    2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9,
    9,
];
