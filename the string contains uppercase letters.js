var str = "String contains uppercase";
var Uppercase = false;
for (var i = 0; i < str.length; i++) {  
    if (str[i] >= 'A' && str[i] <= 'Z') {  
        Uppercase = true;  
        break; 
    }
}
if (Uppercase) {
    console.log("The string contains uppercase letters.");
} else {
    console.log("The string does not contain any uppercase letters.");
}
