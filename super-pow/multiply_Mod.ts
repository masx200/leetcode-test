//(a⋅b) mod m=[(a mod m)⋅(b mod m)] mod m

export function multiply_Mod(a: bigint, b: bigint, m: bigint): bigint {
    return (((a) % (m)) * ((b) % (m))) % (m);
}
