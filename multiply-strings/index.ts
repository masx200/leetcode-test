import addStrings from "../add-strings/index.ts";

function multiply(x: string, y: string): string {
    // console.log('mul', x, y);
    if (x.length === 0 || y.length === 0) {
        throw Error("invalid empty number");
    }

    if (
        Array.prototype.every.call(y, (s) => s === "0") ||
        Array.prototype.every.call(x, (s) => s === "0")
    ) {
        return "0";
    }

    if (x === "1") {
        return y;
    }

    if (y === "1") {
        return x;
    }

    if (y === "2") {
        return addStrings(x, x);
    }
    if (x === "2") {
        return addStrings(y, y);
    }

    if (x.length + y.length < 16) {
        return String(Number(x) * Number(y));
    }
    if (x.length > y.length) {
        if (x.length >= 2) {
            const half = Math.floor(x.length / 2);
            return addStrings(
                multiply(y, x.slice(0, half)) + "0".repeat(x.length - half),
                multiply(y, x.slice(half)),
            );
        }
    } else {
        if (y.length >= 2) {
            const half = Math.floor(y.length / 2);
            return addStrings(
                multiply(x, y.slice(0, half)) + "0".repeat(y.length - half),
                multiply(x, y.slice(half)),
            );
        }
    }

    throw Error("unreachable");
}

export default multiply;
// export default function multiply(x: string, y: string): string {
//     // console.log('mul', x, y);
//     if (x.length === 0 || y.length === 0) throw Error("invalid empty number");

//     if (
//         Array.prototype.every.call(y, (s) => s === "0") ||
//         Array.prototype.every.call(x, (s) => s === "0")
//     ) {
//         return "0";
//     }

//     if (x === "1") return y;

//     if (y === "1") return x;

//     if (x.length < y.length) return multiply(y, x);

//     if (y === "2") return addStrings(x, x);
//     if (y.length >= 2) {
//         const half = Math.floor(y.length / 2);
//         return addStrings(
//             multiply(x, y.slice(0, half)) + "0".repeat(y.length - half),
//             multiply(x, y.slice(half)),
//         );
//     }
//     if (y === "4") return multiply("2", multiply(x, "2"));

//     if (y === "8") return multiply(multiply(x, "4"), "2");

//     if (["9", "7", "5", "3"].includes(y)) {
//         return addStrings(x, multiply(x, String(Number(y) - 1)));
//     }
//     if (y === "6") return multiply(addStrings(x, x), String(Number(y) >> 1));
//     throw new Error("unreachable");
// }
