import { assertEquals } from "https://deno.land/std@0.170.0/testing/asserts.ts";

import { ArrayToPolyNode } from "./ArrayToPolyNode.ts";
import addPoly from "./index.ts";
import { PolyNodeToArray } from "./PolyNodeToArray.ts";

Deno.test("add-two-polynomials-represented-as-linked-lists", () => {
    const cases = [
        [[[1, 2]], [[-1, 2]], []],
        [
            [
                [2, 2],
                [4, 1],
                [3, 0],
            ],

            [
                [3, 2],
                [-4, 1],
                [-1, 0],
            ],
            [
                [5, 2],
                [2, 0],
            ],
        ],
        [
            [[1, 1]],
            [[1, 0]],
            [
                [1, 1],
                [1, 0],
            ],
        ],
    ];

    cases.forEach(([a, b, c]) => {
        assertEquals(
            c,
            PolyNodeToArray(
                addPoly(
                    ArrayToPolyNode(a as [number, number][]),
                    ArrayToPolyNode(b as [number, number][]),
                ),
            ),
        );
    });
});
