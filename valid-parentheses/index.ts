export default function isValid(s: string): boolean {
    if (s.length === 0) return true;
    if (s.length % 2) return false;
    const stk = [];
    for (const ch of s) {
        if (pairs.has(ch)) {
            if (stk.length === 0) return false;
            if (stk.slice(-1)[0] !== pairs.get(ch)) return false;
            stk.pop();
        } else {
            stk.push(ch);
        }
    }
    return stk.length === 0;
}
const pairs = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
]);
