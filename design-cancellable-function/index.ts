function cancellable<T>(
    generator: Generator<Promise<any>, T, unknown>,
): [() => void, Promise<T>] {
    const ac = new AbortController();

    function cancel() {
        //@ts-ignore
        ac.abort(/* "Cancelled" */);
        //    rej?.("Cancelled");
    }
    let res: undefined | ((value: T | PromiseLike<T>) => void);
    let rej: ((reason?: any) => void) | undefined;
    const promise = new Promise<T>((s, j) => {
        res = s;
        rej = j;
    });
    async function run(): Promise<T> {
        let yield_value;

        let yield_error;

        let rejected = false;
        while (true) {
            //@ts-ignore
            const { value, done } = rejected
                ? generator.throw(yield_error)
                : generator.next(yield_value);

            if (done) {
                return (value);
            } else {
                try {
                    yield_value = await Promise.race([
                        value,
                        new Promise((_s, j) => {
                            ac.signal.addEventListener(
                                "abort",
                                //@ts-ignore
                                () => j("Cancelled"),
                            );
                        }),
                    ]);
                    rejected = false;
                } catch (error) {
                    yield_error = error;
                    rejected = true;
                }
            }
        }
    }

    run().then(res, rej);
    return [cancel, promise];
}

/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */

export default cancellable;
