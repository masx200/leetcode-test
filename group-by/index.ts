declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>;
    }
}

Array.prototype.groupBy = function (fn) {
    const obj: Record<string, any[]> = {};

    for (const v of this) {
        (obj[fn(v)] ??= []).push(v);
    }
    return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
