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

    /* -------------------------
       4. BIRTHDAY COUNTDOWN
    -------------------------- */

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const celebration = document.getElementById("celebrate");

    if (
        daysElement &&
        hoursElement &&
        minutesElement &&
        secondsElement
    ) {
        /*
         * Birthday date:
         * 10 October
         *
         * The script automatically uses the next
         * 10 October relative to the visitor's date.
         */

        const now = new Date();

        let birthday = new Date(
            now.getFullYear(),
            9,  // October = month 9 because JavaScript starts at 0
            5,
            0,
            0,
            0
        );

        // If this year's birthday has already passed,
        // count down to next year's birthday.
        if (now > birthday) {
            birthday = new Date(
                now.getFullYear() + 1,
                9,
                5,
                0,
                0,
                0
            );
        }

        function updateCountdown() {

            const currentTime = new Date();
            const difference = birthday - currentTime;

            // Birthday has arrived.
            if (difference <= 0) {
                daysElement.textContent = "00";
                hoursElement.textContent = "00";
                minutesElement.textContent = "00";
                secondsElement.textContent = "00";

                if (celebration) {
                    celebration.classList.add("show");
                }

                return;
            }

            const days = Math.floor(
                difference / (1000 * 60 * 60 * 24)
            );

            const hours = Math.floor(
                difference / (1000 * 60 * 60)
            ) % 24;

            const minutes = Math.floor(
                difference / (1000 * 60)
            ) % 60;

            const seconds = Math.floor(
                difference / 1000
            ) % 60;

            daysElement.textContent = String(days).padStart(2, "0");
            hoursElement.textContent = String(hours).padStart(2, "0");
            minutesElement.textContent = String(minutes).padStart(2, "0");
            secondsElement.textContent = String(seconds).padStart(2, "0");
        }

        // Run immediately so the page never waits one second.
        updateCountdown();

        // Update every second.
        setInterval(updateCountdown, 1000);
    }
});
