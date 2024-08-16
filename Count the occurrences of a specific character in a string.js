let str = "Hii I am Kalagavathi";
let charToCount = 'a'; 
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === charToCount) {
    count++;
  }
}

console.log(The character '${charToCount}' occurs ${count} times in the string.);
