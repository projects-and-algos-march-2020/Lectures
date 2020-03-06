var letters = {};
// i found an "a"!
// check if "a" is in letters
if(letters["a"]) {
    letters["a"] += 1;    
} else {
    letters["a"] = 1;
}
// i found another "a"


function characterCount(word) { // "apple"
    // return object with the characters as Keys
    // and the number of occurences of that character as values
    // eg.
    // "apple" =>
    // {"a": 1, "p": 2, "l": 1, "e": 1}

    
    var letters = {};

    // loop through the string
    for(var c of word) {
        // if "c" is a key in letters
        if(letters[c]) {
            // increment letters[c]
            letters[c]++;
        } else {
            // else create that key with value of 1
            letters[c] = 1;
        }
    }
    return letters
        // count each letter
}
console.log(characterCount("apple jacks"));