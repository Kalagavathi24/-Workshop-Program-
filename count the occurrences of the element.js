var arr = [5, 0, 5, 6, 7, 5,10,3,5];
var occurrences = 0;
var spe_ele = 5;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === spe_ele) { 
        occurrences++;
    }
}
console.log("The count of occurrences of the element in the array:", occurrences);
