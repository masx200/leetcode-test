export default function reformatNumber(number: string): string {
    //@ts-ignore
    const str = number.replaceAll(/\-|\s/g, "");
    const arr = Array(Math.ceil(str.length / 3))
        .fill(0)
        .map((_, i) => str.slice(i * 3, i * 3 + 3));

    if (arr[arr.length - 1].length === 1) {
        arr[arr.length - 1] = arr[arr.length - 2].slice(-1) +
            arr[arr.length - 1];
        arr[arr.length - 2] = arr[arr.length - 2].slice(0, 2);
    }
    // console.log(arr)
    return arr.join("-");
}
