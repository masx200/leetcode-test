import { assertEquals } from "../deps.ts";
import MyCalendarThree from "./index.ts";

Deno.test("my-calendar-i", () => {
    const temp = new MyCalendarThree();
    const args = [
        [10, 20, true],
        [15, 25, false],
        [20, 30, true],
        [5, 15, false],
        [5, 10, true],
        [25, 55, false],
    ] as const;
    args.forEach(([start, end, result]) => {
        assertEquals(result, temp.book(start, end));
    });
});
