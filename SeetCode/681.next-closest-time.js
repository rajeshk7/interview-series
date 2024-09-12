/*
Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.
You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

        Example 1:

        Input: time = "19:34"
        Output: "19:39"
        Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.
        It is not 19:33, because this occurs 23 hours and 59 minutes later.
        Example 2:

        Input: time = "23:59"
        Output: "22:22"
        Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22.
        It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.     

*/

const isValidTime = (timeStr) => {
  const hours = parseInt(timeStr.slice(0, 2), 10);
  const minutes = parseInt(timeStr.slice(2), 10);
  return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;
};

const nextClosestTime = (time) => {

    // Recursive function to generate the next closest time
    const generateNextClosestTime = (current) => {
        if (current.length === 4) {
            if (!isValidTime(current)) 
              return;
            const curTimeInMins = parseInt(current.slice(0, 2), 10) * 60 + parseInt(current.slice(2), 10);
            if (iniTimeInMins < curTimeInMins && curTimeInMins < iniTimeInMins + minDifference) {
                minDifference = curTimeInMins - iniTimeInMins;
                closestTime = current.slice(0, 2) + ':' + current.slice(2);
            }
            return;
        }
        for (const digit of uniqueDigits) {
            generateNextClosestTime(current + digit);
        }
    };

    // Extract unique digits from the input time
    const uniqueDigits = new Set(time.replace(':', ''));
    console.log(uniqueDigits);
    const iniTimeInMins = parseInt(time.slice(0, 2), 10) * 60 + parseInt(time.slice(3), 10);
    console.log(iniTimeInMins);
    let minDifference = Infinity, closestTime = null;

    // Start generating the next closest time
    generateNextClosestTime('');

    // If no valid closest time is found, return the smallest possible time using the unique digits
    if (closestTime === null) {
        const minDigit = Math.min(...Array.from(uniqueDigits).map(digit => parseInt(digit, 10)));
        closestTime = `${minDigit}${minDigit}:${minDigit}${minDigit}`;
    }

    return closestTime;
}

// Example usage:
console.log(nextClosestTime("19:34")); // Output: "19:39"
console.log(nextClosestTime("23:59")); // Output: "22:22"