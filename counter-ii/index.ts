export type Counter = {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
};

export default function createCounter(init: number): Counter {
    let n = init;
    return {
        increment: () => ++n,
        decrement: () => --n,
        reset: () => (n = init),
    };
}
