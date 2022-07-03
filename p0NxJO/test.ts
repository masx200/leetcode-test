import { assertEquals } from "../deps.ts";
import magicTower from "./index.ts";

Deno.test("magicTower", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const ans = magicTower(nums);
    assertEquals(ans, 0);

    assertEquals(-1, magicTower([-200, -300, 400, 0]));
    assertEquals(
        1,
        magicTower([100, 100, 100, -250, -60, -140, -50, -50, 100, 150])
    );
});
