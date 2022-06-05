export default function distributeCandies(candyType: number[]): number {
    return Math.min(candyType.length / 2, new Set(candyType).size);
}
