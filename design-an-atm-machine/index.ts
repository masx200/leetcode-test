export default function ATM() {
    let moneyStore = new Map([
        [20, 0],
        [50, 0],
        [100, 0],
        [200, 0],
        [500, 0],
    ]);
    const indexToMoney = [20, 50, 100, 200, 500];
    return {
        deposit(banknotesCount: number[]): void {
            for (let i = 0; i < 5; i++) {
                const index = i;
                const count = banknotesCount[i];
                const key = indexToMoney[index];

                moneyStore.set(key, (moneyStore.get(key) ?? 0) + count);
            }
        },

        withdraw(amount: number): number[] {
            const delta = new Map([
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
                        changedStore.get(money) ?? 0,
                    );
                    amount -= money * d;
                    delta.set(money, +d + (delta.get(money) ?? 0));
                    changedStore.set(
                        money,
                        -d + (changedStore.get(money) ?? 0),
                    );
                }
            }
            if (amount > 0) {
                return [-1];
            } else {
                moneyStore = changedStore;

                return Array.from(delta.values());
            }
        },
    };
}
