// class RecentCounter {
//     constructor() {

//     }

//     ping(t: number): number {

//     }
// }
interface RecentCounter {
    ping(t: number): number;
}
function RecentCounter(): RecentCounter {
    const queue: number[] = [];
    function ping(t: number): number {
        queue.push(t);
        while (queue.length > 0 && t - queue[0] > 3000) {
            queue.shift();
        }
        return queue.length;
    }
    return { ping };
}
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
export default RecentCounter;
