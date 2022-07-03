import { assertEquals } from "../deps.ts";
import minRefuelStops from "./index.ts";

Deno.test("minimum-number-of-refueling-stops", () => {
    const target = 1;
    const startFuel = 1;
    const stations: number[][] = [];
    const ans = 0;
    assertEquals(minRefuelStops(target, startFuel, stations), ans);
    assertEquals(minRefuelStops(100, 1, [[10, 100]]), -1);
    assertEquals(
        minRefuelStops(100, 10, [
            [10, 60],
            [20, 30],
            [30, 30],
            [60, 40],
        ]),
        2,
    );
});
