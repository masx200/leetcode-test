function countPairs(nums: number[], low: number, high: number): number {
    return f(nums, high) - f(nums, low - 1);
}

function f(nums: number[], x: number) {
    const HIGH_BIT = 14;
    const root = new Trie();
    let res = 0;

    function add(num: number) {
        let cur: Trie = root;
        for (let k = HIGH_BIT; k >= 0; k--) {
            const bit = (num >> k) & 1;

            const next = cur.son[bit] ?? new Trie();
            cur.son[bit] = next;
            cur = next;
            cur.sum++;
        }
    }

    function get(num: number, x: number) {
        let cur: Trie = root;
        let sum = 0;
        for (let k = HIGH_BIT; k >= 0; k--) {
            const r = (num >> k) & 1;

            if (((x >> k) & 1) !== 0) {
                const next = cur.son[r];
                if (next) {
                    sum += next.sum;
                }
                const other = cur.son[r ^ 1];
                if (!other) {
                    return sum;
                }
                cur = other;
            } else {
                const next = cur.son[r];
                if (!next) {
                    return sum;
                }
                cur = next;
            }
        }
        sum += cur.sum;
        return sum;
    }

    for (let i = 1; i < nums.length; i++) {
        add(nums[i - 1]);
        res += get(nums[i], x);
    }
    return res;
}
class Trie {
    sum: number;
    son: (Trie | null)[];
    // son[0] 表示左子树，son[1] 表示右子树
    constructor() {
        this.son = new Array<Trie | null>(2).fill(null);
        this.sum = 0;
    }
}
export default countPairs;
