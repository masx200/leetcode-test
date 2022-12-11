export default function exchangeBits(num: number): number {
    return (
        ((num & 0b101010101010101010101010101010) >> 1) |
        ((num & 0b010101010101010101010101010101) << 1)
    );
}
