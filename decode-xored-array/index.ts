export default function decode(encoded: number[], first: number): number[] {
    const ans = [first];
    for (let i = 1; i <= encoded.length; i++) {
        ans.push(encoded[i - 1] ^ ans[i - 1]);
    }
    return ans;
}
