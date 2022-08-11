export default function Solution(
    radius: number,
    x_center: number,
    y_center: number,
) {
    return {
        randPoint(): number[] {
            const r = Math.sqrt(Math.random()) * radius;

            const t = Math.random() * 2 * Math.PI;
            return [x_center + r * Math.cos(t), y_center + r * Math.sin(t)];
        },
    };
}
