export default function totalStrength(strength: number[]): number {
    const n = strength.length;
    const left: number[] = new Array(n);
    const right: number[] = new Array(n);
    const stack: number[] = [];
    const MOD = 1e9 + 7;
    const BigMOD = BigInt(MOD);

    for (let i = 0; i < n; i++) {
        while (stack.length && strength[last(stack)] >= strength[i]) {
            stack.pop();
        }
        left[i] = stack.length ? last(stack) : -1;
        stack.push(i);
    }

    stack.length = 0;

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && strength[last(stack)] > strength[i]) {
            stack.pop();
        }
        right[i] = stack.length ? last(stack) : n;
        stack.push(i);
    }

    const s: number[] = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        s[i + 1] = (s[i] + strength[i]) % MOD;
    }

    const ss: number[] = new Array(n + 2).fill(0);
    for (let i = 0; i <= n; i++) {
        ss[i + 1] = (ss[i] + s[i]) % MOD;
    }

    let ans = 0n;

    for (let i = 0; i < n; i++) {
        const l = left[i] + 1;
        const r = right[i] - 1;
        const total = (BigInt((i - l + 1) * (ss[r + 2] - ss[i + 1])) -
            BigInt((r - i + 1) * (ss[i + 1] - ss[l]))) %
            BigMOD;
        ans = (ans + BigInt(strength[i]) * BigInt(total)) % BigMOD;
    }

    return Number((ans + BigMOD) % BigMOD);
}
export function last<T>(stack: T[]): T {
    return stack[stack.length - 1];
}
