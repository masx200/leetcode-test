import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

class FindElements {
    #root: TreeNode | null;
    #values = new Set<number>();
    constructor(root: TreeNode | null) {
        this.#root = root;
        if (root) {
            root.val = 0;
            const nodes = [root];
            while (nodes.length) {
                const node = nodes[nodes.length - 1];
                nodes.pop();
                const value = node.val;
                this.#values.add(value);
                if (node.left) {
                    node.left.val = 2 * node.val + 1;
                    nodes.push(node.left);
                }
                if (node.right) {
                    node.right.val = 2 * node.val + 2;
                    nodes.push(node.right);
                }
            }
        }
    }

    find(target: number): boolean {
        if (!this.#root) return false;
        return this.#values.has(target);
    }
}
/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
export default FindElements;
