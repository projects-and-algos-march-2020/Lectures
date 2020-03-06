
//  i
// [2,4,6,8] => [8,6,4,2]

// plan: easiest (non-built-in)!

// Time: O(N) AKA linear
// Space: O(N)
function reverseOne(arr) {
    // create a new array
    var newArr = [];
    // loop the array (starting at the end)
    for(var i=arr.length-1; i>=0; i--) {
        // push value to new array
        newArr.push(arr[i]);
    }
    return newArr;
}

// Space: O(1) AKA constant
// Time: O(N)
function reverseTwo(arr) {
    // do this "in place"

    // loop array until we reach midpoint
    for(var i=0; i<arr.length/2; i++) {
        // swap array values "across" midpoint
        var start = i;
        var end = arr.length-1-i;

        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }

    // temp: 6
    //       i
    // [10,8,6,4,2] 
}

var reversed = reverseOne([2,4,6,8]);
console.log(reversed);