export default function nextGreatestLetter(
    letters: string[],
    target: string,
): string {
    const length = letters.length;
    if (target >= letters[length - 1]) {
        return letters[0];
    }
    let low = 0,
        high = length - 1;
    while (low < high) {
        const mid = Math.floor((high + low) / 2);
        if (letters[mid] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return letters[low];
}
