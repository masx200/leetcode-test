function largestComponentSize(nums: number[]) {
    // const max = Math.max(...nums);
    const uf = new UnionFind(/*max + 1*/);
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
        //  if (!count[p]) count[p] = 0;
        //   count[p]++;

        count.set(p, (count.get(p) ?? 0) + 1);
        res = Math.max(res, count.get(p) ?? 0);
    }

    return res;
}

class UnionFind {
    sizes: Map<number, number> = new Map();
    parents: Map<number, number> = new Map();
    constructor(/*size:number*/) {
        // 初始化数组，其值为其索引值
        /* this.parents = Array(size)
             .fill(0)
             .map((_, i) => i);
         this.sizes = Array(size).fill(1);
         */
    }

    /**
     * 返回某个节点x的根节点
     */
    find(x: number) {
        if (x !== (this.parents.get(x) ?? x)) {
            this.parents.set(x, this.find(this.parents.get(x) ?? x));
        }
        return this.parents.get(x) ?? x;
    }

    /**
     * 连接
     */
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
            // fb是root
            this.sizes.set(fb, sb + sa);
        } else {
            this.parents.set(fb, fa);
            // fa是root
            this.sizes.set(fa, sb + sa);
        }
    }
}
export default largestComponentSize;
