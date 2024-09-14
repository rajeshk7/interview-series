function maxVacationDays(flights, days) {
    const numCities = flights.length; // Number of cities
    const numWeeks = days[0].length; // Number of weeks

    // Initialize a 2D array to store the maximum vacation days
    const dp = Array.from({ length: numWeeks + 1 }, () => Array(numCities).fill(-Infinity));
    
    dp[0][0] = 0; // Starting point, no vacation days at week 0
    
    // Iterate over each week
    for (let week = 1; week <= numWeeks; ++week) {
        // Iterate over each city
        for (let city = 0; city < numCities; ++city) {
            // Carry forward the maximum vacation days from the previous week in the same city
            dp[week][city] = dp[week - 1][city];
            // Check all possible flights to the current city
            for (let prevCity = 0; prevCity < numCities; ++prevCity) {
                if (flights[prevCity][city] === 1) {
                    dp[week][city] = Math.max(dp[week][city], dp[week - 1][prevCity]);
                }
            }
            // Add the vacation days of the current city for the current week
            dp[week][city] += days[city][week - 1];
        }
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