export default class Twitter {
    #time = 0;
    #follower_to_followees: Map<number, Set<number>> = new Map();

    #user_to_tweets: Map<number, Set<number>> = new Map();
    #tweet_to_time = new Map<number, number>();
    constructor() {}
    #deleteTweet(userId: number, tweetId: number): void {
        const tweets = this.#user_to_tweets.get(userId);
        if (tweets) {
            tweets.delete(tweetId);
        }

        this.#tweet_to_time.delete(tweetId);
    }
    postTweet(userId: number, tweetId: number): void {
        const time = this.#time;
        this.#tweet_to_time.set(tweetId, time);
        const tweets = this.#user_to_tweets.get(userId) ?? new Set();
        tweets.add(tweetId);
        this.#user_to_tweets.set(userId, tweets);
        this.#time++;

        if (tweets.size > 10) {
            const oldestTweet = tweets.values().next().value;
            this.#deleteTweet(userId, oldestTweet);
        }
    }

    getNewsFeed(userId: number): number[] {
        const followees = this.#follower_to_followees.get(userId);
        const tweets = Array.from(this.#user_to_tweets.get(userId) ?? []);
        if (followees) {
            for (const followee of followees) {
                const userTweets = this.#user_to_tweets.get(followee);
                if (userTweets) {
                    userTweets.forEach((tweet) => tweets.push(tweet));
                }
            }
        }

        const sortedTweets = tweets
            .sort((a, b) => {
                const timeA = this.#tweet_to_time.get(a) ?? 0;
                const timeB = this.#tweet_to_time.get(b) ?? 0;
                return timeB - timeA;
            })
            .slice(0, 10);

        return sortedTweets;
    }

    follow(followerId: number, followeeId: number): void {
        const followee =
            this.#follower_to_followees.get(followerId) ?? new Set();

        followee.add(followeeId);
        this.#follower_to_followees.set(followerId, followee);
    }

    unfollow(followerId: number, followeeId: number): void {
        this.#follower_to_followees.get(followerId)?.delete(followeeId);
    }
}
