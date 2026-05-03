
var validUser = "admin";
var validPass = "admin";

var attempts = 0;
var maxAttempts = 3;

function loginUser() {
 
  if (attempts >= maxAttempts) {
    window.alert("Account locked. Too many failed attempts.");
    return;
  }
  
  var inputUser = document.getElementById("username").value;
  var inputPass = document.getElementById("password").value;
  

 
  if (inputUser === validUser && inputPass === validPass) {
    
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("currentUser", inputUser);

    
    window.location.href = "notebooks.html";
  } else {
    
    window.alert("Login failed. Attempts left: " + (maxAttempts - attempts - 1));
    attempts++;
  }
}


function cancelLogin() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}


function checkSession() {
  var isLoggedIn = sessionStorage.getItem("loggedIn");
  if (isLoggedIn !== "true") {
    window.alert("Please log in first.");
    window.location.href = "index.html";
  }
}


function logoutUser() {
  
  var confirm = window.confirm("Are you sure you want to log out?");
  if (confirm) {
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("currentUser");
    window.location.href = "index.html";
  }
}

function takeTask(taskName) {
  window.alert("Task is not available to take yet.");
}


function previewPhoto() {

  var fileInput = document.getElementById("photoInput");
  var file = fileInput.files[0];


  if (file) {
    var reader = new FileReader();

    reader.onload = function (e) {
  
      document.getElementById("avatarImg").src = e.target.result;
    };

    reader.readAsDataURL(file);
  } else {
    window.alert("No file selected. Please choose a photo.");
  }
}

function triggerFileInput() {
  document.getElementById("photoInput").click();
}


function changePassword() {
  var newPass = window.prompt("Enter your new password:");

  while (newPass !== null && newPass.trim() === "") {
    window.alert("Password cannot be empty.");
    newPass = window.prompt("Enter your new password:");
  }

  if (newPass !== null) {
    validPass = newPass;
    window.alert("Password changed successfully!");
  }
}
