import NavModule from './NavModule.js'

const navbar = document.querySelector("#navbar");

let navSectionTxt="";
let tellerId = 1;

// Printer ut items

NavModule.getNav().forEach(nav =>{
  navSectionTxt += `
      <a id="navbar-item-${tellerId}" class="navbar-item button is-light is-size-5 " href="${nav.link}">${nav.text}</a>
  `
  tellerId++;
});

navbar.innerHTML=navSectionTxt;

// Burger meny for mobil versjon

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById("navMenu");

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
