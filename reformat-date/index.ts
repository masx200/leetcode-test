export default function reformatDate(date: string): string {
    const [day, month, year] = date.split(" ");

    return (
        year +
        "-" +
        String(months_transform[month]).padStart(2, "0") +
        "-" +
        String(parseInt(day)).padStart(2, "0")
    );
}
const months_transform: Record<string, number> = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
};
