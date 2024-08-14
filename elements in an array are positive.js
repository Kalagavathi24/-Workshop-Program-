var arr = [8, 2, 6, 5, 1, 9, 7];
var allPositive = true;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
        allPositive = false;
        break;
    }
}

if (allPositive) {
    console.log("All elements in the array are positive.");
} else {
    console.log("Not all elements in the array are positive.");
}
