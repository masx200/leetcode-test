type F = (x: number) => number;

function compose(functions: F[]): F {
    return function (x) {
        return functions.reduceRight((p, c) => c(p), x);
    };
}

export default compose;

export type { F };
