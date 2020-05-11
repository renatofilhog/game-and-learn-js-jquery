	var dt = new Date();
	var hoje = {
		'dia':dt.getDate(),
		'mes':dt.getMonth(),
		'ano':dt.getFullYear()

	};

	switch(hoje['mes']) { 
		case 0:
			hoje['mes'] = "Janeiro";
		break;

		case 1:
			hoje['mes'] = "Fevereiro";
		break;

		case 2:
			hoje['mes'] = "Março";
		break;

		case 3:
			hoje['mes'] = "Abril";
		break;

		case 4:
			hoje['mes'] = "Maio";
		break;
		
		case 5:
			hoje['mes'] = "Junho";
		break;
		
		case 6:
			hoje['mes'] = "Julho";
		break;

		case 7:
			hoje['mes'] = "Agosto";
		break;

		case 8:
			hoje['mes'] = "Setembro";
		break;

		case 9:
			hoje['mes'] = "Outubro";
		break;

		case 10:
			hoje['mes'] = "Novembro";
		break;
		
		case 11:
			hoje['mes'] = "Dezembro";
		break;
	}
	
	var txt = "Data: "+hoje['dia']+" de "+hoje['mes']+" de "+hoje['ano'];



function adicionarIngrediente()	{
	var novoingrediente = document.getElementById('ingrediente').value;
	var lista = document.getElementById('lista').innerHTML;
	if(novoingrediente.length > 0){
		document.getElementById('lista').innerHTML = lista + "<li>"+novoingrediente+"</li>";
		document.getElementById('ingrediente').value = '';
	} else {
		alert("Digite algum ingrediente no campo.");
	}
}

function atalho(event){
	//console.log("Key: "+event.keyCode);
	if (event.keyCode == 13) {
		adicionarIngrediente();
	}
}



	

function dataDeHoje(){


	document.getElementById('diadehoje').innerHTML = txt;

}
