/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let n = cost.length, i = 2

    if (n <= 2) return Math.min(cost[0], cost[1])

    while (i < n) {
        let temp = Math.min(cost[0], cost[1]) + cost[i++];

        cost[0] = cost[1];
        cost[1] = temp
    }

    return Math.min(cost[0], cost[1])
};
