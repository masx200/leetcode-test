type F = (...p: any[]) => any;

function debounce(fn: F, t: number): F {
    let timer: number | undefined;
    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
}
export default debounce;

export type { F };
