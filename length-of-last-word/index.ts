export default function lengthOfLastWord(s: string): number {
    const arr = s.split(/\s+/g);
    if (arr.at(-1)?.length === 0) arr.pop();
    //console.log(arr)
    const result = arr.at(-1)?.length;

    return result || 0;
}
