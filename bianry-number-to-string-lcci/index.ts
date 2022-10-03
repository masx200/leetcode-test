export default function printBin(num: number): string {
    const str: string = num.toString(2);
    return str.length > 32 ? "ERROR" : str;
}
