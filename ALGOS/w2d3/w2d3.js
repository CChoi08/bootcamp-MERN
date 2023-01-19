//Intersect two arrays to create an unsorted multiset
//return the new array of all the values that both arrays
//have in common

//[6,7,2,7,6,2], [2,7,2,1,2] returns [7,2,2]

const intersectUnsorted = (leftArr,rightArr) => {
    newArr = [];

    for (let i = 0; i < leftArr.length; i++) {
        for(let j = 0; j < rightArr.length; j++) {
            if(leftArr[i] == rightArr[j]) {
                newArr.push(leftArr[i]);
                rightArr.splice(j, 1);
                break;
            }
        }
    }
    return newArr;
}

console.log(intersectUnsorted([6,7,2,7,6,2], [2,7,2,1,2]));
console.log(intersectUnsorted([1,2,2,2,7],[2,2,6,6,7]));
console.log(intersectUnsorted([1,5,9],[2,6,10]));

//return a new unsorted union multiset of two arrays
//essentially same as yesterday but your input is unsorted
//don't just sort the arrays, then do a union!

//[2,7,2,1,2], [6,7,2,7,6,2] returns [7,2,7,2,2,1,6,6]
//(or a different combination of the same numbers, since it's unsorted)

const unionUnsorted = (leftArr, rightArr) => {
    let intersected = intersectUnsorted(leftArr, rightArr);

    for(i = 0; i < intersected.length; i++) {
        for(let j = 0; j < leftArr.length; j++) {
            if(intersected[i] === leftArr[j]) {
                leftArr.splice(j, 1);
                break;
            }
        }
    }
    for(i = 0; i < intersected.length; i++) {
        for(let j = 0; j < rightArr.length; j++) {
            if(intersected[i] === rightArr[j]) {
                rightArr.splice(j, 1);
                break;
            }
        }
    }
}

console.log(unionUnsorted([2,7,2,1,2], [6,7,2,7,6,2]));
// console.log(union([2,1,10,7,9],[3,10,2,7,9,5,2]));
// console.log(union([2,2,7,1,2],[2,2,6,7,6]));