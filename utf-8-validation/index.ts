function validUtf8(data: number[]): boolean {
    for (let i = 0; i < data.length; i++) {
        const value = data[i];
        if (value >> 7 === 0) {
            continue;
        }
        if (
            value >> 5 === 0b110 &&
            i + 1 < data.length &&
            data[i + 1] >> 6 === 0b10
        ) {
            i++;
            continue;
        }
        if (
            value >> 4 === 0b1110 &&
            i + 2 < data.length &&
            data[i + 1] >> 6 === 0b10 &&
            data[i + 2] >> 6 === 0b10
        ) {
            i += 2;
            continue;
        }
        if (
            value >> 3 === 0b11110 &&
            i + 3 < data.length &&
            [data[i + 1], data[i + 2], data[i + 3]].every(
                (v) => v >> 6 === 0b10
            )
        ) {
            i += 3;
            continue;
        }
        return false;
    }
    return true;
}
export default validUtf8;
