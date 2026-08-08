/* =========================
   Typing Effect
========================= */

const typingText = document.querySelector("#typing-text");

const words = [
    "I'm a Web Developer",
    "I'm a Frontend Developer",
    "I build websites",
    "I'm learning JavaScript"
];

let wordIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent =
        currentWord.substring(0, characterIndex);

    if (!isDeleting && characterIndex === currentWord.length) {

        isDeleting = true;

        setTimeout(typeEffect, 1500);

        return;
    }

    if (isDeleting && characterIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }
    }

    const speed = isDeleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =========================
   Dark / Light Mode
========================= */

const themeToggle = document.querySelector("#theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️ Light Mode";

} else {

    themeToggle.textContent = "🌙 Dark Mode";
}


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️ Light Mode";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");
    }

});


/* =========================
   Mobile Menu
========================= */

const menuToggle = document.querySelector("#menu-toggle");

const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* =========================
   Skills Animation
========================= */

const skillsSection = document.querySelector("#skills");

const skillProgress =
    document.querySelectorAll(".skill-progress");


window.addEventListener("scroll", function () {

    const sectionPosition =
        skillsSection.getBoundingClientRect().top;

    const screenPosition =
        window.innerHeight;


    if (sectionPosition < screenPosition - 100) {

        skillProgress.forEach(function (skill) {

            const targetWidth =
                skill.dataset.width;

            skill.style.width = targetWidth;

        });

    }

});


/* =========================
   Contact Form Validation
========================= */

const contactForm =
    document.querySelector("#contact-form");

const nameInput =
    document.querySelector("#name");

const emailInput =
    document.querySelector("#email");

const messageInput =
    document.querySelector("#message");


const nameError =
    document.querySelector("#name-error");

const emailError =
    document.querySelector("#email-error");

const messageError =
    document.querySelector("#message-error");


const formSuccess =
    document.querySelector("#form-success");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    /* Clear old messages */

    nameError.textContent = "";

    emailError.textContent = "";

    messageError.textContent = "";

    formSuccess.textContent = "";


    let isValid = true;


    /* Remove previous error classes */

    nameError.classList.remove("form-error");

    emailError.classList.remove("form-error");

    messageError.classList.remove("form-error");


    /* Name validation */

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Please enter your name";

        nameError.classList.add("form-error");

        isValid = false;
    }


    /* Email validation */

    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email";

        emailError.classList.add("form-error");

        isValid = false;

    } else if (!emailInput.value.includes("@")) {

        emailError.textContent =
            "Please enter a valid email";

        emailError.classList.add("form-error");

        isValid = false;
    }


    /* Message validation */

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Please enter your message";

        messageError.classList.add("form-error");

        isValid = false;
    }


    /* Success */

    if (isValid) {

        formSuccess.textContent =
            "Message validated successfully!";

        formSuccess.style.color = "green";

        contactForm.reset();
    }

});


/* =========================
   Scroll To Top
========================= */

const scrollTopButton =
    document.querySelector("#scroll-top");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");
    }

});


scrollTopButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   Active Navbar Link
========================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav ul li a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            currentSection =
                section.getAttribute("id");
        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");
        }

    });

});


/* =========================
   Mobile Menu Auto Close
========================= */

const mobileNavLinks =
    document.querySelectorAll("nav ul li a");


mobileNavLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =========================
   Current Year
========================= */

const currentYear =
    document.querySelector("#current-year");

currentYear.textContent =
    new Date().getFullYear();