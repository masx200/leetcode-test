export default function largestNumber(nums: number[]): string {
    return nums
        .sort(
            (a, b) =>
                -Number(String(a) + String(b)) + Number(String(b) + String(a))
        )
        .join("")
        .replace(/^0+/g, "0");
}
