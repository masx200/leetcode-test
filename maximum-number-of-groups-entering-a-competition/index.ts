export default function maximumGroups(grades: number[]): number {
    const t = 2 * grades.length;
    const g = Math.floor(Math.sqrt(t));

    return g * (g + 1) > t ? g - 1 : g;
}
