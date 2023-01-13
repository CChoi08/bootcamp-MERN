//changes array in place, without needing a sliced array
//returns the index of the pivot
// const partition2 = (arr, left, right) => {
// }

//changes array in place, but needs a sliced array
//returns the index of the pivot
const partition = (arr) => {
    // console.log(arr);
    let pivot = arr[0];
    let pointer = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            pointer++;
            
            let temp = arr[i];
            arr[i] = arr[pointer];
            arr[pointer] = temp;
        }
    }
    let temp = arr[0];
    arr[0] = arr[pointer];
    arr[pointer] = temp;
    return pointer;
}

// console.log(partition([6,4,5,2,8,14,1,3]));

//time for recursion again!!
//partition your array, then quickSort the left half
//and the right half.
//Each half should be partitioned and quickSorted recursively.
const quickSort = (arr) => {
    // SUDO CODE
    // 1. Partition the array
    // 2. Find the sub array (left & right of the pivot)
    // 3. Quick sort the left (recursion)
    // 4. Quick sort the right (recursion)
    // 5. Combine left, pivot, right

    if(arr.length < 2) {
        return arr;
    }

    let pivotIndex = partition(arr);                  // Partition
    let left = arr.slice(0,pivotIndex);               // Identifying left
    let right = arr.slice(pivotIndex+1, arr.length);  // Identifying right

    left = quickSort(left);                           // Sorting left
    right = quickSort(right);                         // Sorting right

    return [...left, arr[pivotIndex], ...right];      // Returns the sorted array


}

console.log(quickSort([7,45,2,67,3,2,1,6,4,5,2,8,14,1,3, 82, 90,-1,0]));