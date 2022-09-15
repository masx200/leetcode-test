export default function threeConsecutiveOdds(arr: number[]): boolean {
    const n = arr.length;
    for (let i = 0; i <= n - 3; ++i) {
        if ((arr[i] & 1) & (arr[i + 1] & 1) & (arr[i + 2] & 1)) {
            return true;
        }
    }
    return false;
}
