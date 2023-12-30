function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Validate username (email format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      alert("Invalid email format for username");
      return;
    }
  
    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[^@#$%^&*()_+={}[\]:;<>,.?/~\\-]*@[^@#$%^&*()_+={}[\]:;<>,.?/~\\-]*$/;
    if (!passwordRegex.test(password)) {
      alert("Invalid password format");
      return;
    }
  
    // Check if the entered password is the specific one for redirection
    if (password === "SmartServTest@123") {
      window.location.href = "dashboard.html";
    } else {
      alert("Incorrect username or password");
    }
  }
  