export default function calcEquation(
    equations: string[][],
    values: number[],
    queries: string[][]
): number[] {
    const variables = new Set<string>();

    const n = equations.length;
    for (let i = 0; i < n; i++) {
        variables.add(equations[i][0]);
        variables.add(equations[i][1]);
    }

    // 对于每个点，存储其直接连接到的所有点及对应的权值
    const edges = new Map<string, [string, number][]>();
    for (const i of variables.keys()) {
        edges.set(i, []);
    }
    for (let i = 0; i < n; i++) {
        const va = equations[i][0],
            vb = equations[i][1];
        edges.get(va)?.push([vb, values[i]]);
        edges.get(vb)?.push([va, 1.0 / values[i]]);
    }

    const queriesCount = queries.length;
    const ret: number[] = [];
    for (let i = 0; i < queriesCount; i++) {
        const query = queries[i];
        let result = -1.0;
        if (variables.has(query[0]) && variables.has(query[1])) {
            const ia = query[0],
                ib = query[1];
            if (ia === ib) {
                result = 1.0;
            } else {
                const points: string[] = [];
                points.push(ia);
                const ratios = new Map<string, number>();
                for (const i of variables.keys()) {
                    ratios.set(i, -1);
                }
                ratios.set(ia, 1);

                while (points.length && (ratios.get(ib) ?? 0) < 0) {
                    const x = points.pop() as string;
                    for (const [y, val] of edges.get(x) ?? []) {
                        if ((ratios.get(y) ?? 0) < 0) {
                            ratios.set(y, (ratios.get(x) ?? 0) * val);
                            points.push(y);
                        }
                    }
                }
                result = ratios.get(ib) ?? 0;
            }
        }
        ret[i] = result;
    }
    return ret;
}
