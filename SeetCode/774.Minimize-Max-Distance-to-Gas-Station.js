/*
You are given an integer array stations that represents the positions of the gas stations on the x-axis. 
You are also given an integer k.
You should add k new gas stations.
You can add the stations anywhere on the x-axis, and not necessarily on an integer position.

Let penalty() be the maximum distance between adjacent gas stations after adding the k new stations.
Return the smallest possible value of penalty(). Answers within 10-6 of the actual answer will be accepted.

    Example 1:
    Input: stations = [1,2,3,4,5,6,7,8,9,10], k = 9
    Output: 0.50000

    Example 2:
    Input: stations = [23,24,36,39,46,56,57,65,84,98], k = 1
    Output: 14.00000
*/

function minmaxGasDist(stations, K) {
    // Helper function to check if a given max distance can be achieved
    const canAchieve = (maxDist) => {
        let count = 0;
        for (let i = 1; i < stations.length; i++) {
            count += Math.floor((stations[i] - stations[i - 1]) / maxDist);
        }
        return count <= K;
    };

    // Binary search to find the minimum possible value of the maximum distance
    let left = 0, right = stations[stations.length - 1] - stations[0];
    let epsilon = 1e-6; // Precision for floating-point comparison

    while (right - left > epsilon) {
        let mid = (left + right) / 2;
        if (canAchieve(mid)) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return left;
}

// Example usage
const stations = [1,2,3,4,5,6,7,8,9,10], k = 9
console.log(minmaxGasDist(stations, k)); // Output: 1.0 (or close to 1.0)

console.log('---------------------');

const stations2 = [23,24,36,39,46,56,57,65,84,98], K2 = 1
console.log(minmaxGasDist(stations2, K2)); // Output: 14.0 (or close to 14.0)