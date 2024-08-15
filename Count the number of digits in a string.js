
let string = prompt("Enter the string:");
let digitCount = 0;
for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char >= '0' && char <= '9') {
        digitCount++;
    }
}
console.log("Number of digits in the string:", digitCount);
