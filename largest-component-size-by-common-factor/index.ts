import { UnionFind } from "./UnionFind.ts";

function largestComponentSize(nums: number[]) {
    const uf = new UnionFind();
    for (let n of nums) {
        const temp = n;
        for (let i = 2; i <= n / i; i++) {
            let flag = false;
            while (n % i === 0) {
                n /= i;
                flag = true;
            }
            if (flag) {
                uf.union(temp, i);
            }
        }
        if (n > 1) {
            uf.union(n, temp);
        }
    }

    const count: Map<number, number> = new Map();
    let res = 0;
    for (const n of nums) {
        const p = uf.find(n);
        count.set(p, (count.get(p) ?? 0) + 1);
        res = Math.max(res, count.get(p) ?? 0);
    }

    return res;
}

export default largestComponentSize;
