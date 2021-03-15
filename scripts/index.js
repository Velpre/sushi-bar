// Importerer MenyModule
import MenyModule from "./MenyModule.js"

// Burger meny for mobil versjon
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById("navbarBasicExample");
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});


// HTML objects
const menyList = document.querySelector("#meny-list");
let menyTxt = "";
const menyPic = document.querySelector("#meny-pic");
let menyPicTxt = "";
const header = document.querySelector("header");
const meny = document.querySelector(".meny");

// Teller som angir id
let teller = 1;


// Printer ut Meny
MenyModule.getMeny().forEach(meny => {
  menyTxt += `
    <ul>
      <li id="test-id-${teller}" data-image="./images/food/${meny.image}"> <a>${meny.type}</a> </li>
    </ul>
  `
  teller++;
});

menyList.innerHTML = menyTxt;

// Hover effekt som viser bilde
document.querySelectorAll("#meny-list li").forEach(li => {
  li.addEventListener("mouseover", (e) => {
    var image = e.currentTarget.dataset.image
    showPicTiming(image);

  });
});
// setTimeout på hvor fort bilde skal vises etter at brukeren hover på li
function showPicTiming(image) {
  setTimeout(function() {
    console.log(image)
    menyPicTxt = `
            <img src="${image}" width="300" height="500"alt="pic">
            `
    menyPic.innerHTML = menyPicTxt;
  }, 200);

};


// Parallax effekt header
window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  header.style.backgroundPositionY = offset * 0.7 + "px";
})


// Animation starts on wiew point
