var arr = [10, 22, 11, 25, 43, 35, 40];
var divisor = 5;
var count = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
        count++;
    }
}
console.log('The number of elements divisible by', divisor, 'in the array is:', count);
