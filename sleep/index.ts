export default async function sleep(millis: number): Promise<void> {
    await new Promise((s) => setTimeout(s, millis));
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
