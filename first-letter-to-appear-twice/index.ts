function repeatedCharacter(s: string): string {
    let bitset = 0n;
    for (const char of s) {
        const num = BigInt(
            1n << BigInt(char.charCodeAt(0) - "a".charCodeAt(0) + 1)
        );
        if (bitset & num) {
            return char;
        }
        bitset |= num;
        // console.log(bitset,num)
    }
    return s[0];
}
export default repeatedCharacter;
