export default function restoreString(s: string, indices: number[]): string {
    //@ts-ignore
    return (
        //@ts-ignore
        Array.prototype.reduce
            //@ts-ignore
            .call(s, (p, c, i) => ((p[indices[i]] = c), p), [...s])
            .join("")
    );
}
