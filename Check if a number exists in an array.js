var arr = [2,5,7,8,9];
var number = 5;
var exists = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === number) {  
        exists = true; 
        break;  
    }
}
if (exists) {
    console.log("The number exists in the array.");
} else {
    console.log("The number does not exist in the array.");
}
