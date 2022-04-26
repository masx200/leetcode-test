import { assert, assertEquals } from "../deps.ts";
import { Node } from "../n-ary-tree-level-order-traversal/Node.ts";
import cloneTree from "./index.ts";

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
    // {
    //     val: 1,
    //     children: [
    //         { val: 2, children: [] },
    //         {
    //             val: 3,
    //             children: [
    //                 { val: 6, children: [] },
    //                 {
    //                     val: 7,
    //                     children: [
    //                         { val: 11, children: [{ val: 14, children: [] }] },
    //                     ],
    //                 },
    //             ],
    //         },
    //         {
    //             val: 4,
    //             children: [{ val: 8, children: [{ val: 12, children: [] }] }],
    //         },
    //         {
    //             val: 5,
    //             children: [
    //                 { val: 9, children: [{ val: 13, children: [] }] },
    //                 { val: 10, children: [] },
    //             ],
    //         },
    //     ],
    // };
    const cloned = cloneTree(root);
    assert(cloned !== root);
    assertEquals(root, cloned);
    // assertEquals(JSON.stringify(root), JSON.stringify(cloned));
    // console.log(JSON.stringify(cloned))
    // console.log(root)
});
