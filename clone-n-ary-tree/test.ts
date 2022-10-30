import { assert, assertEquals } from "../deps.ts";
import { Node } from "../n-ary-tree-level-order-traversal/Node.ts";
import cloneTree from "./index.ts";

Deno.test("clone-n-ary-tree-0", () => {
    const root = {
        val: 10,
        children: [
            {
                val: 20,
                children: [],
            },
            {
                val: 21,
                children: [
                    {
                        val: 200,
                        children: [],
                    },
                ],
            },
            {
                val: 19,
                children: [],
            },
        ],
    };
    // const three =;

    // root.children.push(three);
    // root.children.push(new Node(2));
    // root.children.push(new Node(4));
    // three.children.push(new Node(5));
    // three.children.push(new Node(6));
    const cloned = cloneTree(root);
    assert(cloned !== root);
    assertEquals(JSON.stringify(root), JSON.stringify(cloned));
    // console.log(JSON.stringify(cloned))
    // console.log(root)
});
Deno.test("clone-n-ary-tree-1", () => {
    const root = new Node(1, [
        new Node(3, [new Node(5), new Node(6)]),
        new Node(2),
        new Node(4),
    ]);
    // const three =;

    // root.children.push(three);
    // root.children.push(new Node(2));
    // root.children.push(new Node(4));
    // three.children.push(new Node(5));
    // three.children.push(new Node(6));
    const cloned = cloneTree(root);
    assert(cloned !== root);
    assertEquals(root, cloned);
    // console.log(JSON.stringify(cloned))
    // console.log(root)
});

Deno.test("clone-n-ary-tree-2", () => {
    const root: Node = new Node(1, [
        new Node(2),
        new Node(3, [new Node(6), new Node(7, [new Node(11, [new Node(14)])])]),
        new Node(4, [new Node(8, [new Node(12)])]),
        new Node(5, [new Node(9, [new Node(13)]), new Node(10)]),
    ]);

    const cloned = cloneTree(root);
    assert(cloned !== root);
    assertEquals(root, cloned);
    // assertEquals(JSON.stringify(root), JSON.stringify(cloned));
    // console.log(JSON.stringify(cloned))
    // console.log(root)
});

Deno.test("clone-n-ary-tree-3", () => {
    const root: Node = new Node(1, [
        new Node(3, [new Node(5), new Node(6)]),
        new Node(2),
        new Node(4, [
            new Node(13, [
                new Node(15),
                new Node(16, [
                    new Node(43, [
                        new Node(25),
                        new Node(26, [
                            new Node(14, [
                                new Node(23, [
                                    new Node(45),
                                    new Node(46, [
                                        new Node(33, [
                                            new Node(35),
                                            new Node(36),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ]),
                    ]),
                ]),
            ]),
        ]),
    ]);

    const cloned = cloneTree(root);
    assert(cloned !== root);
    assertEquals(root, cloned);
    // assertEquals(JSON.stringify(root), JSON.stringify(cloned));
    // console.log(JSON.stringify(cloned))
    // console.log(root)
});
