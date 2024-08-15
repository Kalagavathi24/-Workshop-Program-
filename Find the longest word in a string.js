let string = prompt("Enter the string: ");
let words = string.split(" ");
let longestWord = words[0];
let maxLen = longestWord.length;
for (let i = 1; i < words.length; i++) {
    if (words[i].length > maxLen) {
        maxLen = words[i].length;
        longestWord = words[i];
    }
}
console.log(The longest word is: "${longestWord}" with length ${maxLen});
