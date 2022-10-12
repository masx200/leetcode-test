import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import equationsPossible from "./index.ts";
Deno.test({
    name: "satisfiability-of-equality-equations",
    fn() {
        assertEquals(
            [
                ["a==b", "b!=a"],
                ["b==a", "a==b"],
                ["a==b", "b==c", "a==c"],
                ["a==b", "b!=c", "c==a"],
                ["c==c", "b==d", "x!=z"],
            ].map((a) => equationsPossible(a)),
            [false, true, true, false, true],
        );
    },
});
