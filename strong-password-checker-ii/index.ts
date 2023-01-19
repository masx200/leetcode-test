function strongPasswordCheckerII(password: string): boolean {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+])(?!.*(.)\1+).{8,}$/
        .test(password);
}
// 执行用时：56 ms, 在所有 JavaScript 提交中击败了84.13% 的用户
// 内存消耗：41 MB, 在所有 JavaScript 提交中击败了95.24% 的用户

export default strongPasswordCheckerII;
