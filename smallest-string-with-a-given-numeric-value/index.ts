export default function getSmallestString(n: number, k: number): string {
    if (n * 26 === k) return "z".repeat(n);
    let s = "", num = 0;
    for (let i = 0; i < n; i++) {
        const diff = (n - i - 1) * 26 - (k - num);
        if (diff >= 0) {
            s += "a";
            num++;
        } else {
            const code = Math.abs(diff);
            num += code;
            s += String.fromCharCode(code + 96);
            break;
        }
    }
    return s.padEnd(n, "z");
}
