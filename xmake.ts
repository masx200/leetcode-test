import * as path from "https://deno.land/std@0.186.0/path/mod.ts";

import { join, resolve } from "https://deno.land/std@0.186.0/path/mod.ts";

import { assertEquals } from "asserts";
import { dirname } from "https://deno.land/x/dirname_es@v1.0.1/mod.ts";
import parse from "npm:@masx200/mini-cli-args-parser@1.0.5";

// import { writeAll } from "https://deno.land/std@0.186.0/streams/mod.ts";

async function* findFilesRecursive(
    path: string,
    name: string,
): AsyncGenerator<string, void, unknown> {
    for await (const entry of Deno.readDir(path)) {
        const fullPath = resolve(join(path, entry.name));
        if (entry.isFile && entry.name === name) {
            yield fullPath;
        } else if (entry.isDirectory) {
            yield* findFilesRecursive(fullPath, name);
        }
    }
}

if (import.meta.main) {
    await main();
}
async function main() {
    const __dirname = dirname(import.meta);
    const args = parse(Deno.args);

    console.log(JSON.stringify(args));
    const { sdk, toolchain } = args;
    for await (const file of findFilesRecursive(__dirname, "test.cpp")) {
        await xmake(file, toolchain, sdk);
    }
}

async function xmake(file: string, toolchain: string, sdk: string) {
    const os = Deno.build.os;
    console.log({ file });
    // console.log({ os });
    const cmd = os === "windows" ? "powershell.exe" : "bash";
    const others = [
        `xmake clean `,
        `  xmake f ${toolchain ? "--toolchain=" + toolchain : ""} ${
            sdk ? "--sdk=" + sdk : ""
        } -y -v `,
        ` xmake build -v -y  -w test`,
        ` xmake build -v -y  -w`,
        ` xmake build -v -y  -w`,
        `  xmake run -v test`,
    ];
    const args = os === "windows"
        ? [
            "-command",
            others.join(" \n "),
        ]
        : [
            "-c",
            others.join(" && "),
        ];
    const cwd = path.dirname(file);
    console.log(JSON.stringify({ cmd, cwd, args }));
    const command = new Deno.Command(cmd, { cwd: cwd, args });

    const { success, stderr, stdout, code } = await command.output();
    console.log(new TextDecoder().decode(stdout));
    console.error(new TextDecoder().decode(stderr));
    console.log({ success, code });
    // await writeAll(Deno.stdout, stdout);
    //await writeAll(Deno.stderr, stderr);

    assertEquals(success, true);
    assertEquals(code, 0);
}
