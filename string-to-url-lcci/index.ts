export default function replaceSpaces(S: string, length: number): string {
    // deno-lint-ignore ban-ts-comment
    //@ts-ignore
    return S.slice(0, length).replaceAll(" ", "%20");
}
