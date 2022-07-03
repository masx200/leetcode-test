export default function isOneBitCharacter(bits: number[]): boolean {
    return /^(10|11|0)*0$/g.test(bits.join(""));
}
