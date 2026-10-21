
/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", function () {

        mobileNav.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (mobileNav.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

            menuToggle.setAttribute(
                "aria-label",
                "Close navigation"
            );

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );
        }
    });
}


/* =========================================================
   APARTMENT VIDEO HOVER
========================================================= */

const apartmentVideos = document.querySelectorAll(
    ".full-apartment-image video"
);

apartmentVideos.forEach(video => {

    const container = video.closest(".full-apartment-image");

    if (!container) return;

    container.addEventListener("mouseenter", () => {
        video.play();
    });

    container.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });

});

