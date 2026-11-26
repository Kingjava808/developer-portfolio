console.log("Devportfolio.js is connected!");

// MOBILE NAVIGATION
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
        const isOpening = mobileMenu.classList.contains("hidden");

        mobileMenu.classList.toggle("hidden");

        menuBtn.setAttribute("aria-expanded", String(isOpening));
        menuBtn.setAttribute(
            "aria-label",
            isOpening ? "Close navigation menu" : "Open navigation menu"
        );

        menuBtn.textContent = isOpening ? "✕" : "☰";
    });

    // Close the menu after a navigation link is selected
    const mobileLinks = mobileMenu.querySelectorAll('a[href^="#"]');

    mobileLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            mobileMenu.classList.add("hidden");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");
            menuBtn.textContent = "☰";
        });
    });

    // Close the mobile menu when returning to desktop width
    window.addEventListener("resize", function () {
        if (window.innerWidth >= 1024) {
            mobileMenu.classList.add("hidden");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");
            menuBtn.textContent = "☰";
        }
    });
}

// AUTOMATIC FOOTER YEAR
const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("contact-name");
        const email = document.getElementById("contact-email");
        const subject = document.getElementById("contact-subject");
        const message = document.getElementById("contact-message");

        if (!name || !email || !subject || !message) {
            formMessage.textContent =
                "Something went wrong with the form. Please try again.";
            formMessage.style.color = "#fca5a5";
            return;
        }

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            subject.value.trim() === "" ||
            message.value.trim() === ""
        ) {
            formMessage.textContent = "Please complete every field.";
            formMessage.style.color = "#fca5a5";
            return;
        }

        if (!email.validity.valid) {
            formMessage.textContent =
                "Please enter a valid email address.";
            formMessage.style.color = "#fca5a5";
            return;
        }

        formMessage.textContent =
            "Your details look good, but email delivery is not connected yet. Please use the email address shown on this page.";
        formMessage.style.color = "#b7f36b";
    });
}
