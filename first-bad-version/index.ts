/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
export type IsBadVersion = (version: number) => boolean;

const solution = function (isBadVersion: IsBadVersion) {
    return function (n: number): number {
        let left = 1;
        let right = n;
        while (right - left >= 1) {
            const middle = Math.floor((left + right) / 2);
            if (isBadVersion(middle)) {
                right = middle;
            } else {
                left = middle + 1;
            }
        }

        return left;
    };
};
export default solution;
