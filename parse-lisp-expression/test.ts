import { assertEquals } from "../deps.ts";
import evaluate from "./index.ts";

Deno.test("parse-lisp-expression", () => {
    assertEquals(9, evaluate("9"));
    assertEquals(1119, evaluate("1119"));
});
Deno.test("parse-lisp-expression", () => {
    assertEquals(87912, evaluate("(mult 88 999)"));
});
Deno.test("parse-lisp-expression", () => {
    assertEquals(2, evaluate("(let x 3 x 2 x)"));
});
Deno.test("parse-lisp-expression", () => {
    assertEquals(1007, evaluate("(add 8 999)"));
});
Deno.test("parse-lisp-expression", () => {
    assertEquals(14, evaluate("(let x 2 (mult x (let x 3 y 4 (add x y))))"));
});
Deno.test("parse-lisp-expression", () => {
    assertEquals(5, evaluate("(let x 1 y 2 x (add x y) (add x y))"));
});
