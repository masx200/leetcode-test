import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";

import inorderSuccessor from "./index.ts";

Deno.test("successor-lcci", () => {
    const inputs = [
        [
            {
                val: 2,
                left: { val: 1, left: null, right: null },
                right: { val: 3, left: null, right: null },
            },
            { val: 1, left: null, right: null },
        ],
        [
            {
                val: 5,
                left: {
                    val: 3,
                    left: {
                        val: 2,
                        left: { val: 1, left: null, right: null },
                        right: null,
                    },
                    right: { val: 4, left: null, right: null },
                },
                right: { val: 6, left: null, right: null },
            },
            { val: 6, left: null, right: null },
        ],
    ];
    assertEquals(
        inputs.map(([root, p]) => inorderSuccessor(root, p)),
        [
            {
                val: 2,
                left: { val: 1, left: null, right: null },
                right: { val: 3, left: null, right: null },
            },
            null,
        ],
    );
});
