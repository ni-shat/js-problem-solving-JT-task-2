/** Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers. */

function findTwoNumbersWithSum(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right) {
        const sum = sortedArray[left] + sortedArray[right];

        if (sum === target) {
            return [left, right]; // Return the indices of the two numbers
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    // If no such pair is found, return an empty array
    return [];
}

// Test the function
const sortedArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const target = 9;
const indices = findTwoNumbersWithSum(sortedArray, target);
console.log(indices); 
