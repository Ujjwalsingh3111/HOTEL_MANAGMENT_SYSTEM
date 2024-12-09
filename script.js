// Validate Login Form
function validateLoginForm(event) {
    event.preventDefault();
    
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    
    // Basic Validation
    if (!email || !password) {
        alert("Please fill in both email and password.");
        return false;
    }

    // Dummy login validation (You can replace this with actual API validation)
    alert("Login successful!");
    return true;
}

// Validate Sign Up Form
function validateSignupForm(event) {
    event.preventDefault();
    
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Basic Validation
    if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Dummy sign up validation (You can replace this with actual API validation)
    alert("Sign Up successful!");
    return true;
}

// Change Profile Picture
function changeProfilePic(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        var profilePic = document.getElementById('profilePic');
        profilePic.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}