// Function Review

function sumOfNumbers(num) {
    // num:5 => 5+4+3+2+1
    var sum = 0;
    while(num > 0) { // num: 3,2,1 sum: 3,5,6
        sum += num;
        num--;
    }
    return sum;
}
console.log(sumOfNumbers(3));

function rSigma(num) {
    if(num < 1) {
        return num;
    }
    return num + rSigma(num-1);
}
var result = rSigma(3);




function displayArrayValues(arr, i=0) {
    if(i >= arr.length) {
        return;
    }
    console.log(arr[i])
    displayArrayValues(arr, i+1);
}

displayArrayValues([2,4,6,8]);