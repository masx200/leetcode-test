export default function isArmstrong(n: number) {
    return (
        [...n.toString()].reduce(
            (p, v, _i, a) => p + Math.pow(Number(v), a.length),
            0
        ) === n
    );
}
