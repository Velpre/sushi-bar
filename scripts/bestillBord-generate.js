//Modal for bestilling av bord

// toggler is-active class og viser og stenger modale
const modal = document.querySelector(".modal");
const delete1 = document.querySelector(".delete");

window.addEventListener("DOMContentLoaded",()=>{
    modal.classList.toggle("is-active")
});

delete1.addEventListener("click", ()=>{
  window.location="../index.html";
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
