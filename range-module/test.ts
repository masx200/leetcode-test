import { assertEquals } from "../deps.ts";
import RangeModule from "./index.ts";
Deno.test("RangeModule", () => {
    const rangeModule = new RangeModule();
    const targets = [
        // "RangeModule",
        "addRange",
        "removeRange",
        "queryRange",
        "queryRange",
        "queryRange",
        "queryRange",
        "queryRange",
        "addRange",
        "queryRange",
    ] as const;

    const args = [
        // ([],
        [10, 20],
        [14, 16],
        [10, 14],
        [13, 15],
        [16, 17],
        [106, 1700],
        [16, 17000],
        [16, 17000],
        [16, 17000],
    ] as const;
    const results = [
        // null,
        null,
        null,
        true,
        false,
        true,
        false,
        false,
        null,
        true,
    ] as const;

    for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        const arg = args[i];
        const result = results[i];
        const ans = Reflect.apply(
            Reflect.get(rangeModule, target),
            rangeModule,
            arg,
        );
        if (typeof result === "boolean") {
            assertEquals(ans, result);
        }
    }
});
