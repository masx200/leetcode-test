export default function buildArray(target: number[], n: number): string[] {
    const set = new Set(target);
    return Array(Math.min(n, target[target.length - 1]))
        .fill(0)
        .map((_, i) => (set.has(i + 1) ? "Push" : ["Push", "Pop"]))
        .flat();
}
