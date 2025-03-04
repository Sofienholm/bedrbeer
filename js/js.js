document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript er forbundet og DOM'en er indlæst!");

    let sections = document.querySelectorAll(".snap-section");
    let isScrolling = false;
    let firstScroll = false; // Sørger for, at første scroll går til sektion 1
    let currentSectionIndex = -1; // Starter før første sektion

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

    // **Tilføj animation af 3D-dåsen**
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            let can = entry.target.querySelector("model-viewer");
    
            if (!can) {
                console.log("Ingen model-viewer fundet i:", entry.target);
                return; // Hvis ingen model findes, gå videre
            }
    
            if (entry.isIntersecting) {
                console.log("Model er synlig:", entry.target);
                can.style.opacity = "1";
                can.style.transform = "translateY(0px) rotate(360deg)";
            } else {
                console.log("Model er skjult:", entry.target);
                can.style.opacity = "0";
                can.style.transform = "translateY(-100px) rotate(0deg)";
            }
        });
    }, { threshold: 0.6 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    

    // **Starter siden "før" første sektion**
    window.scrollTo(0, 0); // Sørger for at brugeren starter i toppen af siden
});
