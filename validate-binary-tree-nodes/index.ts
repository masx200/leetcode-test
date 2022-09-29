export default function validateBinaryTreeNodes(
    n: number,
    leftChild: number[],
    rightChild: number[]
): boolean {
    const degree = Array(n).fill(0);
    for (const i of leftChild) {
        if (i >= 0) degree[i]++;
    }
    for (const i of rightChild) {
        if (i >= 0) degree[i]++;
    }

    const zeros = degree.filter((a) => a === 0);
    if (
        !(
            Math.min(...degree) === 0 &&
            (n === 1 || Math.max(...degree) === 1) &&
            zeros.length === 1
        )
    )
        return false;

    const visited = new Set<number>();

    const q = [degree.findIndex((a) => a === 0)];
    for (const i of q) {
        if (visited.has(i)) continue;

        visited.add(i);
        [leftChild[i], rightChild[i]]
            .filter((a) => a >= 0)
            .forEach((j) => q.push(j));
    }

    return visited.size === n;
}
