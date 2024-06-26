`701. 二叉搜索树中的插入操作`

https://leetcode.cn/problems/insert-into-a-binary-search-tree/

简单递归版本

```java []
class Solution {
    public TreeNode insertIntoBST(TreeNode root, int val) {

        if (root == null) // 如果当前节点为空，也就意味着val找到了合适的位置，此时创建节点直接返回。
            return new TreeNode(val);
        if (root.val < val){
            root.right = insertIntoBST(root.right, val); // 递归创建右子树
        }else if (root.val > val){
            root.left = insertIntoBST(root.left, val); // 递归创建左子树
        }
        return root;
    }
}
```

```kotlin []
class Solution {
    fun insertIntoBST(root: TreeNode?, `val`: Int): TreeNode? {
        if (root == null) return TreeNode(`val`)
        if (root.`val` > `val`) root.left = insertIntoBST(root.left, `val`)
        if (root.`val` < `val`) root.right = insertIntoBST(root.right, `val`)
        return root
    }
}
```

```typescript []
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null) return { val, left: null, right: null };
    if (root.val > val) root.left = insertIntoBST(root.left, val);
    else if (root.val < val) root.right = insertIntoBST(root.right, val);
    return root;
}
```

```go []
func insertIntoBST(root *TreeNode, val int) *TreeNode {
    if root == nil {
        root = &TreeNode{Val: val}
        return root
    }
    if root.Val > val {
        root.Left = insertIntoBST(root.Left, val)
    } else {
        root.Right = insertIntoBST(root.Right, val)
    }
    return root
}
```

```cpp []
class Solution {
public:
    TreeNode* insertIntoBST(TreeNode* root, int val) {
        if (root == nullptr) {
            TreeNode* node = new TreeNode(val);
            return node;
        }
        if (root->val > val) root->left = insertIntoBST(root->left, val);
        if (root->val < val) root->right = insertIntoBST(root->right, val);
        return root;
    }
};
```

```php []
class Solution
{
    // 递归函数，返回构造后 BST 的根节点
    public function insertIntoBST($root, $val)
    {
        if ($root === null) return new TreeNode($val);

        if ($val < $root->val) {
            $root->left = $this->insertIntoBST($root->left, $val);
        } else {
            $root->right = $this->insertIntoBST($root->right, $val);
        }

        return $root;
    }
}
```

```csharp []
public class Solution {
    public TreeNode InsertIntoBST(TreeNode root, int val) {


        if (root == null) // 如果当前节点为空，也就意味着val找到了合适的位置，此时创建节点直接返回。
            return new TreeNode(val);
        if (root.val < val){
            root.right = InsertIntoBST(root.right, val); // 递归创建右子树
        }else if (root.val > val){
            root.left = InsertIntoBST(root.left, val); // 递归创建左子树
        }
        return root;
    }
}
```

```python []
class Solution:
    def insertIntoBST(self, root: TreeNode, val: int) -> TreeNode:
        if root is None:
            return TreeNode(val) # 如果当前节点为空，也就意味着val找到了合适的位置，此时创建节点直接返回。
        if root.val < val:
            root.right = self.insertIntoBST(root.right, val) # 递归创建右子树
        if root.val > val:
            root.left = self.insertIntoBST(root.left, val) # 递归创建左子树
        return root
```

```scala []
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
```

```swift []
class Solution {
    func insertIntoBST(_ root: TreeNode?, _ val: Int) -> TreeNode? {
        if root == nil{return TreeNode(val)}
        if val<root!.val{
            root?.left=insertIntoBST(root?.left, val)
        }else{
            root?.right=insertIntoBST(root?.right, val)
        }
        return root
    }
}
```
