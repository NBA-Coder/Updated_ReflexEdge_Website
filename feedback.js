document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("feedbackForm");

    const stars = document.querySelectorAll(".stars button");

    const ratingInput = document.getElementById("rating");

    const ratingText = document.getElementById("ratingText");

    const submitButton = document.getElementById("submitButton");

    const buttonText = document.getElementById("buttonText");

    const formError = document.getElementById("formError");

    const successMessage = document.getElementById("successMessage");


    let selectedRating = 0;


    /* ==========================
       STAR RATING
    ========================== */

    const ratingLabels = {
        1: "1 / 5 — Very Poor",
        2: "2 / 5 — Poor",
        3: "3 / 5 — Average",
        4: "4 / 5 — Good",
        5: "5 / 5 — Excellent"
    };


    stars.forEach(star => {

        star.addEventListener("mouseenter", () => {

            highlightStars(
                Number(star.dataset.rating)
            );

        });


        star.addEventListener("mouseleave", () => {

            highlightStars(selectedRating);

        });


        star.addEventListener("click", () => {

            selectedRating =
                Number(star.dataset.rating);

            ratingInput.value = selectedRating;

            highlightStars(selectedRating);

            ratingText.textContent =
                ratingLabels[selectedRating];

            ratingText.classList.add("selected");

        });

    });


    function highlightStars(rating) {

        stars.forEach(star => {

            const current =
                Number(star.dataset.rating);

            star.classList.toggle(
                "active",
                current <= rating
            );

        });

    }


    /* ==========================
       FORM SUBMISSION
    ========================== */

    form.addEventListener("submit", async event => {

        event.preventDefault();


        clearError();


        /* Check overall rating */

        if (!ratingInput.value) {

            showError(
                "Please select your overall rating."
            );

            document
                .querySelector(".rating-box")
                .scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            return;
        }


        /* Check browser validation */

        if (!form.checkValidity()) {

            form.reportValidity();

            return;
        }


        /* Loading */

        submitButton.disabled = true;

        submitButton.classList.add("loading");

        buttonText.textContent =
            "Submitting Feedback...";


        try {

            const formData =
                new FormData(form);


            const response =
                await fetch(
                    "https://api.web3forms.com/submit",
                    {
                        method: "POST",
                        body: formData
                    }
                );


            const result =
                await response.json();


            if (!result.success) {

                throw new Error(
                    result.message ||
                    "Unable to submit feedback."
                );

            }


            /* Success */

            form.style.display = "none";

            successMessage.classList.add("show");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


        } catch (error) {

            console.error(error);

            showError(
                "We couldn't submit your feedback right now. Please try again."
            );

        } finally {

            submitButton.disabled = false;

            submitButton.classList.remove("loading");

            buttonText.textContent =
                "Submit Feedback";

        }

    });


    /* ==========================
       ERROR
    ========================== */

    function showError(message) {

        formError.textContent = message;

        formError.classList.add("show");

        formError.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }


    function clearError() {

        formError.textContent = "";

        formError.classList.remove("show");

    }

});