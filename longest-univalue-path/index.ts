import {TreeNode}from"../mod.ts"
export default function longestUnivaluePath(root: TreeNode | null): number {

if(!root)return 0



    let res = 0;
    
    dfs(root,s=>res=Math.max(res,s));
    return res;
}
function dfs(root: TreeNode | null,out:(s:number)=>void) {
        if (!root) {
            return 0;
        }
        const left = dfs(root.left,out)
        const  right = dfs(root.right,out);
        let left1 = 0, right1 = 0;
        if (root.left && root.left.val === root.val) {
            left1 = left + 1;
        }
        if (root.right && root.right.val === root.val) {
            right1 = right + 1;
        }
        out( left1 + right1);
        return Math.max(left1, right1);
    }
