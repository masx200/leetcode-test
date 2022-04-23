export default function myAtoi(s: string): number {
    s = s.trimStart();
    if (s.length === 0) {
        return 0;
    }
    let positive = true;
    if (s.startsWith("+")) {
        positive = true;
        s = s.slice(1);
    } else if (s.startsWith("-")) {
        positive = false;
        s = s.slice(1);
    }
    const numberchars = [];
    while (intchars.includes(s[0])) {
        numberchars.push(s[0]);

        s = s.slice(1);
    }
    if (numberchars.length === 0) return 0;
    // let num=Number(numberchars.join(''))
    let num = 0;
    for (const n of numberchars) {
        num *= 10;
        // num+=Number(n)
        num += intchartonum.get(n) || 0;
    }
    if (!positive) {
        num = -1 * num;
    }
    return Math.max(-(2 ** 31), Math.min(num, 2 ** 31 - 1));
}
const intchars = Array.from({ length: 10 }).map((_v, i) => String(i));
const intchartonum = new Map([...intchars.entries()].map(([a, b]) => [b, a]));
