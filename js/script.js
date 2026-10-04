/* =========================================================
   SIBONGILE SANDY MAHLANGU — WEBSITE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------
       1. MOBILE MENU
    -------------------------- */

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-nav");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("open");

            menuButton.classList.toggle("open", isOpen);
            menuButton.setAttribute("aria-expanded", isOpen);
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );
        });

        navigation.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navigation.classList.remove("open");
                menuButton.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Open navigation");
            });
        });
    }

    /* -------------------------
       2. SCROLL REVEAL
    -------------------------- */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        currentObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.10
            }
        );

        revealElements.forEach((element) => {
            observer.observe(element);
        });
    } else {
        revealElements.forEach((element) => {
            element.classList.add("visible");
        });
    }

    /* -------------------------
       3. FLOATING PARTICLES
       Only used on the countdown page.
    -------------------------- */

    const particleContainer = document.getElementById("particles");

    if (particleContainer) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement("i");

            particle.className = "particle";
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 8}s`;
            particle.style.animationDuration = `${6 + Math.random() * 6}s`;

            particleContainer.appendChild(particle);
        }
    }

document.addEventListener("DOMContentLoaded", function () {

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    const countdown = document.getElementById("countdown");
    const birthdayMessage = document.getElementById("birthdayMessage");


    /*
    ==========================================
    BIRTHDAY DATE
    ==========================================

    The birthday is TODAY.

    00:00:00 means midnight.

    South Africa = UTC+02:00
    */

    const birthdayDate =
        new Date("2026-10-05T00:00:00+02:00").getTime();


    let countdownTimer;


    function updateCountdown() {

        const now = new Date().getTime();

        const difference = birthdayDate - now;


        /*
        ==========================================
        COUNTDOWN HAS REACHED ZERO
        ==========================================
        */

        if (difference <= 0) {

            // Set everything to ZERO
            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";


            // STOP THE COUNTDOWN
            clearInterval(countdownTimer);


            // Show birthday message IMMEDIATELY
            birthdayMessage.classList.add("show");


            return;
        }


        /*
        ==========================================
        CALCULATE REMAINING TIME
        ==========================================
        */

        const remainingDays =
            Math.floor(
                difference / (1000 * 60 * 60 * 24)
            );


        const remainingHours =
            Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            );


        const remainingMinutes =
            Math.floor(
                (difference / (1000 * 60)) % 60
            );


        const remainingSeconds =
            Math.floor(
                (difference / 1000) % 60
            );


        /*
        ==========================================
        DISPLAY TIME
        ==========================================
        */

        days.textContent =
            String(remainingDays).padStart(2, "0");

        hours.textContent =
            String(remainingHours).padStart(2, "0");

        minutes.textContent =
            String(remainingMinutes).padStart(2, "0");

        seconds.textContent =
            String(remainingSeconds).padStart(2, "0");
    }


    /*
    ==========================================
    RUN COUNTDOWN
    ==========================================
    */

    updateCountdown();

    countdownTimer = setInterval(
        updateCountdown,
        1000
    );

});


