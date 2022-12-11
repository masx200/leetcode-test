export default function restoreString(s: string, indices: number[]): string {
    //@ts-ignore
    return Array.prototype.reduce
        .call(s, (p, c, i) => ((p[indices[i]] = c), p), [...s])
        .join("");
}
