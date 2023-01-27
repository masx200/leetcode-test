function strongPasswordCheckerII(password: string): boolean {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+])(?!.*(.)\1+).{8,}$/
        .test(password);
}

export default strongPasswordCheckerII;
