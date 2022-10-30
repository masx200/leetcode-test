import { buildBST } from '../convert-sorted-list-to-binary-search-tree/buildBST.ts';
import { TreeNode } from '../mod.ts';

export default function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null;
    const n = nums.length;
    let index = 0;

    return buildBST(
        0,
        n - 1,
        () => nums[index],
        () => {
            if (index >= n) return;

            index++;
        },
    );
}
