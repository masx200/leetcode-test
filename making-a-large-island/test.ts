import largestIsland from "./index.ts";
import { assertEquals } from "../deps.ts";
import { examples } from "./examples.ts";
Deno.test("making-a-large-island", () => {
    examples.forEach(({ input, output }) => {
        assertEquals(output, largestIsland(input));
    });
});
