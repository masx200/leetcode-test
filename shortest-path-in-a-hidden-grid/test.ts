import { assertEquals } from "https://deno.land/std@0.157.0/testing/asserts.ts";
import { GridMaster } from "./GridMaster.ts";
import findShortestPath from "./index.ts";
Deno.test("shortest-path-in-a-hidden-grid", () => {
    assertEquals(
        [[[1, 2], [-1, 0]], [[0, 0, -1], [1, 1, 1], [2, 0, 0]], [[-1, 0], [
            0,
            2,
        ]]].map((g) => findShortestPath(new GridMaster(g))),
        [2, 4, -1],
    );
});

Deno.test("GridMaster", () => {
    const master = new GridMaster([[1, 2], [-1, 0]]);
    assertEquals(true, master.canMove("U")); // returns True.
    assertEquals(false, master.canMove("D")); // returns False.
    assertEquals(false, master.canMove("L")); // returns False.
    assertEquals(false, master.canMove("R")); // returns False.
    master.move("U"); //moves the robot to the cell (0, 0).
    assertEquals(false, master.isTarget()); //returns False.
    assertEquals(false, master.canMove("U")); // returns False.
    assertEquals(true, master.canMove("D")); //returns True.
    assertEquals(false, master.canMove("L")); //returns False.
    assertEquals(true, master.canMove("R")); // returns True.
    master.move("R"); //moves the robot to the cell (0, 1).
    assertEquals(true, master.isTarget()); // returns True.
});
