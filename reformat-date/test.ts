import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";

import reformatDate from "./index.ts";

Deno.test("reformat-date", () => {
    const inputs = ["20th Oct 2052", "6th Jun 1933", "26th May 1960"];
    assertEquals(
        ["2052-10-20", "1933-06-06", "1960-05-26"],
        inputs.map(reformatDate),
    );
});
