alert ("Clique nas bolas antes que dê RUIM");
function addBola() {
	var bola = document.createElement("div"); // <div></div>
	bola.setAttribute("class", "bola");	// <div class="bola"></div>
	var ptop = Math.floor(Math.random()*400);
	var pleft = Math.floor(Math.random()*200);
	
	var red = Math.floor(Math.random()*250);
	var blue = Math.floor(Math.random()*250);
	var green = Math.floor(Math.random()*250);

	bola.setAttribute("style", "top: "+ptop+"px; left: "+pleft+"px; background-color:  rgb("+red+","+blue+","+green+");");
	bola.setAttribute("onclick","rasga(this);");
	document.body.appendChild(bola);

}

/*
function iniciar() {
	myteste = setInterval(addBola, 900); // Variavel global kkkkkkkkkkkk
}
*/
x = 0;
var intervalo = setInterval(iniciar, 5000);



function iniciar() {
	
	switch(x) {
		case 0:
			myteste = setInterval(addBola, 900);
			x++;
			break;
		case 1:
			myteste = setInterval(addBola, 800);
			x++;
			break;
		case 2:
			myteste = setInterval(addBola, 700);
			x++;
			break;
		
	}
	return x;
}

function parar() {
	
	clearInterval(myteste);
	x = 50;
	return x;
	
}

function rasga(elementobola){
	document.body.removeChild(elementobola); // Remove a variavel 
}

