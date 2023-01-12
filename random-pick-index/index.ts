interface Solution {
    pick(target: number): number;
}
function Solution(nums: number[]): Solution {
    const pos: Map<number, number[]> = new Map();
    for (const [i, num] of nums.entries()) {
        const indices: number[] = pos.get(num) ??
            (() => {
                const d: number[] = [];
                pos.set(num, d);
                return d;
            })();
        indices.push(i);
    }
    function pick(target: number): number {
        const indices = pos.get(target);
        if (!indices) {
            throw new Error("not found:" + target);
        }
        return indices[Math.floor(Math.random() * indices.length)];
    }
    return { pick };
}

export default Solution;
