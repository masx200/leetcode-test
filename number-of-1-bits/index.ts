export default function hammingWeight(n: number): number {
    let count = 0;
    for (const char of n.toString(2)) {
        if (char === "1") count++;
    }
    return count;
}
