import DishModule from './DishModule.js'

const foodSection = document.querySelector("#food-section");

let foodSectionTxt="";



DishModule.getMeny().forEach(f =>{

  foodSectionTxt += `
  <article class="column is-4">
    <div class="card mt-6 mb-6">

    <section class="card-image ">
    <img style="height:300px;" src="../images/food/${f.image}">
    </section>

    <section class="card-content">
     <h3 class="has-text-weight-bold is-size-3">${f.name}</h3>
     <p class="is-italic">Price:${f.price}</p>
    </section>

    </div>
  </article>
  `
} );




foodSection.innerHTML = foodSectionTxt;
