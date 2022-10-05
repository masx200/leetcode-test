export default function numsSameConsecDiff(n: number, k: number): number[] {
    const q = [...Array(9).keys()].map((i) => i + 1);
    const ans: number[] = [];
    while (q.length) {
        const num = q[0];
        q.shift();
        if (Math.floor(Math.log10(num) + 1) === n) {
            ans.push(num);
        } else {
            const r = num % 10;
            if (r + k <= 9) q.push(num * 10 + r + k);
            if (r - k >= 0 && k !== 0) q.push(num * 10 + r - k);
        }
    }
    return ans;
}
