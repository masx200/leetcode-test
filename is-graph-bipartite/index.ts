export default function isBipartite(graph: number[][]): boolean {
    const color = graph.map(() => Colors.None);
    for (const index of graph.keys()) {
        if (color[index] === Colors.None) {
            let queue = [index];

            color[index] = Colors.One;
            while (queue.length) {
                const temp: number[] = [];
                for (const node of queue) {
                    const neighbor_color = color[node] === Colors.One
                        ? Colors.Two
                        : Colors.One;

                    for (const neighbor of graph[node]) {
                        if (color[neighbor] === Colors.None) {
                            temp.push(neighbor);
                            color[neighbor] = neighbor_color;
                        } else if (color[neighbor] !== neighbor_color) {
                            return false;
                        }
                    }
                }
                queue = temp;
            }
        }
    }
    return true;
}
const enum Colors {
    One,
    Two,
    None,
}
