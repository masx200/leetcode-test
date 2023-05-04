import { assertEquals } from "asserts";

import minMeetingRooms from "./index.ts";

Deno.test("meeting-rooms-ii", () => {
    const Input = [
            [0, 30],
            [5, 10],
            [15, 20],
        ],
        Output = 2;
    assertEquals(minMeetingRooms(Input), Output);
});
Deno.test("meeting-rooms-ii", () => {
    const Input = [[7, 10], [2, 4]],
        Output = 1;
    assertEquals(minMeetingRooms(Input), Output);
});
