export type JSONValue = null | boolean | number | string | JSONValue[] | {
    [key: string]: JSONValue;
};
export type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;
export default function once(fn: OnceFn): OnceFn {
    let et = false;
    return function (...args) {
        if (et) return;
        et = true;
        return fn(...args);
    };
}
