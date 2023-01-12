export default function countBalls(
    lowLimit: number,
    highLimit: number,
): number {
    const cnt = new Map<number, number>();
    for (let index = lowLimit; index <= highLimit; index++) {
        const key = index
            .toString()
            .split("")
            .map(Number)
            .reduce((p, c) => p + c, 0);
        cnt.set(key, (cnt.get(key) ?? 0) + 1);
    }
    return Math.max(...cnt.values());
}
