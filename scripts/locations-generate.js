import LocationsModule from './LocationsModule.js'

const loc = document.querySelector("#locations");

let locTxt = "";

LocationsModule.getLoc().forEach(loc =>{
  locTxt+=`
  <article class="column is-5 m-6">
  <div class="card">

  <section class="card-image">
    <img src="../images/other/${loc.image}">
  </section>

  <section class="card-content">
    <p class="has-text-weight-bold is-size-3">${loc.location}</p>
  </section>

  </div>
  </article>
  `
});

loc.innerHTML = locTxt;
