import { assertEquals } from "../deps.ts";
import largestNumber from "./index.ts";

Deno.test("largest-number", () => {
    assertEquals(largestNumber([10, 2]), "210");
    assertEquals(largestNumber([3, 30, 34, 5, 9]), "9534330");
    assertEquals(
        largestNumber([3, 30, 34, 5, 9, 10, 22222, 333333, 444555, 777]),
        "97775444555343333333302222210",
    );
});
