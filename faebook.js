function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in both email and password fields.");
    } else {
        // You can add more advanced validation or form submission here
        // For now, just show an alert for successful login
        alert("Logged in successfully!");
    }
}