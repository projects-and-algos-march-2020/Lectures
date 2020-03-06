function removeDupes(arr) {
    // [2,2,5,6,"apple",7,"apple",20] => [2,5,6,7,20,"apple"]

    var itemsFound = {};
    // loop array
    for(var i=0; i<arr.length; i++) {
        // see if there is a key of "array item" in itemsFound
        if(itemsFound[arr[i]]) {
            // if so, DUPE ENCOUNTERED!
            arr.splice(i,1);
            // rewind i by 1
            i--;
        } else {
            // if not, add that key
            itemsFound[arr[i]] = 1;
        }
    }
}
var arrayTest = [2,2,2,2,2,5,6,"apple",7,"apple",20];
removeDupes(arrayTest);
console.log(arrayTest);