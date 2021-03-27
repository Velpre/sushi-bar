//Modal for bestilling av bord
// Toggler is-active class viser og stenger modale
const footerButton= document.querySelector(".footer-button");
const modal = document.querySelector(".modal");
const delete1 = document.querySelector(".delete");
const modalBackground = document.querySelector(".modal-background");

footerButton.addEventListener("click",()=>{
    modal.classList.toggle("is-active");
    // hindrer at background bak modalen beveger seg
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position="fixed"
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
footerButton.addEventListener("click", function() {
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
let today = new Date().toISOString().slice(0, 10)
footerButton.addEventListener("click", function() {
  inputDate.setAttribute("min", today);
});
