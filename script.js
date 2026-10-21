/* =====================================================
   SAFEEDGE APARTMENTS
   MAIN JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {

    /* Open / Close Mobile Menu */

    menuToggle.addEventListener("click", (event) => {

        event.stopPropagation();

        mobileNav.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (icon) {

            if (mobileNav.classList.contains("open")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

                menuToggle.setAttribute("aria-expanded", "true");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

                menuToggle.setAttribute("aria-expanded", "false");
            }
        }

    });


    /* ================= MOBILE NAV LINKS ================= */

    const mobileLinks = mobileNav.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", (event) => {

            /*
             * Close the mobile menu.
             *
             * IMPORTANT:
             * We DO NOT use event.preventDefault().
             * The href will automatically take the
             * user to the selected page.
             */

            mobileNav.classList.remove("open");

            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

            menuToggle.setAttribute("aria-expanded", "false");

            /*
             * Allow the browser to follow the href.
             */
        });

    });


    /* ================= CLOSE WHEN CLICKING OUTSIDE ================= */

    document.addEventListener("click", (event) => {

        if (
            mobileNav.classList.contains("open") &&
            !mobileNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            mobileNav.classList.remove("open");

            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

}


/* ================= HEADER ON SCROLL ================= */

const siteHeader = document.getElementById("siteHeader");

if (siteHeader) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            siteHeader.classList.add("scrolled");

        } else {

            siteHeader.classList.remove("scrolled");

        }

    });

}


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

}


/* ================= CURRENT YEAR ================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* ================= HERO VIDEO ================= */

const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {

    heroVideo.addEventListener("error", () => {

        console.log("Hero video could not be loaded.");

    });

}


/* ================= APARTMENT IMAGE PREVIEW ================= */

const viewButtons = document.querySelectorAll(".image-view-btn");

viewButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".apartment-card");

        if (!card) return;

        const image = card.querySelector(".apartment-image img");

        if (image) {

            window.open(image.src, "_blank");

        }

    });

});


/* ================= SMOOTH INTERNAL LINKS ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


