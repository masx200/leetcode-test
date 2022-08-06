import { assertEquals } from "../deps.ts";
import interpret from "./index.ts";

Deno.test("goal-parser-interpretation", () => {
    assertEquals(
        ["Goal", "Gooooal", "alGalooG"],
        ["G()(al)", "G()()()()(al)", "(al)G(al)()()G"].map(interpret),
    );
});
