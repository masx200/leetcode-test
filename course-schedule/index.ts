export default function canFinish(
    numCourses: number,
    prerequisites: number[][],
): boolean {
    const dependents: Map<number, number[]> = new Map();
    //  const dependents: number[][] = new Array(numCourses).fill(0).map(() => []);
    const indegress: Map<number, number> = new Map();
    // const indegress: number[] = new Array(numCourses).fill(0);
    for (const [child, parent] of prerequisites) {
        const array = dependents.get(parent) ?? [];
        array.push(child);
        dependents.set(parent, array);

        // dependents[parent].push(child);
        indegress.set(child, (indegress.get(child) ?? 0) + 1);
        // indegress[child]++;
    }
    const queue: number[] = Array.from(Array(numCourses).fill(0).keys()).filter(
        (i) => !indegress.has(i),
    );

    const result: number[] = [];
    while (queue.length) {
        const u = queue.shift() as number;
        result.push(u);
        /* dependents[u] */
        for (const v of dependents.get(u) ?? []) {
            const degree = (indegress.get(v) ?? 0) - 1;
            // indegress[v]--;
            indegress.set(v, degree);
            if (degree === 0) queue.push(v);
        }
    }
    return result.length === numCourses;
}
