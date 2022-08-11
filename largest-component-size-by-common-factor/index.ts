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

class UnionFind {
    sizes: Map<number, number> = new Map();
    parents: Map<number, number> = new Map();
    constructor() {
    }

    find(x: number) {
        if (x !== (this.parents.get(x) ?? x)) {
            this.parents.set(x, this.find(this.parents.get(x) ?? x));
        }
        return this.parents.get(x) ?? x;
    }

    union(a: number, b: number) {
        const fa = this.find(a);
        const fb = this.find(b);
        if (fa == fb) {
            return;
        }
        const sa = this.sizes.get(fa) ?? 1;
        const sb = this.sizes.get(fb) ?? 1;

        if (sa < sb) {
            this.parents.set(fa, fb);
            this.sizes.set(fb, sb + sa);
        } else {
            this.parents.set(fb, fa);
            this.sizes.set(fa, sb + sa);
        }
    }
}
export default largestComponentSize;
