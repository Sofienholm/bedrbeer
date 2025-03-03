
document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.querySelector(".search-box");
    const searchToggle = document.querySelector(".search-toggle");
    const searchInput = document.querySelector(".search-input");
  
    searchToggle.addEventListener("click", function(event) {
      event.preventDefault();
      searchBox.classList.toggle("active");
      
      if (searchBox.classList.contains("active")) {
        searchInput.focus();
      }
    });
  
    // Luk søgefeltet, hvis man klikker udenfor
    document.addEventListener("click", function(event) {
      if (!searchBox.contains(event.target)) {
        searchBox.classList.remove("active");
      }
    });
  });
  
  