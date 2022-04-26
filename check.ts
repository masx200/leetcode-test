import { walk } from "https://deno.land/std@0.136.0/fs/mod.ts";

// Async
async function printFilesNames() {
    console.log("type check start!");
    const stack: string[] = [];
    for await (const entry of walk(".", {
        includeFiles: true,
        includeDirs: false,
        exts: ["ts"],
        skip: [/node_modules/],
    })) {
        console.log(entry.path);
        if (stack.length < 10) {
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

printFilesNames().then(() => console.log("type check Done!"));

async function runDenoCheck(stack: string[]) {
    const process = Deno.run({
        cmd: ["deno", "check", ...stack],
        stderr: "piped",
        stdout: "piped",
    });
    /*        const [status/* , stdout, stderr */
    //] =  */
    await Promise.all([
        process.status(),
        // process.output(),
        // process.stderrOutput(),
    ]);
    process.close();
}
