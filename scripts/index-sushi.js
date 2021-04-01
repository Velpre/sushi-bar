// Importerer SushiModule
import SushiModule from "../modules/SushiModule.js"




// Nav
const navbarBurger = document.querySelector('.navbar-burger');
const navbarBurger1 = document.querySelector('#navbarBasicExample');

// Burger meny for mobil versjon
navbarBurger.addEventListener("click", ()=>{
  navbarBurger.classList.toggle("is-active");
  navbarBurger1.classList.toggle("is-active");
});
// Navbar forsvinner på scroll down og dukker opp på scroll up
let prevPosition = window.pageYOffset;
window.addEventListener("scroll", ()=>{
  let currentPosition = window.pageYOffset;
  if (prevPosition > currentPosition) {
    document.querySelector(".navbar").style.cssText = "top: 0; transition: 0.5s";
  } else {
    document.querySelector(".navbar").style.cssText = "top: -300px; transition: 0.5s";
    navbarBurger.classList.remove("is-active");
    navbarBurger1.classList.remove("is-active");
    showNavTiming();
  }
  prevPosition = currentPosition
});
// setTimeout methoden som viser navBar etter en vis antall sekunder. Kalles fra addEventListener over.
function showNavTiming(){
  setTimeout(()=>{
    document.querySelector(".navbar").style.cssText = "top: 0; transition: 0.5s";
  }, 1000)
};

// Parallax effekt header
window.addEventListener("scroll", ()=> {
  let offset = window.pageYOffset;
  header.style.backgroundPositionY = offset * 0.7 + "px";
});

// Meny og header
const menyList = document.querySelector(".meny-list");
let menyTxt = "";
const menyListMobil = document.querySelector(".meny-list-mobil");
let menyTxtMobil = "";
const menyPic = document.querySelector(".meny-pic");
let menyPicTxt = "";
const header = document.querySelector("header");

// Printer ut Meny(li) på side en-desktop.
SushiModule.getMeny().forEach(meny => {
  menyTxt += `
    <ul>
      <li data-image="${meny.image}"> <a href="./html/meny.html${meny.href}">${meny.type}</a> </li>
    </ul>
  `
  menyTxtMobil += `
    <ul>
      <li> <a href="./html/meny.html${meny.href}">${meny.type}</a> </li>
    </ul>
  `
});
menyList.innerHTML = menyTxt;
menyListMobil.innerHTML = menyTxtMobil;

// Hover effekt som viser bilde i meny div-en
document.querySelectorAll(".meny-list li").forEach(li => {
  li.addEventListener("mouseover", (e) => {
    let image = e.currentTarget.dataset.image
    showPicTiming(image);
  });
});
// setTimeout på hvor fort bilde skal vises etter at brukeren hover på li (meny div-en)
function showPicTiming(image) {
  setTimeout(function() {
    menyPicTxt = `
            <img src="./images/food/${image}"alt="pic">
            `
    menyPic.innerHTML = menyPicTxt;
  }, 250);

};

// Animate on scroll for intro og meny pic delen
let aosElements = Array.from(document.querySelectorAll(".aos"));
let aos1Elements = Array.from(document.querySelectorAll(".aos1"));
window.addEventListener("scroll", start(scanElements, 700));
// sjekker hvis elementer er visible og angir riktig classer for meny pic og intro tekst
function scanElements(e) {
  aosElements.forEach(element => {
    if (isVisible(element)) {
      element.classList.add("animation-aos");
    }
  })
  aos1Elements.forEach(element => {
    if (isVisible(element)) {
      element.classList.add("animation-aos1");
    }
  })
}
// Sjekker hvis element er visible
function isVisible(element) {
  const elementDiv = element.getBoundingClientRect();
  let distanceFromTop = -250;
  return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
}
// Starter funskjson av og til for å senke events som settes i gang
function start(fn, delay) {
  let lastCall = 0;
  return (...args) => {
    let context = this;
    let current = new Date().getTime();

    if (current - lastCall < delay) {
      return
    }
    lastCall = current;
    return fn.apply(context, ...args);
  }
}
