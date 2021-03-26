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
    const inputKlokkeslett = document.querySelector(".input-klokkeslett");

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

        inputKlokkeslett.oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Kjøkkene stenger 19:00");
            }
        };
        inputKlokkeslett.oninput = function(e) {
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
