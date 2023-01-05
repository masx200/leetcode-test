export default function minMovesToSeat(
    seats: number[],
    students: number[]
): number {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    return seats.reduce((p, c, i) => p + Math.abs(c - students[i]), 0);
}
