export default function isPalindrome(x: number): boolean {
    if (0 <= x && x <= 9) return true;
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    const a = String(x);

    const half = Math.floor(a.length / 2);

    for (let i = 0; i <= half; i++) {
        if (a[i] !== a[a.length - i - 1]) return false;
    }
    return true;
}
