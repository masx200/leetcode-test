export function createFileReader4(file: string): (buf: string[]) => number {
    let index = 0;
    const read4 = (buf: string[]): number => {
        if (file.length - index > 4) {
            const total = 4;
            for (let i = 0; i < total; i++) {
                buf[i] = file[i + index];
            }
            index += 4;

            return total;
        } else {
            const total = file.length - index;
            for (let i = 0; i < total; i++) {
                buf[i] = file[i + index];
            }
            index = file.length;

            return total;
        }
    };
    return read4;
}
