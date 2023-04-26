type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
    for (const v of nums) {
        init = fn(init, v);
    }
    return init;
}
export { reduce as default };
export type { Fn };
