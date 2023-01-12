export default function kidsWithCandies(
    candies: number[],
    extraCandies: number,
): boolean[] {
    const max = Math.max(...candies);
    return candies.map((candy) => candy + extraCandies >= max);
}
