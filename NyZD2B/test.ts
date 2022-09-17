import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";
import VendingMachine from "./index.ts";
Deno.test("VendingMachine", () => {
    assertEquals(
        [null, null, 10, -1, -1, -1],
        runScript(
            ["VendingMachine", "addItem", "sell", "sell", "sell", "sell"],
            [
                [],
                [0, 3, "Apple", 10, 10],
                [1, "Tom", "Apple", 1],
                [2, "Tom", "Apple", 3],
                [3, "Mary", "Banana", 2],
                [11, "Jim", "Apple", 1],
            ],
            VendingMachine,
        ),
    );
});
Deno.test("VendingMachine", () => {
    assertEquals(
        [null, null, null, 8, null, -1, 2, -1, null, 200, 196],
        runScript(
            [
                "VendingMachine",
                "addItem",
                "addItem",
                "sell",
                "addItem",
                "sell",
                "sell",
                "sell",
                "addItem",
                "sell",
                "sell",
            ],
            [
                [],
                [0, 1, "Apple", 4, 3],
                [1, 3, "Apple", 4, 2],
                [2, "Mary", "Apple", 2],
                [2, 1, "Banana", 2, 5],
                [4, "Jim", "Banana", 2],
                [4, "Mary", "Banana", 1],
                [4, "Mary", "Apple", 1],
                [6, 200, "Apple", 2, 5],
                [6, "Jim", "Apple", 100],
                [7, "Mary", "Apple", 100],
            ],
            VendingMachine,
        ),
    );
});
