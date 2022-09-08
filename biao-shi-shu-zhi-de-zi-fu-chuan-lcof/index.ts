export default function isNumber(s: string): boolean {
    s = s.trim();
    return /^(\+|\-)?(\d+(\.\d*)?|\.\d+)((e|E)(\+|\-)?\d+)?$/.test(s);
}
