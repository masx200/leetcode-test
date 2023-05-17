import { ensureDir, join, path, resolve } from "./deps.ts";

import { assertEquals } from "asserts";
import parse from "npm:@masx200/mini-cli-args-parser@1.0.5";
import { retry } from "./retry.ts";

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
    const args = parse(Deno.args);
    const __dirname = Deno.cwd();
    console.log(JSON.stringify(args));
    const { sdk, toolchain, group = "test", mode = "test" } = args;
    const { executable = "xmake" } = args;
    for await (const file of findFilesRecursive(__dirname, "test.cpp")) {
        await RunXmake(file, toolchain, sdk, executable, group, mode);
    }
}

async function RunXmake(
    file: string,
    toolchain: string,
    sdk: string,
    executable: string,
    group: string,
    mode: string,
) {
    await RunXmakeConfig(file, toolchain, sdk, executable, mode);
    await retry(RunXmakeBuild.bind(null, file, executable, group), {
        retryOnError: async (e) => {
            const regexp = /error:.*cannot open file:(.*), Unknown/g;
            const matched = e?.stdout?.match(regexp);
            const filepathmatched = regexp.exec(matched?.[0])?.[1]?.trim();

            if (filepathmatched && matched) {
                const cwd = path.dirname(file);
                const dirtobecreate = path.join(
                    cwd,
                    path.dirname(filepathmatched),
                );

                console.log(
                    "Ensures that the directory exists:" + dirtobecreate,
                );
                await ensureDir(dirtobecreate);
                return true;
            } else return false;
        },
    });
    await RunXmakeTest(file, executable, group);
}

async function RunXmakeConfig(
    file: string,
    toolchain: string,
    sdk: string,
    executable: string,
    mode: string,
) {
    console.log({ file });
    const cwd = path.dirname(file);
    const others = [
        `${executable} clean --project=. "--file=./xmake.lua" -a `,
        `${executable} f ${toolchain ? "--toolchain=" + toolchain : ""} ${
            sdk ? "'--sdk=" + sdk + "'" : ""
        } -y -v --project=. "--file=./xmake.lua" ${
            mode ? "--mode=" + mode : ""
        }`,
    ];
    await RunCommandShell(others, cwd);
}
export async function RunCommandShell(others: string[], cwd?: string) {
    const os = Deno.build.os;

    const cmd = os === "windows" ? "powershell.exe" : "bash";

    const args = os === "windows"
        ? ["-command", others.join(" \n ")]
        : ["-c", others.join(" && ")];

    console.log(JSON.stringify({ cmd, cwd, args }));
    const command = new Deno.Command(cmd, { cwd: cwd, args });

    const { success, stderr, stdout, code } = await command.output();
    const decoded = {
        stdout: new TextDecoder().decode(stdout),
        stderr: new TextDecoder().decode(stderr),
    };
    console.log(decoded.stdout);
    console.error(decoded.stderr);
    console.log({ success, code });

    try {
        assertEquals(success, true);
        assertEquals(code, 0);
    } catch (error) {
        Object.assign(error, { success, code, ...decoded });
        throw error;
    }
}

async function RunXmakeBuild(file: string, executable: string, group: string) {
    const cwd = path.dirname(file);

    console.log({ file });

    const others = [
        `${executable} build -v -y  -w --project=. "--file=./xmake.lua" ${
            group ? "--group=" + group : ""
        }`,
    ];
    await RunCommandShell(others, cwd);
}

async function RunXmakeTest(file: string, executable: string, group: string) {
    console.log({ file });

    const others = [
        `${executable} run -v --project=. "--file=./xmake.lua" ${
            group ? "--group=" + group : ""
        } `,
    ];
    const cwd = path.dirname(file);
    await RunCommandShell(others, cwd);
}
