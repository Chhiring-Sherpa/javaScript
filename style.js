document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the login form
    document.querySelector(".login form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get email input value
        const emailInput = document.getElementById("EmailAddress");
        const email = emailInput.value.trim();
        
        // Display login success message
        alert("Login successful! You are logged in with the email: " + email);
    });
});
