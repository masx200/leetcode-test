import inorderSuccessor, { Node } from "./index.ts";
import { also } from "./also.ts";
import { assert, assertEquals } from "asserts";
Deno.test("inorder-successor-in-bst-ii", () => {
    const map = new Map<number, Node>();

    also(new Node(2), (n) => {
        map.set(n.val, n);
        n.left = also(new Node(1, null, null, n), (n) => map.set(n.val, n));
        n.right = also(new Node(3, null, null, n), (n) => map.set(n.val, n));
    });

    const input = map.get(1);
    const output = map.get(2);
    // console.log({map,input,output})
    assert(input);
    assertEquals(inorderSuccessor(input), output);
});
