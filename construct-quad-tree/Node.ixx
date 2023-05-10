module;

export module leetcode_test.construct_quad_tree.Node;
namespace leetcode_test::construct_quad_tree {

export class Node {
public:
    bool val;
    bool isLeaf;
    Node* topLeft;
    Node* topRight;
    Node* bottomLeft;
    Node* bottomRight;

    Node(bool _val = false, bool _isLeaf = false, Node* _topLeft = nullptr,
        Node* _topRight = nullptr, Node* _bottomLeft = nullptr,
        Node* _bottomRight = nullptr)
    {
        val = _val;
        isLeaf = _isLeaf;
        topLeft = _topLeft;
        topRight = _topRight;
        bottomLeft = _bottomLeft;
        bottomRight = _bottomRight;
    }
};
} // namespace leetcode_test::construct_quad_tree