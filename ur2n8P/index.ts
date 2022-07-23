function sequenceReconstruction(
    nums: number[],
    sequences: number[][],
): boolean {
    const s = new Set<string>();
    for (const seq of sequences) {
        for (let i = 0; i < seq.length - 1; i++) {
            s.add(hash(seq[i], seq[i + 1]));
        }
    }
    for (let i = 0; i < nums.length - 1; i++) {
        if (!s.has(hash(nums[i], nums[i + 1]))) {
            return false;
        }
    }
    return true;
}

function hash(arg0: number, arg1: number): string {
    return JSON.stringify([arg0, arg1]);
}
export default sequenceReconstruction;
