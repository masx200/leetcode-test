function countAndSay(n: number): string {
    const cached = cache.get(n);

    if (cached) {
        return cached;
    }

    const sb: string[] = [];

    if (n === 1) {
        sb.push("1");
    } else {
        let prev = countAndSay(n - 1);
        if (prev.length === 1) {
            sb.push("" + "1" + prev);
        } else {
            while (prev.length) {
                const start = prev[0];
                if (prev[1] && start !== prev[1]) {
                    sb.push("" + "1" + start);
                    prev = prev.slice(1);
                } else {
                    const index = Array.prototype.findIndex.call(
                        prev,
                        (v) => v !== start,
                    );

                    if (index >= 0) {
                        sb.push("" + index + start);
                        prev = prev.slice(index);
                    } else {
                        sb.push("" + prev.length + start);
                        prev = "";
                    }
                }
            }
        }
    }
    const res = sb.join("");

    cache.set(n, res);
    return res;
}

const cache = new Map<number, string>();
export default countAndSay;
