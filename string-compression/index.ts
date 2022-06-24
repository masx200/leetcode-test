export default function compress(chars: string[]): number {
    let writeindex = 0;

    let count = 0;
    let current = "";
    for (let readindex = 0; readindex < chars.length; readindex++) {
        const char = chars[readindex];

        if (current === char) {
            count++;
        } else {
            flush();

            current = char;
            count = 1;
        }
    }
    flush();

    function flush() {
        if (current) {
            if (count > 1) {
                chars[writeindex] = current;
                writeindex++;
                const lenstring = count.toString();
                for (const c of lenstring) {
                    chars[writeindex] = c;
                    writeindex++;
                }
            } else {
                chars[writeindex] = current;
                writeindex++;
            }
        }
    }
    return writeindex;
}
