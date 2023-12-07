

document.addEventListener("DOMContentLoaded", function() {

  const sections = document.querySelectorAll("section");

  const navLinks = document.querySelectorAll(".navbar1 a");

  // Function to update the active link based on the scroll position
  function updateActiveLink() {
    let currentScroll = window.scrollY;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 50; // Adjusted for better accuracy
      const sectionBottom = sectionTop + section.offsetHeight;

      if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
        navLinks.forEach(link => link.classList.remove("active"));
        navLinks[index].classList.add("active");
      }
    });
  }

  // Attach the scroll event listener
  window.addEventListener("scroll", updateActiveLink);

  // Attach the click event listener to smooth scroll when a navigation link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 48, // Adjusted for better accuracy
        behavior: "smooth"
      });
    });
  });
});



//  


// document.addEventListener("DOMContentLoaded", function() {
//     // Get all elements with the class 'load-animation'
//     const elements = document.querySelectorAll('.load-animation');
  
//     // Function to add the 'animate' class when an element comes into view
//     function animateElements() {
//       elements.forEach(element => {
//         const elementTop = element.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
  
//         if (elementTop < windowHeight) {
//           element.classList.add('animate');
//         }
//       });
//     }
  
//     // Attach the scroll event listener
//     window.addEventListener('scroll', animateElements);
  
//     // Initial animation check
//     animateElements();
//   });
