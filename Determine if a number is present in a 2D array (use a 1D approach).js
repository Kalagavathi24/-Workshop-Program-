let array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let target = 5; 
let found = false;
for (let i = 0; i < array2D.length; i++) {
  for (let j = 0; j < array2D[i].length; j++) {
    if (array2D[i][j] === target) {
      found = true;
      break;
    }
  }
  if (found) break; 
}

if (found) {
  console.log(${target} is present in the 2D array.);
} else {
  console.log(${target} is not present in the 2D array.);
}
