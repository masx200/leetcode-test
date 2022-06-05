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

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
