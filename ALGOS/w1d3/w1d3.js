//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
const combine = (leftArr, rightArr) => {
    let newArr = [];
    let i = 0;

    for(j=0; j < rightArr.length; j++) {
        if(leftArr[i] < rightArr[j]) {
            newArr.push(leftArr[i]);
            i++;
        } else if(rightArr[j] < leftArr[i]) {
            newArr.push(rightArr[j]);
        }
        // newArr.concat(rightArr.slice(j, rightArr.length));
    }

    return newArr;
}

// should return [0,1,2,3,4,6,7,9,11]
console.log(combine([1,2,7,9],[0,3,4,6,11]));

// should return [0,1]
console.log(combine([1],[0]));

// should return [1,2,3,4,5,6,7]
console.log(combine([1,2,3,4,5],[6,7]));

// should return [78]
console.log(combine([78],[]));

// should return []
console.log(combine([],[]));

// should return [0,1,2,3,7,9,11,15,109]
console.log(combine([3,9,10],[0,1,2,7,11,15,109]));