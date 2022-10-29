export default function minCount(coins: number[]): number {
    return coins.reduce((p, c) => p + Math.ceil(c / 2), 0);
}
