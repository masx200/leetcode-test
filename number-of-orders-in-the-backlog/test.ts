import { assertEquals } from "asserts";

import getNumberOfBacklogOrders from "./index.ts";

Deno.test("number-of-orders-in-the-backlog", () => {
    assertEquals(
        getNumberOfBacklogOrders([
            [10, 5, 0],
            [15, 2, 1],
            [25, 1, 1],
            [30, 4, 0],
        ]),
        6,
    );
});
Deno.test("number-of-orders-in-the-backlog", () => {
    assertEquals(
        getNumberOfBacklogOrders([
            [7, 1000000000, 1],
            [15, 3, 0],
            [5, 999999995, 0],
            [5, 1, 1],
        ]),
        999999984,
    );
});
