import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";

import addToArrayForm from "./index.ts";

Deno.test("add-to-array-form-of-integer", () => {
    const inputs = [
        [[1, 2, 0, 0], 34],
        [[2, 7, 4], 181],
        [[2, 1, 5], 806],
    ] as Array<Parameters<typeof addToArrayForm>>;
    assertEquals(
        [
            [1, 2, 3, 4],
            [4, 5, 5],
            [1, 0, 2, 1],
        ],
        inputs.map(([A, K]) => addToArrayForm(A, K)),
    );
});
