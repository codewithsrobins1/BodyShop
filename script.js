const navSlide = () => {
  const burger = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');


  burger.addEventListener('click', () =>{
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => { //Selecting the navLink and its index
      if (link.style.animation){
        link.style.animation = ''; //if the links have animation on it, remove the animation
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .7}s` //adding the delay betweens links based on index
      }
    });

    //Burger animation
    burger.classList.toggle('toggle'); //add toggle class for animation
  });


}

navSlide();
