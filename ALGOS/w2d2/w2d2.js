//Intersect Sorted Arrays
//Given two sorted arrays, return a new array containing all the numbers they have in common

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []

const intersect = (arrLeft, arrRight) => {
    let i = 0;
    let j = 0;
    let leftLength = arrLeft.length-1;
    let rightLength = arrRight.length-1;
    let newArr = [];

    while (i <= leftLength && j <= rightLength) {
        if(arrLeft[i] < arrRight[j]) {
            i++ ;
        }
        else if(arrRight[j] < arrLeft[i]) {
            j++;
        } else {
            newArr.push(arrLeft[i]);
            i++;
            j++;
        }
    }
    return newArr;
}

console.log(intersect([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(intersect([1,1,4,5,8],[1,1,1,5,6,8]));
console.log(intersect([1,3,5,7,9],[2,4,6,8,10]));
console.log(intersect([-9, 1, 3, 4, 4, 4, 4, 4, 4, 5, 7], [-5, 0, 1, 1, 1, 1, 1, 2, 4, 4, 6, 7]));