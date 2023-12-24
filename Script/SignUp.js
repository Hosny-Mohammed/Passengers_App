const userList = [
    { email: "user1@example.com", password: "password1" },
    { email: "user2@example.com", password: "password2" },
    // Add more users as needed
];

document.getElementById("SignUP_btn").addEventListener("click", function() {
    // Get the values of the email, password, and confirmPassword fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
    }
    
    // Check if the password and confirmPassword match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Check if the email is already in use
    const emailExists = userList.some(user => user.email === email);

    if (emailExists) {
        alert("Email is already in use");
    } else {
        // Add the new user to the list (replace this with your actual sign-up logic)
        userList.push({ email, password });
        alert("Sign Up successful");
        window.location.assign("Users.html")
    }
});

document.getElementById("SignIn_btn").addEventListener("click", function() {
    window.location.assign("index.html")
});