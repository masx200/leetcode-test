function maximumDetonation(bombs: number[][]): number {
    const edges = build_graph(bombs);
    // console.log(edges)
    return Math.max(1, ...bfs_connect(edges));
}

function build_graph(bombs: number[][]): Map<number, number[]> {
    const edges = new Map<number, Array<number>>();

    for (let i = 0; i < bombs.length; i++) {
        for (let j = i + 1; j < bombs.length; j++) {
            // console.log(i,j)
            const [cani, canj] = can_bomb(bombs[i], bombs[j]);

            if (cani) {
                add_Edge(i, j, edges);
            }
            if (canj) {
                add_Edge(j, i, edges);
            }
        }
    }
    return edges;
}

function can_bomb(a: number[], b: number[]): [boolean, boolean] {
    const dx = a[0] - b[0];
    const dy = a[1] - b[1];
    const distance2 = dx ** 2 + dy ** 2;
    return [a[2] ** 2 >= distance2, b[2] ** 2 >= distance2];
}

function add_Edge(i: number, j: number, edges: Map<number, Array<number>>) {
    const set = edges.get(i) ?? new Array<number>();
    set.push(j);
    edges.set(i, set);
}
function get_count(edge: number, edges: Map<number, Array<number>>) {
    const visited = new Set<number>([edge]);

    let current = Array.of(edge);
    while (current.length) {
        const temp = new Array<number>();
        for (const i of current) {
            visited.add(i);
            const next_array = edges.get(i);
            if (next_array) {
                for (const j of next_array) {
                    if (!visited.has(j)) {
                        temp.push(j);
                    }
                    visited.add(j);
                }
            }
        }

        current = temp;
    }
    // console.log(visited)
    return visited.size;
}
function bfs_connect(edges: Map<number, Array<number>>): number[] {
    return Array.from(edges.keys()).map((edge) => get_count(edge, edges));
}

export default maximumDetonation;
