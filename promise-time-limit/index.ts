// deno-lint-ignore-file require-await
type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    return async function (...args) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                rej("Time Limit Exceeded");
            }, t);

            res(fn(...args));
        });
    };
}
export default timeLimit;
export type { Fn };
