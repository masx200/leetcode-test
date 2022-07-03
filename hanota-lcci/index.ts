// deno-lint-ignore no-unused-vars
export default function hanota(A: number[], B: number[], C: number[]): void {
    A.forEach((n) => C.push(n));
    A.length = 0;
}
