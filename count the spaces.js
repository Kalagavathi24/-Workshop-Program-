let str = "Hii I am Kalagavathi";
let spaceCount = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
        spaceCount++;
    }
}

console.log("Number of spaces:", spaceCount);
