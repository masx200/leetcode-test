export default function reverseLeftWords(s: string, n: number): string {
    return Array.from(s).map((_v, i) => s[(i + n) % s.length]).join("");
}
