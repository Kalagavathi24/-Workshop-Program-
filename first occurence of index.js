let arr = [12, 34, 56, 78, 34, 90];
let target = 34;
let index = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        index = i;
        break;
    }
}

if (index !== -1) {
    console.log("The first occurrence of", target, "is at index:", index);
} else {
    console.log(target, "is not found in the array.");
}
