import { assertEquals } from "asserts";

import canAttendMeetings from "./index.ts";

Deno.test("meeting-rooms", () => {
    const Input = [
            [0, 30],
            [5, 10],
            [15, 20],
        ],
        Output = false;
    assertEquals(canAttendMeetings(Input), Output);
});
Deno.test("meeting-rooms", () => {
    const Input = [[7, 10], [2, 4]],
        Output = true;
    assertEquals(canAttendMeetings(Input), Output);
});
