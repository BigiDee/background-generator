var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
let button = document.getElementById("button");
setGradient();

function randomize(){
	let num1 = Math.round(Math.random()*255);
	let num2 = Math.round(Math.random()*255);
	let num3 = Math.round(Math.random()*255);
	let num4 = Math.round(Math.random()*255);
	let num5 = Math.round(Math.random()*255);
	let num6 = Math.round(Math.random()*255);
	let color1 = "rgba("+num1+","+num2+","+num3+","+1+")";
	let color2 = "rgba("+num4+","+num5+","+num6+","+1+")";
	color1.value=color1;
	color2.value=color2;	
	body.style.background= "linear-gradient(to right," + color1 +","+ color2 +")";
	css.textContent = body.style.background + ";";
}

button.addEventListener("click",randomize);

function setGradient(){
	body.style.background= "linear-gradient(to right," + color1.value +","+ color2.value +")";
	css.textContent = body.style.background + ";";	
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
css.textContent = body.style.background+";";

