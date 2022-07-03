import { Heap } from "../deps.ts";
import { sum as sumarray } from "../richest-customer-wealth/sum.ts";
function magicTower(nums: number[]): number {
    const heap = new Heap<number>((a, b) => a - b);
    if (sumarray(nums) < 0) {
        return -1;
    }

    let ans = 0;

    let sum = 1;
    for (const num of nums) {
        sum += num;
        if (num < 0) {
            heap.insert(num);
        }
        if (sum <= 0 && !heap.isEmpty()) {
            const val = heap.pop() ?? 0;
            sum -= val;
            ans++;
        }
    }
    return ans;
}
export default magicTower;
