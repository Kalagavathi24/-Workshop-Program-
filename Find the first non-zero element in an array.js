let array = [0, 0, 3, 0, 5, 6];
let firstNonZeroElement = null;
for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
        firstNonZeroElement = array[i];
        break; 
    }
}
console.log("First non-zero element:", firstNonZeroElement);
