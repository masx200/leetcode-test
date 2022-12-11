export class TreeNode<T> {
    constructor(
        //@ts-ignore
        public value: T = undefined,
        public left: TreeNode<T> | null = null,
        public right: TreeNode<T> | null = null,
    ) {}
}
