import { assertEquals } from "asserts";

import storedEnergy from "./index.ts";

Deno.test("storedEnergy", () => {
    const storeLimit = 10,
        power = [1, 3, 4, 3, 6],
        supply = [[0, 2, 3]],
        OUTPUT = 4;
    assertEquals(storedEnergy(storeLimit, power, supply), OUTPUT);
});
Deno.test("storedEnergy", () => {
    const storeLimit = 6,
        power = [6, 5, 2, 1, 0],
        supply = [[0, 1, 2], [2, 3, 3]],
        OUTPUT = 0;
    assertEquals(storedEnergy(storeLimit, power, supply), OUTPUT);
});
