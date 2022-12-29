import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";
import ExamRoom from "./index.ts";
Deno.test("exam-room", () => {
    assertEquals(
        runScript(
            ["ExamRoom", "seat", "seat", "seat", "seat", "leave", "seat"],
            [[10], [], [], [], [], [4], []],
            ExamRoom,
        ),
        [null, 0, 9, 4, 2, null, 5],
    );
});
