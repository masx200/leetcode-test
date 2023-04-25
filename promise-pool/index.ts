type F = () => Promise<any>;

function promisePool(functions: F[], n: number): Promise<any> {
    return Promise.all(
        Array(n).fill(undefined).map(async () => {
            while (functions.length) {
                const f = functions.shift() as F;

                await f();
            }
        }),
    );
}
export default promisePool;

export type { F };
