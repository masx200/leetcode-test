import { walk } from "https://deno.land/std@0.136.0/fs/mod.ts";
import { parse } from "https://deno.land/std@0.136.0/flags/mod.ts";
// Async
async function printFilesNames({ skip }: { skip?: RegExp | RegExp[] }) {
    console.log("type check start!");
    const stack: string[] = [];
    for await (
        const entry of walk(".", {
            includeFiles: true,
            includeDirs: false,
            exts: ["ts"],
            skip: [/node_modules/, skip].flat().filter(Boolean) as RegExp[],
        })
    ) {
        console.log(entry.path);
        if (stack.length < 15) {
            stack.push(entry.path);
        } else {
            await runDenoCheck([...stack, entry.path]);
            stack.length = 0;
            // console.log({ status, stdout, stderr });
        }
    }
    if (stack.length) {
        await runDenoCheck(stack);
    }
}
if (import.meta.main) {
    /* deno run -A "check.ts" "--skip=npm|utils" */
    const args = parse(Deno.args);
    console.log(args);
    const skip = typeof args.skip === "string"
        ? new RegExp(String(args.skip))
        : Array.isArray(args.skip)
        ? args.skip.map((s) => new RegExp(s))
        : undefined;
    await printFilesNames({ skip })
        .then(() => console.log("type check Done!"))
        .catch(console.error);
}

async function runDenoCheck(stack: string[]) {
    const cmd = ["deno", "check", "--remote", ...stack];
    const process = Deno.run({
        cmd: cmd,
        stderr: "piped",
        stdout: "piped",
    });
    const [status, stdout, stderr] = await Promise.all([
        process.status(),
        process.output(),
        process.stderrOutput(),
    ]);
    const decoder = new TextDecoder();
    const out = decoder.decode(stdout);
    const err = decoder.decode(stderr);
    console.log(cmd, status, out, err);
    process.close();
    if (!status.success) {
        throw new Error("type check failed:" + out + err);
    }
}
