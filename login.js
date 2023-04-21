function login() {
  // Get username and password from form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if username and password are correct
  if (username === "user" && password === "password") {
    // If correct, store login status in local storage
    localStorage.setItem("isLoggedIn", true);
    // Redirect to home page
    window.location.href = "home.html";
  } else {
    // If incorrect, show error message
    document.getElementById("error").style.display = "block";
  }
}

// Check if user is already logged in
if (localStorage.getItem("isLoggedIn")) {
  // Redirect to home page
  window.location.href = "home.html";
}