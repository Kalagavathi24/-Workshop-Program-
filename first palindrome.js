let string = ["apple", "banana", "civic", "deed", "level"];
let firstPalindrome = "";
for (let i = 0; i < string.length; i++) {
    let str = string[i];
    let reversedStr = str.split('').reverse().join('');
    
    if (str === reversedStr) {
        firstPalindrome = str;
        break;
    }
}
if (firstPalindrome) {
    console.log("The first palindrome is:", firstPalindrome);
} else {
    console.log("No palindromes found.");
}
