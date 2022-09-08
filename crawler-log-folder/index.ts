export default function minOperations(logs: string[]): number {
    return (
        Array.from(new URL(logs.join(""), "h://a.b").pathname.matchAll(/\//g))
            .length - 1
    );
}
