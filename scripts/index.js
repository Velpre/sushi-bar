// Importerer SushiModule
import SushiModule from "./SushiModule.js"

// Burger meny for mobil versjon
const navbarBurger = document.querySelector('.navbar-burger');
const navbarBurger1 = document.querySelector('#navbarBasicExample');
navbarBurger.addEventListener("click", ()=>{
  navbarBurger.classList.toggle("is-active");
  navbarBurger1.classList.toggle("is-active");
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



//Modal for bestilling av bord

// Toggler is-active class og viser og stenger modale
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




/*
// DAto

// Initialize all input of type date
var calendars = bulmaCalendar.attach('[type="date"]', options);

// Loop on each calendar initialized
for(var i = 0; i < calendars.length; i++) {
	// Add listener to select event
	calendars[i].on('select', date => {
		console.log(date);
	});
}

// To access to bulmaCalendar instance of an element
var element = document.querySelector('#my-element');
if (element) {
	// bulmaCalendar instance is available as element.bulmaCalendar
	element.bulmaCalendar.on('select', function(datepicker) {
		console.log(datepicker.data.value());
	});
}

*/

/*
<div class="field">
  <label class="label">Dato</label>
  <div class="control">
    <input type="date">
    <input type="time">
  </div>
</div>

*/





// ANIMATIONS

// Hover effekt som viser bilde
document.querySelectorAll(".meny-list li").forEach(li => {
  li.addEventListener("mouseover", (e) => {
    var image = e.currentTarget.dataset.image
    showPicTiming(image);
  });
});

// setTimeout på hvor fort bilde skal vises etter at brukeren hover på li
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
