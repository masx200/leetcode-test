export class TreeNode<T> {
    constructor(
        //@ts-ignore
        public value: T = undefined,
        public left?: TreeNode<T>,
        public right?: TreeNode<T>,
    ) {}
}
