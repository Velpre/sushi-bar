import MenyModule from"../modules/MenyModule.js";

// Printer ut lunchArray
const lunch = document.querySelector(".lunch");
let lunchTxt = "";
MenyModule.getLunch().forEach(lunch =>{
  lunchTxt +=`
  <div class="lunch-box">
    <h4>${lunch.navn}</h4>
    <p class="rett-beskrivelse">${lunch.beskrivelse}</p>
    <p class="alergier">${lunch.alergi}</p>
    <p class="pris">${lunch.pris}</p>
  </div>
  `
});
lunch.innerHTML = lunchTxt;

// Printer ut dinnerArray
const dinner = document.querySelector(".dinner");
let dinnerTxt = "";
MenyModule.getDinner().forEach(dinner =>{
  dinnerTxt +=`
  <div class="dinner-box">
    <h4>${dinner.navn}</h4>
    <p class="rett-beskrivelse">${dinner.beskrivelse}</p>
    <p class="alergier">${dinner.alergi}</p>
    <p class="pris">${dinner.pris}</p>
  </div>
  `
});
dinner.innerHTML = dinnerTxt;

// Pringer deserArray
const desert = document.querySelector(".desert");
let desertTxt = "";
MenyModule.getDesert().forEach(desert =>{
  desertTxt +=`
  <div class="desert-box">
    <h4>${desert.navn}</h4>
    <p class="pris">${desert.pris}</p>
  </div>
  `
});
desert.innerHTML = desertTxt;

// Printer ut drinkArray
const drink = document.querySelector(".drink");
let drinkTxt = "";
MenyModule.getDrink().forEach(drink =>{
  drinkTxt +=`
  <div class="drink-box">
    <h4>${drink.navn}</h4>
    <p class="rett-beskrivelse">${drink.beskrivelse}</p>
    <p class="pris">${drink.pris}</p>
  </div>
  `
});
drink.innerHTML = drinkTxt;

// Animate on scroll
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
