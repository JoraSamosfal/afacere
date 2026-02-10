// Include EmailJS library
// Make sure to include the EmailJS SDK in your HTML file:
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("JnoJU8VlnhCR8fcld"); // Replace with your EmailJS public key

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
        };

        emailjs.send("service_dxlai5b", "template_prfcszc", data)
            .then(function (response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Email trimis cu succes!");
            })
            .catch(function (error) {
                console.error("FAILED...", error);
                alert("A apărut o eroare. Te rugăm să încerci din nou.");
            });
    });
});