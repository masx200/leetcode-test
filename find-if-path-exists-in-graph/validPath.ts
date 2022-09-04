export default function validPath(
    n: number,
    edges: number[][],
    source: number,
    destination: number,
): boolean {
    if (source === destination) return true;
    if (edges.length === 0) return false;
    const nodes = new Set(Array(n).keys());
    const edge: Set<number>[] = Array(n)
        .fill(0)
        .map(() => new Set());
    for (const [a, b] of edges) {
        edge[a].add(b);
        edge[b].add(a);
    }
    if (!nodes.has(destination) || !nodes.has(source)) return false;

    let current = new Set([source]);

    let rightcurrent = new Set([destination]);
    nodes.delete(destination);
    nodes.delete(source);
    let step = 1;
    while (current.size) {
        if (current.size > rightcurrent.size) {
            [current, rightcurrent] = [rightcurrent, current];
        }

        const temp: Set<number> = new Set();

        for (const word of current) {
            for (const right of rightcurrent) {
                if (edge[word].has(right)) {
                    return true;
                }
            }
            for (const other of nodes) {
                if (edge[other].has(word)) {
                    temp.add(other);

                    nodes.delete(other);
                }
            }
        }

        if (temp.size === 0) return false;
        current = temp;
        step = step + 1;
    }

    return false;
}
