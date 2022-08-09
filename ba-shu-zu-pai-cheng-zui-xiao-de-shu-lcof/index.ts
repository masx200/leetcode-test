export default function minNumber(nums: number[]): string {
    return nums
        .sort((a, b) =>
            (String(a) + String(b)).localeCompare(String(b) + String(a))
        )
        .join("");
}
