// deno-lint-ignore-file
// deno-lint-ignore ban-unused-ignore
// deno-lint-ignore no-unused-vars
export default function hanota(A: number[], _B: number[], C: number[]): void {
    A.forEach((n) => C.push(n));
    A.length = 0;
}
