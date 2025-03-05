/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript running!')
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript er forbundet og DOM'en er indlæst!");

    let sections = document.querySelectorAll(".parallax-section");

    function handleScroll() {
        sections.forEach(section => {
            let rect = section.getBoundingClientRect();
            let isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

            let bg = section.querySelector(".bg");
            let can = section.querySelector("model-viewer");

            if (bg) {
                let parallaxValue = rect.top * 0.3;
                bg.style.transform = `translateY(${parallaxValue}px)`;
            }

            if (can) {
                if (isVisible) {
                    can.style.opacity = "1";
                    can.style.transform = "translateY(0)";
                } else {
                    can.style.opacity = "0";
                    can.style.transform = "translateY(50px)";
                }
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});