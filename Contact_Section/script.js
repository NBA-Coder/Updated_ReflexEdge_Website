
/* =====================================================
   SAFEEDGE APARTMENTS
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", function () {

        mobileNav.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (mobileNav.classList.contains("open")) {

            if (icon) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            }

            menuToggle.setAttribute(
                "aria-label",
                "Close navigation"
            );

        } else {

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );
        }
    });


    /* Close menu when a link is clicked */

    const mobileLinks = mobileNav.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNav.classList.remove("open");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );
        });

    });

}




/* =====================================================
   CLEAR FORM AFTER SUCCESSFUL SUBMISSION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {

        form.addEventListener("submit", function () {

            // Wait for the form submission to complete
            setTimeout(function () {

                // Clear all user-entered fields
                form.querySelectorAll("input, textarea, select").forEach(function (field) {

                    // Don't clear hidden inputs such as Web3Forms access_key
                    if (field.type === "hidden") {
                        return;
                    }

                    if (field.tagName.toLowerCase() === "select") {
                        field.selectedIndex = 0;
                    } else {
                        field.value = "";
                    }

                });

            }, 1500);

        });

    });

});

