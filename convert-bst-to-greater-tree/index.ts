import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function convertBST(root: TreeNode | null): TreeNode | null {
    if (root != null) {
        let result = bstToGst(root, { value: 0 });

        while (typeof result === "function") {
            // console.log(result.toString())
            result = result();
        }
    }

    return root;
}
type CallBack = undefined | (() => CallBack);
function bstToGst(
    root: TreeNode | null,
    sum: { value: number },
    callback?: CallBack,
): CallBack {
    if (root != null) {
        return () => {
            return bstToGst(root.right, sum, () => {
                sum.value += root.val;
                root.val = sum.value;

                return bstToGst(root.left, sum, callback);
            });
        };
    }
    return callback;
}
// let count = 1
// const root = new TreeNode(1, new TreeNode(1), new TreeNode(1))
// let temp = root
// while (count < 70000) {
//   temp.right = new TreeNode(1, new TreeNode(1), new TreeNode(1))
//   temp = temp.right
//   count++
// }

//   console.log(root)
//   convertBST(root)
//   console.log(root)
