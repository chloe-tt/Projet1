let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let togg3 = document.getElementById("togg3");
let d1 = document.getElementById("descmobile1");
let d2 = document.getElementById("descmobile2");
let d3 = document.getElementById("descmobile3");

togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
})

togg2.addEventListener("click", () => {
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
  }
})



function togg(){
  if(getComputedStyle(d3).display != "none"){
    d3.style.display = "none";
  } else {
    d3.style.display = "block";
  }
};
togg3.onclick = togg;

let idBurger = document.getElementById('burger-active');
idBurger.addEventListener('click', (event) => {
    let tooggleMenu = document.getElementById('toggle-menu');
    tooggleMenu.classList.toggle('mobile-menu-hidden');
})


//DARK MODE SCRIPT

$("#darkTrigger").click(function(){
	if ($("body").hasClass("dark")){
		$("body").removeClass("dark");
	}
	else{
		$("body").addClass("dark");
	}
});




//AVIS CLIENTS INTRO


let feedback = [
	{ name: 'Marie B.', dateFeedback : "25/03/2020", quote : '"Super moment en famille, je recommande la croisère ile aux oiseaux. Paysages magnifiques, équipage sympatique. Adapté aux enfants"' },
	{ name: 'John D.', dateFeedback: "22/03/2020", quote : '"Magnifique, vous pouvez y aller les yeux fermés! Equipage au top, croisière à la journée afin de bien profiter du bassin, je recommande!"' },
	{ name: 'Sarah V.', dateFeedback : "21/03/2020", quote : '"Merci pour cette belle croisière le long de berges bordelaise en compagnie de très bon vin! A faire absolument!"' },
];

let template = document.querySelector('#feedback');
for (let i = 0; i < feedback.length; i++) {
	let foodtruck = feedback[i];
	let clone = template.content.cloneNode(true);
	
	let h3 = clone.querySelectorAll('h3');
	h3[0].innerHTML = foodtruck.name;
	
	let h5= clone.querySelectorAll('h5');
	h5[0].innerHTML = foodtruck.dateFeedback;
	
	let p = clone.querySelectorAll('p');
	p[0].innerHTML = foodtruck.quote;
	
	template.parentNode.appendChild(clone);
	
}









