export default function countAsterisks(s: string): number {
    return s.split("|").filter((_v, i) => i % 2 === 0).join("").replace(
        /[^\*]/g,
        "",
    ).length;
}
