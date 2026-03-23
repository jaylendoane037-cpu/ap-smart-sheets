function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if(email === storedEmail && password === storedPassword) {
        alert("Login successful 💖");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password ❌");
    }
}