document.addEventListener("DOMContentLoaded", function() {
     // Get all the navigation links
     const navLinks = document.querySelectorAll(".navbar1 a");

     // Function to update the active link based on scroll position
     function updateActiveLink() {
         const sections = document.querySelectorAll("section");
         let currentSectionId = "";

         sections.forEach(section => {
             const rect = section.getBoundingClientRect();
             if (rect.top <= 50 && rect.bottom >= 50) {
                 currentSectionId = section.id;
             }
         });

         // Remove the "active" class from all links
         navLinks.forEach(link => {
             link.classList.remove("active");
         });

         // Add the "active" class to the link corresponding to the current section
         const activeLink = document.querySelector(.navbar1 a[href="#${currentSectionId}"]);
         if (activeLink) {
             activeLink.classList.add("active");
         }
     }

     // Attach the updateActiveLink function to the scroll event
     window.addEventListener("scroll", updateActiveLink);

     // Call the updateActiveLink function once to set the initial state
     updateActiveLink();
 });