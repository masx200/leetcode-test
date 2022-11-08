import { assertEquals } from "asserts";
import minimumTotalDistance from "./index.ts";
Deno.test("minimum-total-distance-traveled", () => {
    const robot = [0, 4, 6], factory = [[2, 2], [6, 2]];
    assertEquals(4, minimumTotalDistance(robot, factory));
});
Deno.test("minimum-total-distance-traveled", () => {
    const robot = [1, -1], factory = [[-2, 1], [2, 1]];
    assertEquals(2, minimumTotalDistance(robot, factory));
});
