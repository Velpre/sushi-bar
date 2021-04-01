import MenyModule from"../modules/MenyModule.js";

// Printer ut lunchArray
const lunch = document.querySelector(".lunch");
let lunchTxt = "";
MenyModule.getLunch().forEach(lunch =>{
  lunchTxt +=`
  <div class="lunch-box boks">
    <h4>${lunch.navn}</h4>
    <p class="rett-beskrivelse">${lunch.beskrivelse}</p>
    <p class="alergier">${lunch.alergi}</p>
    <div class="pris-buybutton-wrapper">
    <p  class="pris line">kr ${lunch.pris}</p>
    <a data-navn="${lunch.navn}" data-pris ="${lunch.pris}" class="button-buy line">KJØP</a>
    </div>
  </div>
  `
});
lunch.innerHTML = lunchTxt;

// Printer ut dinnerArray

const dinner = document.querySelector(".dinner");
let dinnerTxt = "";
MenyModule.getDinner().forEach(dinner =>{
  dinnerTxt +=`
  <div class="dinner-box boks">
    <h4>${dinner.navn}</h4>
    <p class="rett-beskrivelse">${dinner.beskrivelse}</p>
    <p class="alergier">${dinner.alergi}</p>
    <div class="pris-buybutton-wrapper">
    <p class="pris line">kr ${dinner.pris}</p>
    <a data-navn="${dinner.navn}" data-pris ="${dinner.pris}" class="button-buy line">KJØP</a>
    </div>
  </div>
  `
});
dinner.innerHTML = dinnerTxt;

// Pringer deserArray
const desert = document.querySelector(".desert");
let desertTxt = "";
MenyModule.getDesert().forEach(desert =>{
  desertTxt +=`
  <div class="desert-box boks">
    <h4>${desert.navn}</h4>
    <div class="pris-buybutton-wrapper">
    <p class="pris line">kr ${desert.pris}</p>
    <a data-navn="${desert.navn}" data-pris ="${desert.pris}" class="button-buy line">KJØP</a>
    </div>
  </div>
  `
});
desert.innerHTML = desertTxt;

// Printer ut drinkArray
const drink = document.querySelector(".drink");
let drinkTxt = "";
MenyModule.getDrink().forEach(drink =>{
  drinkTxt +=`
  <div class="drink-box boks">
    <h4>${drink.navn}</h4>
    <p class="rett-beskrivelse">${drink.beskrivelse}</p>
    <div class="pris-buybutton-wrapper">
    <p class="pris line">kr ${drink.pris}</p>
    <a data-navn="${drink.navn}" data-pris ="${drink.pris}" class="button-buy line">KJØP</a>
    </div>
  </div>
  `
});
drink.innerHTML = drinkTxt;
