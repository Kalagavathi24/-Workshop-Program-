let array = [10, 15, 20, 25, 30, 35];
let specificNumber = 5;
var multiplesCount = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % specificNumber === 0) {
        multiplesCount++;
    }
}
console.log("Number of multiples of", specificNumber, ":", multiplesCount);
