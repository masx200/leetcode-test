export function cache<T extends (...args: any[]) => any>(fn: T): T {
    const store = new Map<string, ReturnType<T>>();

    return ((...args) => {
        const key = args.length === 1 ? args[0] : JSON.stringify(args);
        const cached = store.get(key);
        if (store.has(key)) {
            return cached as ReturnType<T>;
        }
        const result = Reflect.apply(fn, undefined, args);
        store.set(key, result);

        return result;
    }) as T;
}
