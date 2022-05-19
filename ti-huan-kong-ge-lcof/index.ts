export default function replaceSpace(s: string): string {
    // deno-lint-ignore ban-ts-comment
    //@ts-ignore
    return s.replaceAll(" ", "%20");
}
