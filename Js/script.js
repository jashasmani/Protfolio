
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












// const darkMode = () => {

//   let light = document.getElementById("home");
//   let navbar = document.getElementById("head");
//   let path = document.getElementById("path");

//   document.body.style.background = "#0b111e";
//   document.body.style.color = "white";
//   light.style.background = "#0b111e";
//   navbar.style.background = "#0b111e";
//   path.style.background = "#0b111e";
// }


// const lightMode = () => {

//   let light = document.getElementById("home");
//   let navbar = document.getElementById("head");
//   let path = document.getElementById("path");
  
//   document.body.style.background = "#f4f4f4";
//   document.body.style.color = "black";
//   light.style.background = "#f4f4f4";
//   navbar.style.background = "#f4f4f4";
//   path.style.fill="#f4f4f4";
// }

// const onFunction = () => {


//   let b = document.getElementById("darklight");
//   let bn = b.innerHTML;
//   console.log(bn);

//   if (bn == "dark" ) {
//       darkMode();
//       b.innerHTML = "light";
//     }
//   else {
//       lightMode();
//       b.innerHTML = "dark";
//   }
// }


// function onFunction() {
//   var element = document.body;
//   element.classList.toggle("light");
// }