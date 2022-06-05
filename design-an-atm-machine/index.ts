export default function ATM() {
    const moneyStore = new Map([
        [20, 0],
        [50, 0],
        [100, 0],
        [200, 0],
        [500, 0],
    ]);
    const indexToMoney = [20, 50, 100, 200, 500];
    return {
        deposit(banknotesCount: number[]): void {
            for (const [index, count] of banknotesCount.entries()) {
                const key = indexToMoney[index];
                if (!moneyStore.has(key)) {
                    throw new Error("moneyStore Not Found");
                }
                moneyStore.set(key, (moneyStore.get(key) ?? 0) + count);
            }
        },

        withdraw(amount: number): number[] {
            const delta = Object.fromEntries([
                [20, 0],
                [50, 0],
                [100, 0],
                [200, 0],
                [500, 0],
            ]);
            const changedStore = new Map(moneyStore);
            for (const money of [500, 200, 100, 50, 20]) {
                if ((changedStore.get(money) ?? 0) > 0 && amount >= money) {
                    const d = Math.min(
                        Math.floor(amount / money),
                        changedStore.get(money) ?? 0
                    );
                    amount -= money * d;
                    delta[money] += d;
                    changedStore.set(
                        money,
                        -d + (changedStore.get(money) ?? 0)
                    );
                }
            }
            if (amount > 0) {
                return [-1];
            } else {
                changedStore.forEach((value, key) =>
                    moneyStore.set(key, value)
                );
                return Object.values(delta);
            }
        },
    };
}
