export default compressString;
function compressString(S: string): string {
    //@ts-ignore
    const c = S.replaceAll(/([a-zA-Z])\1*/g, (a) => a[0] + a.length);
    return c.length < S.length ? c : S;
}
