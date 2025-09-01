
let body = document.getElementById("body");

window.onload = function() {
    body.style.backgroundColor = "lightblue";
}

/*
element.addEventListener(event, function, useCapture)

event: action to listen for
function: statements to execute when event occurs
useCapture: optional, indicates whether to use event bubbling or capturing
*/

let inputField = document.getElementById("inputField");

//focus event
inputField.addEventListener("focus", function() {
    inputField.style.backgroundColor = "lightgreen";
});

//blur event
inputField.addEventListener("blur", function() {
    inputField.style.backgroundColor = "lightred";
});

//input event
inputField.addEventListener("input", function() {
    console.log("Current input value: " + inputField.value);
});

//keydown event
inputField.addEventListener("keydown", function(event) {
    console.log("Key down: " + event.key);
});
