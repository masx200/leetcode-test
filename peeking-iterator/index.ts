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
    let nextElement: null | number = iterator.next();
    function peek(): number | null {
        return nextElement;
    }

    function next(): number | null {
        const ret = nextElement;
        nextElement = iterator.hasNext() ? iterator.next() : null;
        return ret;
    }

    function hasNext(): boolean {
        return nextElement != null;
    }
    return { peek, next, hasNext };
}
