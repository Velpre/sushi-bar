// Importerer SushiModule
import SushiModule from "./SushiModule.js"

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
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-200px";
    showNavTiming();
  }
  prevPosition = currentPosition
});

// setTimeout methoden som viser navBar etter en vis antall sekunder. Kalles fra addEventListener over.
function showNavTiming(){
  setTimeout(function(){
    document.querySelector(".navbar").style.top = "0";
  }, 1000)
};


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
      <li data-image="${meny.image}"> <a>${meny.type}</a> </li>
    </ul>
  `
  menyTxtMobil += `
    <ul>
      <li> <a>${meny.type}</a> </li>
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





//Modal for bestilling av bord
// Toggler is-active class viser og stenger modale
const footerButton= document.querySelector(".footer-button");
const modal = document.querySelector(".modal");
const delete1 = document.querySelector(".delete");
const modalBackground = document.querySelector(".modal-background");

footerButton.addEventListener("click",()=>{
    modal.classList.toggle("is-active");
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position="fixed"
    // hindrer at background bak modalen beveger seg

});
delete1.addEventListener("click", ()=>{
  modal.classList.toggle("is-active");
  form.reset();
  status.style.display="none"
  buttonModal.style.visibility="visible";
  // sender brukeren til samme del av siden hvor han var. Brukes på grunn av at vi hadde position fixed over
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
});
modalBackground.addEventListener("click", ()=>{
  modal.classList.toggle("is-active");
  form.reset();
  status.style.display="none"
  buttonModal.style.visibility="visible";
  // sender brukeren til samme del av siden hvor han var. Brukes på grunn av at vi hadde position fixed over
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
});

// Viser takkemelding når brukeren har bestilt border
const form = document.getElementById("my-form");
const buttonModal = document.querySelector(".button-modal");
const status = document.getElementById("my-form-status");
async function handleSubmit(event) {
  event.preventDefault();

  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.style.display="inline-block"
    status.innerHTML = "Du vil mota bekreftelse om kort tid";
    buttonModal.style.visibility="hidden";
    form.reset();
  })
}
form.addEventListener("submit", handleSubmit)

// Slider output for brukeren (antall personer)
const slider = document.getElementById("amountValue");
const output = document.getElementById("amount");

slider.oninput = function() {
  output.innerHTML = this.value;
}


// Endrer melding som kommer på input i tilfelle brukeren har tastet feil
document.addEventListener("DOMContentLoaded", function() {
    const inputTel = document.querySelector(".input-tel");
    const inputMail = document.querySelector(".input-mail");

      // Sjekker om telefonnummer mailadresse og dato er riktig
        inputTel.oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Du må legge inn riktig telefonnummer, 8 siffer");
            }
        };
        inputTel.oninput = function(e) {
            e.target.setCustomValidity("");
        };
      // Sjekker om mail er riktig
        inputMail.oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Du må legge inn riktig mailadresse");
            }
        };
        inputMail.oninput = function(e) {
            e.target.setCustomValidity("");
        };
});

// Setter min value på date attribut
const inputDate = document.querySelector(".input-date");
// regner ut dagens dato
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

document.addEventListener("DOMContentLoaded", function() {
  inputDate.setAttribute("min", today);
});
