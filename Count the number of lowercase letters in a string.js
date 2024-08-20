var str = "Hello World";
var count = 0;

for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
        count++;
    }
}

console.log("Number of lowercase letters: " + count);
