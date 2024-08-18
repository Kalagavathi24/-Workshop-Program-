let arr = [3, 5, 7, 10, 11, 16];
let firstEven = null;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { 
        firstEven = arr[i];
        break; 
    }
}
if (firstEven !== null) {
    console.log("The first even number is:", firstEven); // 
} else {
    console.log("There is no even number in the array.");
}
