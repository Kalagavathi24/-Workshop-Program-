var arr = [3, 7, 1, 9, 4, 6];
var num = 5;
var count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
        count++; 
    }
}
console.log("Number of elements less than " + num + " is: " + count);
