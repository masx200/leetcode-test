export default function maxScore(s: string): number {
    if (s.length === 2) return Number(s[0] === "0") + Number(s[1] === "1");
    const prefixSum: number[] = Array(s.length).fill(0);
    for (let i = 0; i < s.length; i++) {
        prefixSum[i] = (prefixSum[i - 1] ?? 0) + Number(s[i - 1] === "0");
    }
    const suffixSum: number[] = Array(s.length).fill(0);
    for (let i = s.length - 1; i >= 0; i--) {
        suffixSum[i] = (suffixSum[i + 1] ?? 0) + Number(s[i] === "1");
    }

    return Math.max(
        ...Array(s.length - 1)
            .fill(0)
            .map((_, i) => prefixSum[i + 1] + suffixSum[i + 1])
    );
}
