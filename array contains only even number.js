let numbers = [2, 4, 6, 8, 10];
let Even = true;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        Even = false;
        break;
    }
}
if (Even) {
    console.log("The array contains only even numbers.");
} else {
    console.log("The array does not contain only even numbers.");
}
