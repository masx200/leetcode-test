function wateringPlants(plants: number[], capacity: number): number {
    let ans = 0;
    let rest = capacity;
    for (let i = 0; i < plants.length; i++) {
        if (rest >= plants[i]) {
            ans++;
            rest -= plants[i];
        } else {
            ans += i * 2 + 1;
            rest = capacity - plants[i];
        }
    }
    return ans;
}
export default wateringPlants;
