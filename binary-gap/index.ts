export default function binaryGap(n: number): number {
    const binStr = n.toString(2);
    let lastOneIdx = n,
        max = 0;
    for (let i = 0; i < binStr.length; i++) {
        if (binStr.charAt(i) == "1") {
            max = Math.max(max, i - lastOneIdx);
            lastOneIdx = i;
        }
    }
    return max;
}
