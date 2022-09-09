export default function canFinish(
    numCourses: number,
    prerequisites: number[][],
): boolean {
    const dependents: Map<number, number[]> = new Map();

    const indegress: Map<number, number> = new Map();

    for (const [child, parent] of prerequisites) {
        const array = dependents.get(parent) ?? [];
        array.push(child);
        dependents.set(parent, array);

        indegress.set(child, (indegress.get(child) ?? 0) + 1);
    }
    const queue: number[] = Array.from(Array(numCourses).fill(0).keys()).filter(
        (i) => !indegress.has(i),
    );

    let result: number = 0;
    while (queue.length) {
        const u = queue.shift() as number;
        result++;

        for (const v of dependents.get(u) ?? []) {
            const degree = (indegress.get(v) ?? 0) - 1;

            indegress.set(v, degree);
            if (degree === 0) queue.push(v);
        }
    }
    return result === numCourses;
}
