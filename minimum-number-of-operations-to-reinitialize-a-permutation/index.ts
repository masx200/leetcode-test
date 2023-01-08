function reinitializePermutation(n: number): number {
    if (n === 2) {
        return 1;
    }
    let step = 1,
        pow2 = 2;
    while (pow2 !== 1) {
        step++;
        pow2 = (pow2 * 2) % (n - 1);
    }
    return step;
}

export default reinitializePermutation;
