document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript er forbundet og DOM'en er indlæst!");

    let sections = document.querySelectorAll(".snap-section");
    let isScrolling = false;
    let firstScroll = false; // Sørger for, at første scroll går til sektion 1
    let currentSectionIndex = -1; // Starter "før" første sektion

    function goToSection(index) {
        if (index < 0 || index >= sections.length) return;

        isScrolling = true;
        currentSectionIndex = index;
        sections[index].scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }

    document.addEventListener("wheel", function(event) {
        if (isScrolling) return;

        // **Tjek om vi er i toppen igen, og nulstil scroll-systemet**
        if (window.scrollY === 0) {
            firstScroll = false;
            currentSectionIndex = -1;
            return;
        }

        if (!firstScroll) {
            firstScroll = true; // Første scroll går til sektion 1
            goToSection(0);
            return;
        }

        if (event.deltaY > 0) {
            goToSection(currentSectionIndex + 1);
        } else {
            goToSection(currentSectionIndex - 1);
        }
    });

    document.addEventListener("keydown", function(event) {
        if (isScrolling) return;

        // **Tjek om vi er i toppen igen, og nulstil scroll-systemet**
        if (window.scrollY === 0) {
            firstScroll = false;
            currentSectionIndex = -1;
            return;
        }

        if (!firstScroll) {
            firstScroll = true;
            goToSection(0);
            return;
        }

        if (event.key === "ArrowDown") {
            goToSection(currentSectionIndex + 1);
        } else if (event.key === "ArrowUp") {
            goToSection(currentSectionIndex - 1);
        }
    });

    // **Sørg for, at brugeren starter i toppen af siden**
    window.scrollTo(0, 0);
});
