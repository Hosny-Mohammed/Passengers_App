const userList = [
    { username: "user1@example.com", password: "password1" },
    { username: "user2@example.com", password: "password2" },
    // Add more users as needed
];

// Add event listeners for the Sign In and Sign Up buttons
document.getElementById("SignIn_btn").addEventListener("click", function() {
    // Get the values of the username and password fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please fill in all fields");
        return;
    }
    // Check if the user exists in the list
    const userExists = userList.some(user => user.username === username && user.password === password);

    if (userExists) {
        alert("Sign In successful");
        window.location.assign("Select_Disability.html");
        // Add additional logic here for a successful sign-in
    } else {
        alert("Invalid username or password");
        // Add additional logic here for a failed sign-in
    }
});

document.getElementById("SignUp_btn").addEventListener("click", function() {
    window.location.assign("SignUp.html")
});