var arr = [10, 23, 25, 9, 16, 20];
var firstPerfectSquare = -1;
for (var i = 0; i < arr.length; i++) {
    var sqrt = Math.sqrt(arr[i]);
    if (sqrt === Math.floor(sqrt)) {
        firstPerfectSquare = arr[i];
        break;
    }
}

console.log("First perfect square in the array: " + firstPerfectSquare);
