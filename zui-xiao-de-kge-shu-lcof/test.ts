import { assertEquals } from "../deps.ts";
import getLeastNumbers from "./index.ts";

Deno.test("zui-xiao-de-kge-shu-lcof", () => {
    assertEquals(
        [
            [[3, 2, 1], 2],
            [[0, 1, 2, 1], 1],
        ]
            .map((args) => Reflect.apply(getLeastNumbers, undefined, args))
            .map((arr) => new Set(arr)),
        [[2, 1], [0]].map((arr) => new Set(arr)),
    );
});
