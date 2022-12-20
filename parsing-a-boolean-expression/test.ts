import { assert, assertFalse } from "asserts";

import parseBoolExpr2 from "./index.ts";
import parseBoolExpr from "./parseBoolExpr.ts";

Deno.test("parsing-a-boolean-expression", () => {
    testParseBoolExpr(parseBoolExpr);
    testParseBoolExpr(parseBoolExpr2);
});
function testParseBoolExpr(parseBoolExpr: (expression: string) => boolean) {
    assert(parseBoolExpr("!(f)"));
    assert(parseBoolExpr("|(f,t)"));
    assertFalse(parseBoolExpr("&(t,f)"));
    assertFalse(parseBoolExpr("|(&(t,f,t),!(t))"));
}
