//Modal for bestilling av bord
// Alle HTML objekter
const footerButton= document.querySelector(".footer-button");//
const modal = document.querySelector(".modal1");
const delete1 = document.querySelector(".delete1");
const modalBackground = document.querySelector(".modal-background1");

const form = document.getElementById("my-form");
const buttonModal = document.querySelector(".button-modal1");
const status = document.getElementById("my-form-status");

const slider = document.getElementById("amountValue");
const output = document.getElementById("amount");

const inputTel = document.querySelector(".input-tel1");
const inputMail = document.querySelector(".input-mail1");
const inputKlokkeslett = document.querySelector(".input-klokkeslett1");
const inputDate = document.querySelector(".input-date1");


// 1.Toggler is-active class viser og stenger modale
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

// 2.Viser takkemelding når brukeren har bestilt border
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

// 3.Slider output for brukeren (antall personer)
slider.oninput = function() {
  output.innerHTML = this.value;
}

// 4.Endrer melding som kommer på input i tilfelle brukeren har tastet feil
footerButton.addEventListener("click", function() {


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

// 5.Setter min value på date attribut
let today = new Date().toISOString().slice(0, 10)
footerButton.addEventListener("click", function() {
  inputDate.setAttribute("min", today);
});




//Modal for handlekurven
// Alle HTML objekter
const shoppingCart= document.querySelector(".shopping-cart-icone");//
const modal2 = document.querySelector(".modal2");
const delete2 = document.querySelector(".delete2");
const modalBackground2 = document.querySelector(".modal-background2");

const form2 = document.getElementById("my-form2");
const buttonModal2 = document.querySelector(".button-modal2");
const status2 = document.getElementById("my-form-status2");


const inputTel2 = document.querySelector(".input-tel2");
const inputKlokkeslett2 = document.querySelector(".input-klokkeslett2");
const inputDate2 = document.querySelector(".input-date2");

const cb = document.getElementById("checked");
const adresse= document.querySelector(".field-adresse");


// 1.Toggler is-active class viser og stenger modale
shoppingCart.addEventListener("click",()=>{
    modal2.classList.toggle("is-active");
    // hindrer at background bak modalen beveger seg
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position="fixed"
});
delete2.addEventListener("click", ()=>{
  modal2.classList.toggle("is-active");
  status2.style.display="none"
  buttonModal2.style.visibility="visible";
  // sender brukeren til samme del av siden hvor han var. Brukes på grunn av at vi hadde position fixed over
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
});
modalBackground2.addEventListener("click", ()=>{
  modal2.classList.toggle("is-active");
  status2.style.display="none"
  buttonModal2.style.visibility="visible";
  // sender brukeren til samme del av siden hvor han var. Brukes på grunn av at vi hadde position fixed over
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
});

// 2.Viser takkemelding når brukeren har bestilt takeaway
async function handleSubmit1(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form2.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status2.style.display="inline-block"
    status2.innerHTML = "Bestillingen er sendt";
    buttonModal2.style.visibility="hidden";
    form2.reset();
    adresse.style.visibility="hidden";
    valgteRetterTxt=""
    valgteRetter.innerHTML=valgteRetterTxt;
    cartValue=0;
    cartNumber.innerHTML=cartValue;
    cartDiv.style.display="none";
    sum=0;
    totalPris.style.display="none";
    removeAllBtn.style.display="none";
  })
}
form2.addEventListener("submit", handleSubmit1)

// 3.Endrer melding som kommer på input i tilfelle brukeren har tastet feil
shoppingCart.addEventListener("click", function() {


      // Sjekker om telefonnummer mailadresse og dato er riktig
        inputTel2.oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Du må legge inn riktig telefonnummer, 8 siffer");
            }
        };
        inputTel2.oninput = function(e) {
            e.target.setCustomValidity("");
        };

      // Sjekker om klokkeslett er riktig
        inputKlokkeslett2.oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Kjøkkene åpner 12:00 og stenger 19:00");
            }
        };
        inputKlokkeslett2.oninput = function(e) {
            e.target.setCustomValidity("");
        };

});

// 4.Setter min value på date attribut
let today1 = new Date().toISOString().slice(0, 10)
shoppingCart.addEventListener("click", function() {
  inputDate2.setAttribute("min", today1);
});

// 5.Sjekker om checkbox is checked
cb.addEventListener("click", ()=>{
  if(cb.checked==true){
  adresse.style.visibility="visible";
  }else{
  adresse.style.visibility="hidden";
  }
});





// Nye funksjoner for handlekurven modalen
const cartDiv = document.querySelector(".shopping-cart-div");
const totalPris = document.querySelector(".total-pris");
let totalPrisTxt = "";
let sum=0;

const valgteRetter = document.querySelector(".valgte-retter");
let valgteRetterTxt = "";

const cartNumber = document.querySelector(".cart-number");
let cartValue=0;

const removeAllBtn = document.querySelector(".remove-all");

// Printer retter og totalsummen for retter brukeren har valgt.
// Printer ut Slett Knappen hvor brukeren kan slette spesifikk retter
// Angir animasjoner for cart iconen
// Printer ut nummer på hvor mange produkter som ligger i kurven
// Sletter elementen brukeren har lagt i handlekurven
document.querySelectorAll(".button-buy").forEach(button =>{
  button.addEventListener("click", (e)=>{
      let currentPrice = e.currentTarget.dataset.pris
      sum += parseInt(e.currentTarget.dataset.pris);
      valgteRetterTxt+=`
      <div class="valgte-retter-wrapper chosen-element">
      <p>${e.currentTarget.dataset.navn} </p>

      <div class="pris-delete-wrapper">
      <p>kr ${e.currentTarget.dataset.pris}</p>
      <a data-price="${currentPrice}" class="remove-button "><i class="fas fa-minus-circle"></i> </a>
      </div>
      </div>
      `
      totalPrisTxt =`<p>Totalt kr ${sum}</p>`
      valgteRetter.innerHTML=valgteRetterTxt;
      totalPris.innerHTML=totalPrisTxt;
      cartValue++;
      cartNumber.innerHTML=cartValue;

      // Animations
      cartDiv.style.display="inline-block";
      cartDiv.classList.add("animation-shopping-cart");

        document.querySelectorAll(".remove-button").forEach(remove=>{
          remove.addEventListener("click", (e)=>{

              sum-= parseInt(e.currentTarget.dataset.price)
              e.currentTarget.parentElement.parentElement.remove();
              totalPrisTxt =`<p>Totalt kr ${sum}</p>`
              console.log(valgteRetterTxt);
              totalPris.innerHTML=totalPrisTxt;
              cartValue--;
              cartNumber.innerHTML=cartValue;
          });
        });

    });
  });


// Sletter alle retten brukeren har valgt, fjerner de fra totalsummen,
// kontrolerer at bakgrunnen ikke kan bevege mens modalen er åpen og retunerer brukeren til samme posisjon som han var på
// restarter antall retter brukeren har lagt i kurven
removeAllBtn.addEventListener("click", ()=>{

    document.querySelector(".shopping-cart-div").style.display="none";
    cartValue=0;
    modal2.classList.remove("is-active");
    form2.reset();
    status2.style.display="none"
    buttonModal2.style.visibility="visible";
    // sender brukeren til samme del av siden hvor han var. Brukes på grunn av at vi hadde position fixed over
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    sum=0;
    valgteRetterTxt="";
    totalPrisTxt ="";
    totalPris.innerHTML=totalPrisTxt;
    valgteRetter.innerHTML=valgteRetterTxt;
  });
