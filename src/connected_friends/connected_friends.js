const Queue = require("../lib/queue");

const connected = (G, s, r) => {
    const users = Object.keys(G)

    if (users.length === 0) {
        return false
    }

    if (s === r) {
        return true
    }

    let enqueued = [s]
    let discovered = new Queue()
    discovered.enqueue(s)

    while (discovered.first) {
        let user = discovered.dequeue()
        let following = G[user]
        for (let followedUser of following) {
            if (followedUser === r) {
                return true
            }
            if (!enqueued.includes(followedUser)) {
                enqueued.push(followedUser)
                discovered.enqueue(followedUser)
            }
        }
    }
    return false
};

module.exports = connected;
