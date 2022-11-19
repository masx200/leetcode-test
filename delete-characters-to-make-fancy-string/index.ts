function makeFancyString(s: string): string {
    //@ts-ignore
    return s.replaceAll(/(.)\1{2,}/g, (a) => a.slice(0, 2));
}
export default makeFancyString;
