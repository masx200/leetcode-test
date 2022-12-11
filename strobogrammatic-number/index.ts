export default function isStrobogrammatic(num: string) {
    const m = new Map([
        ["0", "0"],
        ["1", "1"],
        ["8", "8"],
        ["6", "9"],
        ["9", "6"],
    ]);
    for (let i = 0; i <= Math.floor(num.length / 2); ++i) {
        if (m.get(num.charAt(i)) != num.charAt(num.length - i - 1)) {
            return false;
        }
    }
    return true;
}
