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
    return Array.from({ length: n }).map((_, i) =>
        handle_graph(childToParents, i)
    );
}

function handle_graph(childToParents: Map<number, Set<number>>, i: number) {
    const Ancestors = new Set<number>();
    function callbackfn(v: number) {
        if (!Ancestors.has(v)) {
            Ancestors.add(v);

            childToParents.get(v)?.forEach(callbackfn);
        }
    }
    childToParents.get(i)?.forEach(callbackfn);
    return Array.from(Ancestors).sort((a, b) => a - b);
}
