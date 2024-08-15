let string = "Hii I am Kalagavathi";
let count = 0;
let inWord = false;
for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
        if (!inWord) {
            count++;
            inWord = true;
        }
    } else {
        inWord = false;
    }
}
console.log("Number of words:", count);
