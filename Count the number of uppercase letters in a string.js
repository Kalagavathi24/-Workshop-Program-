var str = "Hello World";
var uppercaseCount = 0;
for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char >= 'A' && char <= 'Z') {
        uppercaseCount++;
    }
}

console.log("Number of uppercase letters:", uppercaseCount);
