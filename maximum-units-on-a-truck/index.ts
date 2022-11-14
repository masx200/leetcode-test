export default function maximumUnits(
    boxTypes: number[][],
    truckSize: number
): number {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let res = 0;
    for (const boxType of boxTypes) {
        const numberOfBoxes = boxType[0];
        const numberOfUnitsPerBox = boxType[1];
        if (numberOfBoxes < truckSize) {
            res += numberOfBoxes * numberOfUnitsPerBox;
            truckSize -= numberOfBoxes;
        } else {
            res += truckSize * numberOfUnitsPerBox;
            break;
        }
    }
    return res;
}
