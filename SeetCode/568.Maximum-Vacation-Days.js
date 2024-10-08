/*
LeetCode wants to give one of its best employees the option to travel among n cities to collect algorithm problems.
But all work and no play makes Jack a dull boy, you could take vacations in some particular cities and weeks.
Your job is to schedule the traveling to maximize the number of vacation days you could take, but there are certain rules and restrictions you need to follow.

Rules and restrictions:

You can only travel among n cities, represented by indexes from 0 to n - 1. Initially, you are in the city indexed 0 on Monday.
The cities are connected by flights. The flights are represented as an n x n matrix (not necessarily symmetrical), called flights representing the airline status from the city i to the city j.
If there is no flight from the city i to the city j, flights[i][j] == 0; Otherwise, flights[i][j] == 1. Also, flights[i][i] == 0 for all i.
You totally have k weeks (each week has seven days) to travel. You can only take flights at most once per day and can only take flights on each week's Monday morning.
Since flight time is so short, we do not consider the impact of flight time.
For each city, you can only have restricted vacation days in different weeks, given an n x k matrix called days representing this relationship.
For the value of days[i][j], it represents the maximum days you could take a vacation in the city i in the week j.
You could stay in a city beyond the number of vacation days, but you should work on the extra days, which will not be counted as vacation days.
If you fly from city A to city B and take the vacation on that day, the deduction towards vacation days will count towards the vacation days of city B in that week.
We do not consider the impact of flight hours on the calculation of vacation days.
Given the two matrices flights and days, return the maximum vacation days you could take during k weeks.

        Example 1:

        Input: flights = [[0,1,1],[1,0,1],[1,1,0]], days = [[1,3,1],[6,0,3],[3,3,3]]
        Output: 12
        Explanation:
        One of the best strategies is:
        1st week : fly from city 0 to city 1 on Monday, and play 6 days and work 1 day.
        (Although you start at city 0, we could also fly to and start at other cities since it is Monday.)
        2nd week : fly from city 1 to city 2 on Monday, and play 3 days and work 4 days.
        3rd week : stay at city 2, and play 3 days and work 4 days.
        Ans = 6 + 3 + 3 = 12.
        Example 2:

        Input: flights = [[0,0,0],[0,0,0],[0,0,0]], days = [[1,1,1],[7,7,7],[7,7,7]]
        Output: 3
        Explanation:
        Since there are no flights that enable you to move to another city, you have to stay at city 0 for the whole 3 weeks.
        For each week, you only have one day to play and six days to work.
        So the maximum number of vacation days is 3.
        Ans = 1 + 1 + 1 = 3.
        Example 3:

        Input: flights = [[0,1,1],[1,0,1],[1,1,0]], days = [[7,0,0],[0,7,0],[0,0,7]]
        Output: 21
        Explanation:
        One of the best strategies is:
        1st week : stay at city 0, and play 7 days.
        2nd week : fly from city 0 to city 1 on Monday, and play 7 days.
        3rd week : fly from city 1 to city 2 on Monday, and play 7 days.
        Ans = 7 + 7 + 7 = 21
*/

function maxVacationDays(flights, days) {
    const numCities = flights.length; // Number of cities
    const numWeeks = days[0].length; // Number of weeks

    // Initialize a 2D array to store the maximum vacation days
    const dp = Array.from({ length: numWeeks + 1 }, () => Array(numCities).fill(-Infinity));
    
    dp[0][0] = 0; // Starting point, no vacation days at week 0
    
    // Iterate over each week
    for (let week = 1; week <= numWeeks; ++week) 
        // Iterate over each city
        for (let city = 0; city < numCities; ++city) {
            // Carry forward the maximum vacation days from the previous week in the same city
            dp[week][city] = dp[week - 1][city];
            // Check all possible flights to the current city
            for (let prevCity = 0; prevCity < numCities; ++prevCity) {
                if (flights[prevCity][city] === 1) 
                    dp[week][city] = Math.max(dp[week][city], dp[week - 1][prevCity]);
            }
            // Add the vacation days of the current city for the current week
            dp[week][city] += days[city][week - 1];
        }
    // Find the maximum vacation days possible after the last week
    let maxVacationDays = 0;
    for (let city = 0; city < numCities; ++city) {
        maxVacationDays = Math.max(maxVacationDays, dp[numWeeks][city]);
    }
    
    return maxVacationDays;
}

const flights1 = [[0,0,0],[0,0,0],[0,0,0]], days1 = [[1,1,1],[7,7,7],[7,7,7]]
console.log(maxVacationDays(flights1, days1)) // 3

const flights2 = [[0,1,1],[1,0,1],[1,1,0]], days2 = [[1,3,1],[6,0,3],[3,3,3]]
console.log(maxVacationDays(flights2, days2)) // 12

const flights3 = [[0,1,1],[1,0,1],[1,1,0]], days3 = [[7,0,0],[0,7,0],[0,0,7]]
console.log(maxVacationDays(flights3, days3)) // 21
