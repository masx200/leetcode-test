export default function intersect(nums1: number[], nums2: number[]): number[] {
    const map1: Record<any, number> = nums1.reduce((l, i) => {
        l[i] = (l[i] ?? 0) + 1;
        return l;
    }, {} as Record<any, number>);
    const map2: Record<any, number> = nums2.reduce((l, i) => {
        l[i] = (l[i] ?? 0) + 1;
        return l;
    }, {} as Record<any, number>);
    const tar: number[] = [];
    Object.entries(map2).forEach((item) => {
        if (map1[item[0]]) {
            for (let i = 0; i < Math.min(item[1], map1[item[0]]); i++) {
                tar.push(Number(item[0]));
            }
        }
    });
    return tar;
}
