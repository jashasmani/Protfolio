var typed=new typed(".text",{
    Strings:["C","C++","JAVA","JAVA ADVANCE"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const refreshMessage = document.getElementById('work');

  // Event listener for scroll events
  window.addEventListener('scroll', function () {
    // Show the refresh message when scrolling
    refreshMessage.style.display = 'block';

    // Check if the user has scrolled to the top or bottom of the page
    if (window.scrollY === 0 || window.scrollY + window.innerHeight === document.body.scrollHeight) {
      // If at the top or bottom, refresh the page after a delay
      setTimeout(function () {
        location.reload();
      }, 1000); // Adjust the delay based on your preferences
    }
  });

