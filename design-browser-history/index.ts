function BrowserHistory(homepage: string) {
    const array = [homepage];

    let index = 0;
    return {
        visit(url: string): void {
            array.length = index + 1;
            array.push(url);
            index++;
        },

        back(steps: number): string {
            index = Math.max(index - steps, 0);
            return array[index];
        },

        forward(steps: number): string {
            index = Math.min(index + steps, array.length - 1);
            return array[index];
        },
    };
}

type BrowserHistory = ReturnType<typeof BrowserHistory>;
export default BrowserHistory;
