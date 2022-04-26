import { assertEquals } from "../deps.ts";
import { Node } from "../n-ary-tree-level-order-traversal/Node.ts";
import { deserialize, serialize } from "./index.ts";

Deno.test("serialize-and-deserialize-n-ary-tree-0", () => {
    const root = new Node(1, [
        new Node(2),
        new Node(3, [new Node(6), new Node(7, [new Node(11, [new Node(14)])])]),
        new Node(4, [new Node(8, [new Node(12)])]),
        new Node(5, [new Node(9, [new Node(13)]), new Node(10)]),
    ]);
    const encoded = serialize(root);
    assertEquals(
        encoded,
        "[[[1]],[[2,3,4,5]],[,[6,7],[8],[9,10]],[,[11],[12],[13]],[[14]]]",
    );
    const cloned = deserialize(encoded);
    assertEquals(cloned, root);
});
Deno.test("serialize-and-deserialize-n-ary-tree-1", () => {
    const root = new Node(1, [
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
    const encoded = serialize(root);
    assertEquals(
        encoded,
        "[[[1]],[[3,2,4]],[[5,6],,[13]],[,,[15,16]],[,[43]],[[25,26]],[,[14]],[[23]],[[45,46]],[,[33]],[[35,36]]]",
    );
    const cloned = deserialize(encoded);
    assertEquals(cloned, root);
});
Deno.test("serialize-and-deserialize-n-ary-tree-2", () => {
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
    const encoded = serialize(root);
    assertEquals(encoded, "[[[10]],[[20,21,19]],[,[200]]]");
    const cloned = deserialize(encoded);
    assertEquals(JSON.stringify(cloned), JSON.stringify(root));
});
Deno.test("serialize-and-deserialize-n-ary-tree-3", () => {
    const root = null;
    const encoded = serialize(root);
    assertEquals(encoded, "[]");
    const cloned = deserialize(encoded);
    assertEquals(cloned, root);
});
Deno.test("serialize-and-deserialize-n-ary-tree-4", () => {
    const root = new Node(10);
    const encoded = serialize(root);
    assertEquals(encoded, "[[[10]]]");
    const cloned = deserialize(encoded);
    assertEquals(cloned, root);
});
Deno.test("serialize-and-deserialize-n-ary-tree-5", () => {
    const root = new Node(10, [new Node(20, [new Node(200)]), new Node(21)]);
    const encoded = serialize(root);
    assertEquals(encoded, "[[[10]],[[20,21]],[[200]]]");
    const cloned = deserialize(encoded);
    assertEquals(cloned, root);
});
