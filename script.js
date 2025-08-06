// Function to handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation
    if (name && email && message) {
        document.getElementById("form-message").textContent = "Thank you for your message! We will get back to you soon.";
        document.getElementById("form-message").style.color = "green";
    } else {
        document.getElementById("form-message").textContent = "Please fill out all fields.";
        document.getElementById("form-message").style.color = "red";
    }

    // Clear the form fields after submission
    document.getElementById("contact-form").reset();
});
