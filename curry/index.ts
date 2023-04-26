// deno-lint-ignore ban-types
function curry(fn: Function): Function {
    const length = fn.length;
    return function curried(...args: any[]) {
        if (args.length === length) return fn(...args);
        if (args.length < length) {
            return curry(fn.bind(null, ...args));
        }
        throw new Error("arguments length mismatch");
    };
}

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */

export default curry;
