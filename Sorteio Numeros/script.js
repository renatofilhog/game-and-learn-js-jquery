function verificar() {
	
	var x = document.getElementById("number").value;
	var y = document.getElementById("numero").innerHTML;
	if (x==y){
		alert("Meus parab�ns, voc� acertou o n�mero que tava ali.");
	} else {
		alert("N�o foi dessa vez, e � porqu� estava na sua cara!");
	}

	resetar();

}

function resetar() {
	document.getElementById("numero").innerHTML=Math.floor(Math.random()*10);
}