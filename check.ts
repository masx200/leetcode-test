import {
    AsyncCurrentLimiter,
    AsyncLimiterClass,
    parse,
    walk,
    WalkEntry,
} from "./deps.ts";
import { split_by_count } from "./utils/split_by_count.ts";

function searchFilesNames({ skip }: { skip?: RegExp | RegExp[] }) {
    const entry_iter = walk(".", {
        includeFiles: true,
        includeDirs: false,
        exts: [".ts"],
        skip: [/node_modules/, skip].flat().filter(Boolean) as RegExp[],
    });
    return entry_iter;
}
if (import.meta.main) {
    await start();
}

async function parallel_check(
    entry_iter: AsyncIterableIterator<WalkEntry>,
    limiter: AsyncCurrentLimiter,
) {
    const files: string[] = [];

    for await (const entry of entry_iter) {
        files.push(entry.path);
    }

    const entries = split_by_count(files, 50);

    await Promise.all(
        entries.map((stack) =>
            limiter.run(
                function (stack: string[]) {
                    return runDenoCheck(stack);
                }.bind(null, stack),
            )
        ),
    );
}
async function start() {
    const limiter = new AsyncLimiterClass(navigator.hardwareConcurrency);
    const args = parse(Deno.args);
    console.log(args);
    const skip = typeof args.skip === "string"
        ? new RegExp(String(args.skip))
        : Array.isArray(args.skip)
        ? args.skip.map((s: string | RegExp) => new RegExp(s))
        : undefined;
    const entry_iter = searchFilesNames({ skip });
    await parallel_check(entry_iter, limiter);
}

async function runDenoCheck(stack: string[]) {
    const cmd = ["deno", "check", "--unstable", ...stack];
    console.log(cmd);
    const process = new Deno.Command(cmd[0], {
        args: cmd.slice(1),
        stderr: "piped",
        stdout: "piped",
    });
    const { stderr, stdout, code, success } = await process.output();
    const decoder = new TextDecoder();
    const out = decoder.decode(stdout);
    const err = decoder.decode(stderr);
    console.log({ code, success }, out, err);

    if (!success) {
        throw new Error(
            "type cache failed:" +
                JSON.stringify({ code, success, stdout: out, stderr: err }),
        );
    }
}
