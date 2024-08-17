let str = "awarness";
let seen = [];
let firstRepeatedCharacter = null;
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let isRepeated = false;
    for (let j = 0; j < seen.length; j++) {
        if (seen[j] === char) {
            firstRepeatedCharacter = char;
            isRepeated = true;
            break;
        }
    }
    if (isRepeated) {
        break;
    }
    seen[seen.length] = char;
}

if (firstRepeatedCharacter !== null) {
    console.log(firstRepeatedCharacter); 
} else {
    console.log("No repeated characters found.");
}
