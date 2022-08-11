import { parse, walk } from "./deps.ts";
import AsyncLimiterClass, {
    AsyncCurrentLimiter,
} from "https://cdn.skypack.dev/@masx200/async-task-current-limiter@2.1.0?dts";
import { WalkEntry } from "https://deno.land/std@0.151.0/fs/_util.ts";
function searchFilesNames({
    skip,
}: // limiter,
    {
        skip?: RegExp | RegExp[];
        // limiter: AsyncCurrentLimiter;
    }) {
    console.log("type check start!");

    const entry_iter = walk(".", {
        includeFiles: true,
        includeDirs: false,
        exts: ["ts"],
        skip: [/node_modules/, skip].flat().filter(Boolean) as RegExp[],
    });
    return entry_iter;
}
if (import.meta.main) {
    await start();
    // .catch(console.error);
}

async function parallel_check(
    entry_iter: AsyncIterableIterator<WalkEntry>,
    limiter: AsyncCurrentLimiter,
) {
    const stack: string[] = [];

    const ps: Array<Promise<void>> = [];
    for await (const entry of entry_iter) {
        console.log(entry.path);
        if (stack.length < 15) {
            stack.push(entry.path);
        } else {
            ps.push(limiter.run(() => runDenoCheck([...stack, entry.path])));
            stack.length = 0;
            // console.log({ status, stdout, stderr });
        }
    }
    if (stack.length) {
        ps.push(limiter.run(() => runDenoCheck(stack)));
    }
    await Promise.all(ps);
}

async function start() {
    const limiter = new AsyncLimiterClass(navigator.hardwareConcurrency);
    const args = parse(Deno.args);
    console.log(args);
    const skip = typeof args.skip === "string"
        ? new RegExp(String(args.skip))
        : Array.isArray(args.skip)
        ? args.skip.map((s) => new RegExp(s))
        : undefined;
    const entry_iter = searchFilesNames({ skip });
    await parallel_check(entry_iter, limiter);
    console.log("type check Done!");
}

async function runDenoCheck(stack: string[]) {
    const cmd = ["deno", "check", "--unstable", "--remote", ...stack];
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
