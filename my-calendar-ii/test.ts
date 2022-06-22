import { assertEquals } from "../deps.ts";
import MyCalendarThree from "./index.ts";

Deno.test("my-calendar-ii", () => {
    const temp = new MyCalendarThree();
    const args = [
        [10, 20, true],
        [50, 60, true],
        [10, 40, true],
        [5, 15, false],
        [5, 10, true],
        [25, 55, true],
    ] as const;
    args.forEach(([start, end, result]) => {
        assertEquals(result, temp.book(start, end));
    });
});
