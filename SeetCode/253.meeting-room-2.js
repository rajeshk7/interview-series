/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), 
find the minimum number of conference rooms required.

    Example 1:

    Input: [[0, 30],[5, 10],[15, 20]]
    Output: 2

    Example 2:

    Input: [[7,10],[2,4]]
    Output: 1
*/

const {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue,
  } = require('@datastructures-js/priority-queue');

const minMeetingRooms = (intervals) => {
    if(!intervals.length) 
        return 0;

    intervals.sort((a, b) => a[0] - b[0]);

    const minHeap = new MinPriorityQueue({priority: (data) => data[1]});
    minHeap.enqueue(intervals[0]);

    for(let i = 1; i < intervals.length; i++) {
        if( minHeap.front().element[1] <= intervals[i][0] ) {
            minHeap.dequeue();
        }

        minHeap.enqueue(intervals[i]);
    }

    return minHeap.size();
};

// Example usage:
console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]])); // Output: 2
console.log(minMeetingRooms([[7, 10], [2, 4]])); // Output: 1