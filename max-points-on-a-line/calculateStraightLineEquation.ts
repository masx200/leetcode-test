/* ax+by+c=0 */
export function calculateStraightLineEquation(
    point1: number[],
    point2: number[],
): [number, number, number] {
    const [x1, y1] = point1;
    const [x2, y2] = point2;
    let a = 0;
    let b = 0;
    let c = 0;
    if (x1 === x2) {
        /* x=x1;
    1x-x1=0
    a=1
    c=-x1
    */
        a = 1;
        c = -x1;
    } else if (y1 === y2) {
        b = 1;
        c = -y1;
    } else {
        /*
    ax1+by1+c=0
    ax2+by2+c=0

    a(x1-x2)+b(y1-y2)=0
    a(x1-x2)=b(y2-y1)
    a=y2-y1
    b=x1-x2
    */
        a = y2 - y1;
        b = x1 - x2;
        /*
    c=-ax1-by1
    (y2-y1)x1+(x1-x2)y1+c=0
    c=-(y2-y1)x1-(x1-x2)y1
    */
        c = -a * x1 - b * y1;
    }
    return [a, b, c];
}
