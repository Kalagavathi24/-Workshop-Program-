let array = [3, 8, 12, 5, 18, 7];
let targetValue = 10; // The value to compare against
let result = null;

for (let i = 0; i < array.length; i++) {
  if (array[i] > targetValue) {
    result = array[i];
    break; // Stop searching after finding the first match
  }
}

if (result !== null) {
  console.log(The first element greater than ${targetValue} is ${result}.);
} else {
  console.log(No element greater than ${targetValue} was found.);
}
