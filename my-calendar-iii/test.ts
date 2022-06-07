import { assertEquals } from "../deps.ts";
import MyCalendarThree from "./index.ts";

Deno.test("my-calendar-iii", () => {
    const temp = new MyCalendarThree();
    const args = [
        [10, 20, 1],
        [50, 60, 1],
        [10, 40, 2],
        [5, 15, 3],
        [5, 10, 3],
        [25, 55, 3],

        [0, 100, 4],
        [10, 20, 5],
        [50, 60, 5],
        [10, 40, 6],
        [5, 15, 7],
        [5, 10, 7],
        [25, 55, 7],
    ] as const;
    args.forEach(([start, end, result]) => {
        assertEquals(
            result,
            temp.book(start, end),
        );
    });
});
