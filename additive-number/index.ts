export default function isAdditiveNumber(num: string): boolean {
    if (num.length < 3) return false;
    const max = num.length - Math.floor(num.length / 3);
    if (checkAdditive(num.slice(0, 1), num.slice(1, 2), num.slice(2))) {
        return true;
    }
    for (let i = 1; i <= Math.floor(num.length / 2); i++) {
        for (let j = i + 1; j <= max; j++) {
            if (checkAdditive(num.slice(0, i), num.slice(i, j), num.slice(j))) {
                return true;
            }
        }
    }
    return false;
}
function checkAdditive(a: string, b: string, c: string): boolean {
    if ([a, b, c].some((s) => s[0] === "0" && s.length > 1)) return false;
    if (c.length < Math.max(a.length, b.length)) return false;
    const sum = String(Number(a) + Number(b));
    if (c.startsWith(sum)) {
        if (c.length === sum.length) return true;
        return checkAdditive(b, sum, c.slice(sum.length));
    } else return false;
}
