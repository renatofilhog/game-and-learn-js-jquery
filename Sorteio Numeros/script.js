function verificar() {
	
	var x = document.getElementById("number").value;
	var y = document.getElementById("numero").innerHTML;
	if (x==y){
		alert("Meus parabéns, você acertou o número que tava ali.");
	} else {
		alert("Não foi dessa vez, e é porquê estava na sua cara!");
	}

	resetar();

}

function resetar() {
	document.getElementById("numero").innerHTML=Math.floor(Math.random()*10);
}