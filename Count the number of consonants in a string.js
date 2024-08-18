let str = "I am a CSE Student";
let consonantCount = 0;
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= 'A' && char <= 'Z') {
        char = String.fromCharCode(char.charCodeAt(0) + 32);
    }
    
    if ((char >= 'a' && char <= 'z') && !(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')) {
        consonantCount++;
    }
}
console.log(consonantCount);
