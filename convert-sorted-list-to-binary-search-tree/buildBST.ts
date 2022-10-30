import { TreeNode } from '../mod.ts';

export function buildBST(
    start: number,
    end: number,
    get: () => number | undefined,
    next: () => void,
): TreeNode | null {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode();
    const left = buildBST(start, mid - 1, get, next);

    root.left = left;
    root.val = get() ?? 0;
    next();
    const right = buildBST(mid + 1, end, get, next);

    root.right = right;
    //  console.log(JSON.stringify(root))
    return root;
}
