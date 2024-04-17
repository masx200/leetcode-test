export type JSONValue = null | boolean | number | string | JSONValue[] | {
    [key: string]: JSONValue;
};
export type Obj = Record<string, JSONValue> | Array<JSONValue>;
export default function chunk(arr: Obj[], size: number): Obj[][] {
    const res = Array(Math.ceil(arr.length / size)).fill([]);
    return res.map((_c, ci) => arr.slice(ci * size, size + ci * size));
}
