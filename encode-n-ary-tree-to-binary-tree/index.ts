import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { Node } from "../n-ary-tree-level-order-traversal/Node.ts";

export function encode(root: Node | null): TreeNode | null {
    if (!root) {
        return root;
    }
    const nero = new TreeNode(root.val);
    const children = root.children;
    if (children.length === 0) {
        return nero;
    } else {
        const left = encode(children[0]);
        nero.left = left;
        if (children.length === 1) {
            return nero;
        }
        let cur: TreeNode | null = left;
        for (let i = 1; i < children.length; i++) {
            const right = encode(children[i]);
            cur && (cur.right = right);
            cur = right;
        }
        return nero;
    }
}
export function decode(root: TreeNode | null): Node | null {
    if (!root) {
        return root;
    }
    const nero = new Node(root.val);
    if (!root.left) {
        return nero;
    } else {
        let cur: TreeNode | null = root.left;
        while (cur) {
            const child = decode(cur);
            child && nero.children.push(child);
            cur = cur.right;
        }
        return nero;
    }
}
