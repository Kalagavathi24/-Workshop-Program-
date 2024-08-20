var arr = [1, 2, 3, 4, 16, 20, 32, 7];
var count = 0;
for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (num > 0 && (num & (num - 1)) === 0) {
        count++;
    }
}

console.log("Number of elements that are powers of 2: " + count);
