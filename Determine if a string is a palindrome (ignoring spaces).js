let str = "A man a plan a canal Panama";
let cleanedStr = str.replace(/\s+/g, '').toLowerCase();
let reversedStr = cleanedStr.split('').reverse().join('');
let isPalindrome = cleanedStr === reversedStr;

console.log(isPalindrome);
