import { assertEquals } from "../deps.ts";
import evaluate from "./index.ts";

Deno.test("parse-lisp-expression", () => {
    assertEquals(9, evaluate("9"));
    assertEquals(1119, evaluate("1119"));
});
