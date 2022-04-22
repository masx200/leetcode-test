/**
 Do not return anything, modify s in-place instead.
 */
export default function reverseString(s: string[]): void {
    if (s.length < 2) return;
    const half = Math.floor(s.length / 2);
    for (let i = 0; i < half; i++) {
        [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
    }
}
