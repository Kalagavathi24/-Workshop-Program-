var arr = [6, 8, 12, 9, 10, 55,44];
var num = 20;
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
        sum += arr[i];
    }
}

console.log('The sum of elements greater than', num, 'in the array is:', sum);
