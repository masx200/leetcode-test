export default function RLEIterator(encoding: number[]) {
    const generator = (function* () {
        for (let i = 0; i < encoding.length; i += 2) {
            yield { count: encoding[i], value: encoding[i + 1] };
        }
    })();

    let count = 0;
    let value = 0;
    let done = false;
    return {
        next(n: number): number {
            if (done) return -1;
            while (n > 0 && !done) {
                if (count) {
                    const delta = Math.min(count, n);
                    n -= delta;
                    count -= delta;
                    if (n === 0) return value;
                } else {
                    const result = generator.next();
                    done = !!result.done;
                    if (result.done) return -1;
                    value = result.value.value;
                    count = result.value.count;
                }
            }
            return -1;
        },
    };
}
