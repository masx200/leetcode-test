function maxNiceDivisors(primeFactors: number): number {
    const mod = BigInt(1e9 + 7);
    if (primeFactors <= 4) return primeFactors;

    const n = Math.floor(primeFactors / 3),
        remain = primeFactors % 3;
    if (remain === 0) return Number(pow_3(n));
    else if (remain === 1) return Number((pow_3(n - 1) * 4n) % mod);
    else if (remain === 2) return Number((pow_3(n) * 2n) % mod);
    return 0;
    function pow_3(n: number | bigint): bigint {
        n = BigInt(n);
        let ans = 1n,
            p = 3n;
        while (n !== 0n) {
            if (n % 2n !== 0n) {
                ans = (ans * p) % mod;
            }
            p = (p * p) % mod;
            n = n >> 1n;
        }
        return ans;
    }
}

export default maxNiceDivisors;
