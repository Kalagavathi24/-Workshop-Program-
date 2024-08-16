let array = [2, 3, 4, 5, 10, 11, 13, 17, 20];
let primeCount = 0;
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true; 
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 0; i < array.length; i++) {
  if (isPrime(array[i])) {
    primeCount++;
  }
}

console.log(The number of prime numbers in the array is ${primeCount}.);
