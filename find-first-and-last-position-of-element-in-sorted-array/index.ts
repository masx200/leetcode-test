export default function searchRange(nums: number[], target: number): number[] {
    const right = le(nums, target);
    const left = ge(nums, target);
    if (nums[left] === target && nums[right] === target) {
        return [left, right];
    }
    return [-1, -1];
}
import { ge, le } from "https://esm.sh/@masx200/binary-search-bounds@2.0.5/";
