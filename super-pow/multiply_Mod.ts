export function multiply_Mod(a: bigint, b: bigint, m: bigint): bigint {
    return ((a % m) * (b % m)) % m;
}
