let arr = [1, 3, 5, 7, 9, 11];
let sum = 0;
for (let i = 0; i < arr.length; i += 2) {  
    sum += arr[i];
}
console.log("The sum of elements at even indices is:", sum);
