import { assert, assertEquals } from "asserts";

import { also } from "./also.ts";
import inorderSuccessor from "./index.ts";
import { inorder, Node } from "./Node.ts";

Deno.test("inorder-successor-in-bst-ii", () => {
    const map = new Map<number, Node>();

    const root = also(new Node(5), (n) => {
        n.left = also(new Node(3, n, null, null), (n) => {
            n.left = also(new Node(2, n, null, null), (n) => {
                n.left = also(new Node(1, n, null, null), () => {
                });
            });
            n.right = also(
                new Node(4, n, null, null),
                (n) => map.set(n.val, n),
            );
        });
        n.right = also(new Node(6, n, null, null), (n) => map.set(n.val, n));
    });
    inorder(root, (n) => map.set(n.val, n));
    const input = map.get(6);
    const output = null;

    assert(input);
    assertEquals(inorderSuccessor(input), output);
});
Deno.test("inorder-successor-in-bst-ii", () => {
    const map = new Map<number, Node>();

    const root = also(new Node(2), (n) => {
        n.left = also(new Node(1, n, null, null), (n) => map.set(n.val, n));
        n.right = also(new Node(3, n, null, null), (n) => map.set(n.val, n));
    });
    inorder(root, (n) => map.set(n.val, n));
    const input = map.get(1);
    const output = map.get(2);

    assert(input);
    assertEquals(inorderSuccessor(input), output);
});
Deno.test("inorder-successor-in-bst-ii", () => {
    const map = new Map<number, Node>();

    const root = also(new Node(15), (n) => {
        n.left = also(new Node(6, n, null, null), (n) => {
            n.left = also(new Node(3, n, null, null), (n) => {
                n.left = also(new Node(2, n, null, null), () => {
                });
                n.right = also(new Node(4, n, null, null), () => {
                });
            });
            n.right = also(new Node(7, n, null, null), (n) => {
                n.right = also(new Node(13, n, null, null), (n) => {
                    n.left = also(new Node(19, n, null, null), () => {
                    });
                });
            });
        });
        n.right = also(new Node(18, n, null, null), (n) => {
            n.left = also(new Node(17, n, null, null), () => {
            });
            n.right = also(new Node(20, n, null, null), () => {
            });
        });
    });
    inorder(root, (n) => map.set(n.val, n));
    const input = map.get(15);
    const output = map.get(17);

    assert(input);
    assertEquals(inorderSuccessor(input), output);
});

Deno.test("inorder-successor-in-bst-ii", () => {
    const map = new Map<number, Node>();

    const root = also(new Node(15), (n) => {
        n.left = also(new Node(6, n, null, null), (n) => {
            n.left = also(new Node(3, n, null, null), (n) => {
                n.left = also(new Node(2, n, null, null), () => {
                });
                n.right = also(new Node(4, n, null, null), () => {
                });
            });
            n.right = also(new Node(7, n, null, null), (n) => {
                n.right = also(new Node(13, n, null, null), (n) => {
                    n.left = also(new Node(19, n, null, null), () => {
                    });
                });
            });
        });
        n.right = also(new Node(18, n, null, null), (n) => {
            n.left = also(new Node(17, n, null, null), () => {
            });
            n.right = also(new Node(20, n, null, null), () => {
            });
        });
    });
    inorder(root, (n) => map.set(n.val, n));
    const input = map.get(13);
    const output = map.get(15);

    assert(input);
    assertEquals(inorderSuccessor(input), output);
});
