import { RunCommandShell } from "./xmake.ts";
import parse from "npm:@masx200/mini-cli-args-parser@1.0.5";
import { walk } from "https://deno.land/std@0.187.0/fs/walk.ts";
if (import.meta.main) {
    await start();
}

async function start() {
    const entry_iter = walk(".", {
        includeFiles: true,
        includeDirs: false,
        exts: [".lua"],
        skip: [].flat().filter(Boolean) as RegExp[],
    });
    const args = parse(Deno.args);

    console.log(JSON.stringify(args));
    const { executable = "lua-format" } = args;
    console.log("input lua-format executable:--executable=lua-format");
    const files: string[] = [];
    for await (const entry of entry_iter) {
        console.log(entry);
        files.push(entry.path);
    }
    await RunCommandShell([[executable, ...files, "-i", "-v"].join(" ")]);
}
