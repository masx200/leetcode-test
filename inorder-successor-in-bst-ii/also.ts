export function also<T>(t: T, b: (t: T) => void): T {
    b(t);
    return t;
}
