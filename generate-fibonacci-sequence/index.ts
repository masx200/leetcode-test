function* fibGenerator(): Generator<number, any, number> {
    const result = [0, 1, 1];

    yield result[0];
    yield result[1];
    while (true) {
        yield result[2];

        result.shift();

        result.push(result[0] + result[1]);
    }
}
export default fibGenerator;
