export default function isOneBitCharacter(bits: number[]): boolean {
    return bits
        .join("")
        .replaceAll(/(10)|(11)|0/g, (s) => (s.length === 2 ? "B" : "A"))
        .endsWith("A");
}
