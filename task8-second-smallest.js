/** Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number. */


function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array must contain at least two elements";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    return secondSmallest;
}

// Test the function
const numbersArray = [8, 4, 10, 50, 2, 3, 7, 35];
const secondSmallestNumber = findSecondSmallest(numbersArray);
console.log(secondSmallestNumber); 
