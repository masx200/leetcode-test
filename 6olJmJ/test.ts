import { assertEquals } from "asserts";

import explorationSupply from "./index.ts";

Deno.test("explorationSupply", () => {
    const station = [2, 7, 8, 10],
        pos = [4, 9],
        OUTPUT = [0, 2];
    assertEquals(explorationSupply(station, pos), OUTPUT);
});
Deno.test("explorationSupply", () => {
    const station = [2, 5, 8, 14, 17],
        pos = [1, 14, 11, 2],
        OUTPUT = [0, 3, 2, 0];
    assertEquals(explorationSupply(station, pos), OUTPUT);
});
