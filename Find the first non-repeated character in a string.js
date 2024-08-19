const text = "swiss";
const charCount = [];
for (let i = 0; i < 256; i++) {
    charCount[i] = 0;
}

for (let i = 0; i < text.length; i++) {
    charCount[text.charCodeAt(i)]++;
}

let firstNonRepeatedChar = null;
for (let i = 0; i < text.length; i++) {
    if (charCount[text.charCodeAt(i)] === 1) {
        firstNonRepeatedChar = text[i];
        break; 
    }
}
console.log("First non-repeated character:", firstNonRepeatedChar);
