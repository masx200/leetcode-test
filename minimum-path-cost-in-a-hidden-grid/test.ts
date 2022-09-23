import { assertEquals } from "../deps.ts";
import { GridMaster } from "./GridMaster.ts";

Deno.test("minimum-path-cost-in-a-hidden-grid", () => {
    const grid = [[2, 3], [1, 1]], r1 = 0, c1 = 1, r2 = 1, c2 = 0;
    const master = new GridMaster(grid, r1, c1, r2, c2);
    assertEquals(false, master.canMove("U")); //returns false.
    assertEquals(true, master.canMove("D")); //returns true.
    assertEquals(true, master.canMove("L")); // returns true.
    assertEquals(false, master.canMove("R")); // returns false.
    assertEquals(2, master.move("L")); // moves the robot to the cell (0, 0) and  assertEquals(true,returns 2.
    assertEquals(false, master.isTarget()); // returns false.
    assertEquals(false, master.canMove("U")); //returns false.
    assertEquals(true, master.canMove("D")); //returns true.
    assertEquals(false, master.canMove("L")); //returns false.
    assertEquals(true, master.canMove("R")); //returns true.
    assertEquals(1, master.move("D")); // moves the robot to the cell (1, 0) and  assertEquals(true,returns 1.
    assertEquals(true, master.isTarget()); // returns true.
    assertEquals(-1, master.move("L")); //doesn"t move the robot and returns -1.
    assertEquals(1, master.move("R")); // moves the robot to the cell (1, 1) and returns 1.
});

Deno.test("minimum-path-cost-in-a-hidden-grid", () => {
    const grid = [[2, 3], [1, 1]], r1 = 0, c1 = 1, r2 = 1, c2 = 0;
    const master = new GridMaster(grid, r1, c1, r2, c2);
    assertEquals(false, master.canMove("U")); //returns false.
    assertEquals(true, master.canMove("D")); //returns true.
    assertEquals(true, master.canMove("L")); // returns true.
    assertEquals(false, master.canMove("R")); // returns false.
    assertEquals(2, master.move("L")); // moves the robot to the cell (0, 0) and  assertEquals(true,returns 2.
    assertEquals(false, master.isTarget()); // returns false.
    assertEquals(false, master.canMove("U")); //returns false.
    assertEquals(true, master.canMove("D")); //returns true.
    assertEquals(false, master.canMove("L")); //returns false.
    assertEquals(true, master.canMove("R")); //returns true.
    assertEquals(1, master.move("D")); // moves the robot to the cell (1, 0) and  assertEquals(true,returns 1.
    assertEquals(true, master.isTarget()); // returns true.
    assertEquals(-1, master.move("L")); //doesn"t move the robot and returns -1.
    assertEquals(1, master.move("R")); // moves the robot to the cell (1, 1) and returns 1.
});
