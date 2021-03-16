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

let teller=1;

// Printer ut Meny
MenyModule.getMeny().forEach(meny => {
  menyTxt += `
    <ul>
      <li class="meny-a" data-image="./images/food/${meny.image}"> <a id="teller-${teller}">${meny.type}</a> </li>
    </ul>
  `
  teller++
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
    menyPicTxt = `
            <img src="${image}" width="400" height="600" alt="pic">
            `
    menyPic.innerHTML = menyPicTxt;
  }, 350);

};

// Parallax effekt header
window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  header.style.backgroundPositionY = offset * 0.7 + "px";
})





// Animate on scroll for intro og meny pic delen
let aosElements = Array.from(document.querySelectorAll(".aos"));
let aosElements1 = Array.from(document.querySelectorAll(".aos1"));

window.addEventListener("scroll", start(scanElements, 500));
window.addEventListener("scroll", start(scanElements1, 500));
// sjekker hvis elementer er visible og angir riktig classer for meny pic og intro tekst
function scanElements(e){
  aosElements.forEach(element => {
    if(isVisible(element)){
      element.classList.add("animation-intro");
    }
  })
}

function scanElements1(e){
  aosElements1.forEach(element => {
    if(isVisible(element)){
      element.classList.add("meny-pic");
    }
  })
}

// sjekker hvis element er visible
function isVisible(element){
  const elementDiv = element.getBoundingClientRect();
  let distanceFromTop = -300;
  return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
}
// starter funskjson av og til for å senke events som settes i gang

function start(fn, delay){
  let lastCall = 0;
  return (...args)=>{
    let context = this;
    let current = new Date().getTime();

    if(current - lastCall < delay){
      return
    }
    lastCall = current;
    return fn.apply(context, ...args);
  }
}
