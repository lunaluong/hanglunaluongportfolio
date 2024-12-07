document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.getElementById("contact-link");
    const contactSection = document.getElementById("contact");

    contactLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        contactSection.scrollIntoView({ behavior: "smooth" });

    });
});

// Credit to chatgpt for this function of Contact page
