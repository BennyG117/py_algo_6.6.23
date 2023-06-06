/* 
    String: Reverse
    Given a string,
    return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */

//!  solution - going backwards
function reverseString(str) {
    let reverseString = ""; 
    //declare new sxtring variable
    for(let i=str.length-1; i >= 0; i--) { 
        // i = length of the word, if i >= number of letters left do next..., then iterate down 1
        reverseString += str[i]; 
        // add letter to new string " " // reversedString = reversedString + str[i]
    }
    return reverseString; // once done, return new string
}
console.log(reverseString(str1)); // log new string (creature -> erutaerc)
console.log("==========\n");

//! alt solution - going forward
function reverseString(str) {
    let temp = "";
    //declare temp as empty string, that will be completed
    for(let i = 0; i < str.length; i++) {
    //for loop iterate i at 1st letter, if i less then total length of the string, increment 1
        temp = str[i] + temp;
        //temp becomes string +letter "i" + whatever is already there
    }
    return temp;
    //returns new temp
}
console.log(reverseString(str2)); 
// log new string (dog -> god)
console.log("==========\n");

console.log(reverseString(str3)); 
//hello example
console.log("==========\n");

console.log(reverseString(str4)); 
// " " example
console.log("==========\n");




// //TEST CODE FOR REVERSE
console.log(reverseString(str1)) // Expected: erutaerc
console.log(reverseString(str2)) // Expected: god
console.log(reverseString(str3)) // Expected: olleh
console.log(reverseString(str4)) // Expected: ""

// try to do it without any built in methods!
// try to do it looping forwards only!