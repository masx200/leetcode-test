type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
    const cache = new Map<string, any>();
    return function (...args) {
        const key = JSON.stringify(args);

        const value = cache.get(key) ?? fn(...args);
        cache.set(key, value);

        return value;
    };
}
export type { Fn };
export default memoize;
/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 * 	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
