object Solution {
    def insertIntoBST(root: TreeNode, `val`: Int): TreeNode = {
    if (root != null) {
      if (root.value < `val`) {
        root.right = insertIntoBST(root.right, `val`)
      }
      else {
        root.left = insertIntoBST(root.left, `val`)
      }
    } else {
      return new TreeNode(`val`)
    }
    root
  }
}