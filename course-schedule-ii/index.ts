export default function findOrder(
    numCourses: number,
    prerequisites: number[][],
): number[] {
    const dependents: number[][] = new Array(numCourses).fill(0).map(() => []);
    const indegress: number[] = new Array(numCourses).fill(0);
    for (const [child, parent] of prerequisites) {
        dependents[parent].push(child);
        indegress[child]++;
    }
    const queue: number[] = Array.from(indegress.entries())
        .filter(([_i, v]) => v === 0)
        .map((a) => a[0]);
    const result: number[] = [];
    while (queue.length) {
        const u = queue.shift() as number;
        result.push(u);
        for (const v of dependents[u]) {
            indegress[v]--;
            if (indegress[v] === 0) queue.push(v);
        }
    }
    return result.length === numCourses ? result : [];
}
