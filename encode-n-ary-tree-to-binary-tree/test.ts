import { Node } from "../n-ary-tree-level-order-traversal/Node.ts";
import { assert, assertEquals } from "../deps.ts";
import { decode, encode } from "./index.ts";
import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
Deno.test("encode-n-ary-tree-to-binary-tree", () => {
    const examples: { node: Node; tree: TreeNode }[] = [
        {
            node: new Node(1, [
                new Node(2),
                new Node(3, [
                    new Node(6),
                    new Node(7, [new Node(11, [new Node(14)])]),
                ]),
                new Node(4, [new Node(8, [new Node(12)])]),
                new Node(5, [new Node(9, [new Node(13)]), new Node(10)]),
            ]),
            tree: {
                val: 1,
                left: {
                    val: 2,
                    left: null,
                    right: {
                        val: 3,
                        left: {
                            val: 6,
                            left: null,
                            right: {
                                val: 7,
                                left: {
                                    val: 11,
                                    left: { val: 14, left: null, right: null },
                                    right: null,
                                },
                                right: null,
                            },
                        },
                        right: {
                            val: 4,
                            left: {
                                val: 8,
                                left: { val: 12, left: null, right: null },
                                right: null,
                            },
                            right: {
                                val: 5,
                                left: {
                                    val: 9,
                                    left: { val: 13, left: null, right: null },
                                    right: { val: 10, left: null, right: null },
                                },
                                right: null,
                            },
                        },
                    },
                },
                right: null,
            },
        },
        {
            node: new Node(1, [
                new Node(3, [new Node(5), new Node(6)]),
                new Node(2),
                new Node(4),
            ]),
            tree: {
                val: 1,
                left: {
                    val: 3,
                    left: {
                        val: 5,
                        left: null,
                        right: { val: 6, left: null, right: null },
                    },
                    right: {
                        val: 2,
                        left: null,
                        right: { val: 4, left: null, right: null },
                    },
                },
                right: null,
            },
        },
    ];
    examples.forEach(({ node: node, tree: tree }) => {
        const entree = encode(node);
        assertEquals(JSON.stringify(tree), JSON.stringify(entree));
        // console.log(JSON.stringify(tree));
        const cloned = decode(entree);
        assert(node !== cloned);
        assertEquals(node, cloned);
    });
});
