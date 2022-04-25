/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */
export interface NumberIterator {
    hasNext(): boolean;
    next(): number;
}
interface PeekingIterator {
    peek(): number | null;

    next(): number | null;

    hasNext(): boolean;
}
export default PeekingIterator;
function PeekingIterator(iterator: NumberIterator): PeekingIterator {
    // const elements: number[] = [];
    // while (iterator.hasNext()) {
    //     elements.push(iterator.next());
    // }
    // let index = 0;
    let nextElement: null | number = iterator.next();
    function peek(): number | null {
        // return elements[index];
        return nextElement;
    }

    function next(): number | null {
        const ret = nextElement;
        nextElement = iterator.hasNext() ? iterator.next() : null;
        return ret;

        // const ele = elements[index];
        // index++;
        // return ele;
    }

    function hasNext(): boolean {
        return nextElement != null;
        // return index < elements.length;
    }
    return { peek, next, hasNext };
}
/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
