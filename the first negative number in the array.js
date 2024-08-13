var arr = [2, 4, -1, 6, -8, 5, -3];
for (var i = 0; i < arr.length; i++) { 
    if (arr[i] < 0) { 
        console.log("The first negative number in the array:", arr[i]);
        break; 
    }
}
