//like bubble sort, but a little better.
//on first loop, searches for lowest value
//when finished, swaps lowest value for value at 0 index
//on second loop, searches for second lowest value, then
//swaps with value at 1 index
//continue this pattern until whole array is sorted
const selectionSort = (arr) =>{
    let count = 0;
    let lowest = count;

    while(count < arr.length) {
        let runner = count;
        for(; runner < arr.length; runner ++) {
            if(arr[runner] < arr[lowest]){
                lowest = runner;
            }
        }
        if(count != lowest) {
            let temp = arr[lowest];
            arr[lowest] = arr[count];
            arr[count] = temp;
            count++;
        } else {
            return arr;
        }
    }
    return arr;
}

console.log(selectionSort([5,4,2,6,8,14,1,3]));