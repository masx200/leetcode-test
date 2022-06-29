import { ListNode, TreeNode } from "../mod.ts";

export default function sortedListToBST(
    head: ListNode | null,
): TreeNode | null {
    if (!head) return null;
    let node: ListNode | null = head;
    let n = 0;

    while (node) {
        node = node.next;
        n++;
    }
    node = head;
    // console.log(JSON.stringify(head))
    return toBST(
        0,
        n - 1,
        () => node?.val,
        () => {
            if (!node) return;

            node = node.next;
        },
    );
}

function toBST(
    start: number,
    end: number,
    get: () => number | undefined,
    next: () => void,
): TreeNode | null {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode();
    const left = toBST(start, mid - 1, get, next);

    root.left = left;
    root.val = get() ?? 0;
    next();
    const right = toBST(mid + 1, end, get, next);

    root.right = right;
    //  console.log(JSON.stringify(root))
    return root;
}
