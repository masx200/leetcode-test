function constructArr(a: number[]): number[] {
    if (a.length <= 1) return a;
    const product_cache = new Map<number, Map<number, number>>();
    function get(left: number, right: number): number {
        const cached = product_cache.get(left)?.get(right);
        if (typeof cached !== "undefined") {
            return cached;
        }
        const result = compute(left, right);
        set(left, right, result);
        return result;
    }
    function set(left: number, right: number, value: number) {
        const map = product_cache.get(left) ?? new Map<number, number>();
        product_cache.set(left, map);
        map.set(right, value);
    }
    function compute(left: number, right: number): number {
        if (left > right || left < 0 || right > a.length - 1) {
            throw Error("index out of bounds");
        }

        if (left === right) return a[left];

        if (left === 0) {
            //前缀乘积
            //error: RangeError: Maximum call stack size exceeded
            return get(left, right - 1) * get(right, right);
        }
        if (right === a.length - 1) {
            //后缀乘积
            //error: RangeError: Maximum call stack size exceeded
            return get(left, left) * get(left + 1, right);
        }
        //二分乘积 内存溢出
        const mid = Math.floor((left + right) / 2);

        return get(left, mid) * get(mid + 1, right);
    }

    return Array.from(
        { length: a.length },
        (_, i) =>
            i === a.length - 1
                ? get(0, a.length - 2)
                : i === 0
                ? get(1, a.length - 1)
                : get(0, Math.max(0, i - 1)) *
                    get(Math.min(a.length - 1, i + 1), a.length - 1),
    );
}
export default constructArr;
