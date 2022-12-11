export default function angleClock(hour: number, minutes: number): number {
    const a = ((360 * (hour + minutes / 60)) / 12) % 360;
    const b = ((360 * minutes) / 60) % 360;

    return Math.min(360 - Math.abs(a - b), Math.abs(a - b));
}
