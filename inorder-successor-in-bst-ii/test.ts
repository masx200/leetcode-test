import inorderSuccessor, { Node } from "./index.ts";
import { also } from "./also.ts";
import { assert, assertEquals } from "asserts";
Deno.test("inorder-successor-in-bst-ii", () => {
    const map = new Map<number, Node>();

    also(new Node(5), (n) => {
        map.set(n.val, n);
        n.left = also(new Node(3, null, null, n), (n) => {
            map.set(n.val, n);
            n.left = also(new Node(2, null, null, n), (n) => {
                map.set(n.val, n);
                n.left = also(new Node(1, null, null, n), (n) => {
                    map.set(n.val, n);
                });
            });
            n.right = also(
                new Node(4, null, null, n),
                (n) => map.set(n.val, n),
            );
        });
        n.right = also(new Node(6, null, null, n), (n) => map.set(n.val, n));
    });

    const input = map.get(6);
    const output = null;

    assert(input);
    assertEquals(inorderSuccessor(input), output);
});
Deno.test("inorder-successor-in-bst-ii", () => {
    const map = new Map<number, Node>();

    also(new Node(2), (n) => {
        map.set(n.val, n);
        n.left = also(new Node(1, null, null, n), (n) => map.set(n.val, n));
        n.right = also(new Node(3, null, null, n), (n) => map.set(n.val, n));
    });

    const input = map.get(1);
    const output = map.get(2);

    assert(input);
    assertEquals(inorderSuccessor(input), output);
});
