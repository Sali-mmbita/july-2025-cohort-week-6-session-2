
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

function toggleAccordion(button){
    let content = button.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}

let images = [
    "images/image-2.jpg",
    "images/image-3.jpg",
    "images/image-1.jpg"
]

let currentIndex = 0;

function showImage(){
    document.getElementById("carouselImage").src = images[currentIndex];
}

function nextImage(){
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function previousImage(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

setInterval(nextImage, 3000); // Change image every 3 seconds

document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();  

    //clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    if(name === "") {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    } else if(name.length < 3) {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email === "") {  
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if(!email.match(emailPattern)) {
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(password === "") {  
        document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
    } else if(!password.match(passwordPattern)) {   
        document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
        isValid = false;
    }  
    
    //check if all validations passed
    if(isValid) {
        //submit form or perform desired actions
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset(); //reset form fields
    }

}