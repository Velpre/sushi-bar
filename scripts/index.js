// Importerer SushiModule
import SushiModule from "./SushiModule.js"

// Burger meny for mobil versjon
const navbarBurger = document.querySelector('.navbar-burger');
const navbarBurger1 = document.querySelector('#navbarBasicExample');
navbarBurger.addEventListener("click", ()=>{
  navbarBurger.classList.toggle("is-active");
  navbarBurger1.classList.toggle("is-active");
});

// Navbar forsvinner på scroll down og dukker opp på scroll up
let prevPosition = window.pageYOffset;
window.addEventListener("scroll", ()=>{
  let currentPosition = window.pageYOffset;

  if (prevPosition > currentPosition) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-70px";
  }
  prevPosition = currentPosition
});

// HTML objects
const menyList = document.querySelector(".meny-list");
let menyTxt = "";
const menyPic = document.querySelector(".meny-pic");
let menyPicTxt = "";
const header = document.querySelector("header");
const meny = document.querySelector(".meny");

// Printer ut Meny på side en.
SushiModule.getMeny().forEach(meny => {
  menyTxt += `
    <ul>
      <li data-image="./images/food/${meny.image}"> <a>${meny.type}</a> </li>
    </ul>
  `
});
menyList.innerHTML = menyTxt;



// ANIMATIONS

// Hover effekt som viser bilde i meny div-en
document.querySelectorAll(".meny-list li").forEach(li => {
  li.addEventListener("mouseover", (e) => {
    var image = e.currentTarget.dataset.image
    showPicTiming(image);
  });
});

// setTimeout på hvor fort bilde skal vises etter at brukeren hover på li (meny div-en)
function showPicTiming(image) {
  setTimeout(function() {
    menyPicTxt = `
            <img src="${image}"alt="pic">
            `
    menyPic.innerHTML = menyPicTxt;
  }, 350);

};

// Parallax effekt header
window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  header.style.backgroundPositionY = offset * 0.7 + "px";
})


// Animate on scroll for intro og meny pic delen
let aosElements = Array.from(document.querySelectorAll(".aos"));

window.addEventListener("scroll", start(scanElements, 500));
// sjekker hvis elementer er visible og angir riktig classer for meny pic og intro tekst
function scanElements(e) {
  aosElements.forEach(element => {
    if (isVisible(element)) {
      element.classList.add("animation-aos");
    }
  })
}

// sjekker hvis element er visible
function isVisible(element) {
  const elementDiv = element.getBoundingClientRect();
  let distanceFromTop = -300;
  return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
}
// starter funskjson av og til for å senke events som settes i gang

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


//Modal for bestilling av bord

// Toggler is-active class viser og stenger modale
const footerButton= document.querySelector(".footer-button");
const modal = document.querySelector(".modal");
const delete1 = document.querySelector(".delete");
const modalBackground = document.querySelector(".modal-background");


footerButton.addEventListener("click",()=>{
    modal.classList.toggle("is-active");
});

delete1.addEventListener("click", ()=>{
  modal.classList.toggle("is-active");
});


modalBackground.addEventListener("click", (event)=>{
  modal.classList.toggle("is-active");
});


// Viser takkemelding når brukeren har bestilt border

var form = document.getElementById("my-form");
const buttonModal = document.querySelector(".button-modal");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {

    status.innerHTML = "Takk for din bestilling.";
    buttonModal.style.display="none";
    form.reset();
  })
}
form.addEventListener("submit", handleSubmit)
