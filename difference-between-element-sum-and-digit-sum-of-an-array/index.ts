export default function differenceOfSum(nums: number[]): number {
    return Math.abs(
        nums.reduce((a, b) => a + b, 0) -
            nums.map((a) => a.toString()).join("").split("").map(Number).reduce(
                (a, b) => a + b,
                0,
            ),
    );
}
