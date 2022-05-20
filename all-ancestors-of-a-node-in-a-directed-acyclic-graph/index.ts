export default function getAncestors(n: number, edges: number[][]): number[][] {
    const childToParents: Map<number, Set<number>> = new Map();

    for (const [parent, child] of edges) {
        let set = childToParents.get(child);
        if (!set) {
            set = new Set();
            childToParents.set(child, set);
        }
        set.add(parent);
    }
    const result: number[][] = [];

    for (let i = 0; i < n; i++) {
        const Ancestors = new Set<number>();
        const callbackfn = (v: number) => {
            if (!Ancestors.has(v)) {
                Ancestors.add(v);

                childToParents.get(v)?.forEach(callbackfn);
            }
        };
        childToParents.get(i)?.forEach(callbackfn);
        result.push(Array.from(Ancestors).sort((a, b) => a - b));
    }
    return result;
}
