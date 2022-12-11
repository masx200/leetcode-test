export default function thousandSeparator(n: number): string {
    const str = [...n.toString()].reverse();
    return Array(Math.ceil(str.length / 3))
        .fill(0)
        .map((_, i) =>
            str
                .slice(i * 3, i * 3 + 3)
                .reverse()
                .join("")
        )
        .reverse()
        .join(".");
}
