/*   Write a function that accepts an array of numbers
*   and returns an array of the number(s) that occur
*   the most.
*/

const mostFrequent = (nums) => {

    let frequency = {};
    let maxCount = 0;
    let result = [];

    for (let i = 0; i < nums.length; i++){

        if (frequency[nums[i]]) {
            frequency[nums[i]]++;
        } else {
            frequency[nums[i]] = 1;
        }

        if (frequency[nums[i]] > maxCount) {
            maxCount = frequency[nums[i]];
            result = [nums[i]];
        } else if (frequency[nums[i]] === maxCount) {
            result.push(nums[i]);
        }
    }

    return result;
}

// should return [0]
console.log(mostFrequent([0, 0, 0, 2, 2, 3]));

// should return [0,1,2,3,4,5]
console.log(mostFrequent([0,1,2,3,4,5]));

// should return [5,2]
console.log(mostFrequent([5,8,2,4,0,15,16,90,5,1,5,23,42,0,6,2,8,2,5,2]));