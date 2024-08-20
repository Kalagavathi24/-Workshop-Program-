var str = "Klagaavthi123";
var containsDigit = false;
for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char >= '0' && char <= '9') {
        containsDigit = true;
        break;
    }
}
if (containsDigit) {
    console.log("The string contains numeric digits.");
} else {
    console.log("The string does not contain numeric digits.");
}
