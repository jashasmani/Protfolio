var typed=new typed(".text",{
    Strings:["C","C++","JAVA","JAVA ADVANCE"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('showText');
    }
      else{
        entry.target.classList.remove('showText');
      }

    });
  });

const he=document.querySelectorAll('.s');
he.forEach((el) => observer.observe(el));