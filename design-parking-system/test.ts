import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";

import ParkingSystem from "./index.ts";

Deno.test("design-parking-system", () => {
    assertEquals(
        runScript(
            ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"],
            [[1, 1, 0], [1], [2], [3], [1]],
            [ParkingSystem],
        ),
        [null, true, true, false, false],
    );
});
