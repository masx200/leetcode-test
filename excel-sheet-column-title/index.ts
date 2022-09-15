export default function convertToTitle(columnNumber: number): string {
    return columnNumber > 26
        ? convertToTitle(Math.floor((columnNumber - 1) / 26)) +
            convertToTitle((columnNumber - 1) % 26 + 1)
        : String.fromCharCode("A".charCodeAt(0) + columnNumber - 1);
}
