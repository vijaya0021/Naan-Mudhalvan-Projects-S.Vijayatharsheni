document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Thank you, " + name + "! Your message has been sent.");
            form.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});