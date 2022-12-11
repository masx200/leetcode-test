export default function replaceDigits(s: string): string {
    return Array.prototype.map
        .call(s, (c, i, a) =>
            i & 1 ? String.fromCharCode(Number(c) + a[i - 1].charCodeAt(0)) : c
        )
        .join("");
}
