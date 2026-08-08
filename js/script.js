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


/* =========================================================
   WHATSAPP CONTACT FORM
   ========================================================= */

const contactForm = document.querySelector("#contact-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const whatsappInput = document.querySelector("#whatsapp");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const whatsappError = document.querySelector("#whatsapp-error");
const messageError = document.querySelector("#message-error");

const messageCount = document.querySelector("#message-count");

const submitButton = document.querySelector("#contact-submit");
const formSuccess = document.querySelector("#form-success");


/* Your WhatsApp number */

const whatsappNumber = "918814867940";


/* =========================================================
   MESSAGE CHARACTER COUNTER
   ========================================================= */

if (messageInput && messageCount) {

    messageInput.addEventListener("input", function () {

        const currentLength = messageInput.value.length;

        messageCount.textContent =
            `${currentLength} / 500`;

        if (currentLength >= 450) {

            messageCount.style.color = "#e65100";

        } else {

            messageCount.style.color = "";
        }

    });

}


/* =========================================================
   EMAIL VALIDATION
   ========================================================= */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}


/* =========================================================
   CLEAR ERRORS
   ========================================================= */

function clearFormErrors() {

    nameError.textContent = "";
    emailError.textContent = "";
    whatsappError.textContent = "";
    messageError.textContent = "";

    nameError.classList.remove("form-error");
    emailError.classList.remove("form-error");
    whatsappError.classList.remove("form-error");
    messageError.classList.remove("form-error");

    formSuccess.textContent = "";
    formSuccess.classList.remove("show");
}


/* =========================================================
   FORM SUBMIT
   ========================================================= */

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    clearFormErrors();

    let isValid = true;


    /* ---------- NAME ---------- */

    const name = nameInput.value.trim();

    if (name === "") {

        nameError.textContent =
            "Please enter your name.";

        nameError.classList.add("form-error");

        isValid = false;

    } else if (name.length < 2) {

        nameError.textContent =
            "Name must contain at least 2 characters.";

        nameError.classList.add("form-error");

        isValid = false;
    }


    /* ---------- EMAIL ---------- */

    const email = emailInput.value.trim();

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        emailError.classList.add("form-error");

        isValid = false;

    } else if (!isValidEmail(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        emailError.classList.add("form-error");

        isValid = false;
    }


    /* ---------- CUSTOMER WHATSAPP ---------- */

    const customerWhatsapp =
        whatsappInput.value
            .trim()
            .replace(/\D/g, "");

    if (customerWhatsapp === "") {

        whatsappError.textContent =
            "Please enter your WhatsApp number.";

        whatsappError.classList.add("form-error");

        isValid = false;

    } else if (customerWhatsapp.length !== 10) {

        whatsappError.textContent =
            "Please enter a valid 10-digit WhatsApp number.";

        whatsappError.classList.add("form-error");

        isValid = false;
    }


    /* ---------- MESSAGE ---------- */

    const message = messageInput.value.trim();

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        messageError.classList.add("form-error");

        isValid = false;

    } else if (message.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        messageError.classList.add("form-error");

        isValid = false;
    }


    /* ---------- STOP IF INVALID ---------- */

    if (!isValid) {
        return;
    }


    /* =====================================================
       LOADING
       ===================================================== */

    submitButton.disabled = true;

    submitButton.classList.add("loading");


    /* =====================================================
       CUSTOMER WHATSAPP LINK
       ===================================================== */

    const customerWhatsappLink =
        `https://wa.me/91${customerWhatsapp}`;


    /* =====================================================
       MESSAGE TO YOUR WHATSAPP
       ===================================================== */

    const whatsappMessage =
`Hello Sunil,

I want to contact you through your portfolio.

👤 CUSTOMER DETAILS
-------------------------

Name: ${name}

Email: ${email}

WhatsApp: +91 ${customerWhatsapp}

📱 Direct WhatsApp:
${customerWhatsappLink}

💬 MESSAGE
-------------------------

${message}

-------------------------
Sent from Sunil Portfolio`;


    /* =====================================================
       YOUR WHATSAPP URL
       ===================================================== */

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`;


    /* =====================================================
       OPEN YOUR WHATSAPP
       ===================================================== */

    setTimeout(function () {

        submitButton.disabled = false;

        submitButton.classList.remove("loading");


        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );


        /* ---------- SUCCESS ---------- */

        formSuccess.textContent =
            "✅ WhatsApp is opening with the customer details.";

        formSuccess.classList.add("show");


        /* ---------- RESET ---------- */

        contactForm.reset();

        messageCount.textContent = "0 / 500";

        messageCount.style.color = "";


        /* ---------- HIDE SUCCESS ---------- */

        setTimeout(function () {

            formSuccess.classList.remove("show");

        }, 5000);

    }, 700);

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