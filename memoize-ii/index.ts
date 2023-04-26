type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
    const cache = new Map<string, any>();
    let index = 0;
    const pointers = new Map<any, number>();

    return function (...args: any[]) {
        const key = JSON.stringify(args.map((a: any) => {
            const pointer: number = pointers.get(a) ?? index++;
            pointers.set(a, pointer);
            return pointer;
        }));

        const value = cache.get(key) ?? fn(...args);
        cache.set(key, value);

        return value;
    };
}

export type { Fn };
export default memoize;
