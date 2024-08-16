let array = [2, 5, 0, 3, 0, 7];
let product = 1;

for (let i = 0; i < array.length; i++) {
  if (array[i] !== 0) {
    product *= array[i];
  }
}

console.log(The product of all non-zero elements is ${product}.);
