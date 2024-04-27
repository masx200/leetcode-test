// deno-lint-ignore-file no-extra-non-null-assertion
class TreeAncestor {
    n: number;
    parent: number[];
    cache: Map<number, Map<number, number>> = new Map();
    constructor(n: number, parent: number[]) {
        this.parent = parent;
        this.n = n;
    }

    getKthAncestor(node: number, k: number): number {
        // console.log(this.cache)
        // console.log(node, k)
        if (!this.cache.has(node)) this.cache.set(node, new Map());

        const map = this.cache.get(node)!! as Map<number, number>;
        // this.cache[node] ??= {}
        if (typeof map?.get(k) != "undefined") {
            // console.log(node, k)
            //  console.log(this.cache)
            return map.get(k)!!; //this.cache[node][k]
        }
        if (node == 0) return -1;
        if (node == -1) return -1;
        if (k == 0) return node;
        if (k == 1) return this.parent[node];
        const even = Math.pow(2, Math.floor(Math.log2(k)));
        const half = even == k ? Math.floor(k / 2) : even;

        //Math.floor(k / 2)
        const res = this.getKthAncestor(
            this.getKthAncestor(node, half),
            k - half,
        );
        //const res = this.getKthAncestor(this.getKthAncestor(node,k- half),  half)
        map!!.set(k, res);
        // if(k==2)
        // console.log(this.cache)
        return res;
    }
}
export default TreeAncestor;
