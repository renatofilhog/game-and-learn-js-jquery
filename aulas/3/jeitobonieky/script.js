$(function(){
	$('#calcular').on('click', function(){
		var peso = $('#peso').val();
		peso = peso.replace(',','.');
		peso = parseFloat(peso);

		var altura = $('#altura').val();
		altura = altura.replace(',','.');
		altura = parseFloat(altura);
		
		var imc = peso / (altura*altura);

		if(imc < 16) {
			var status = "Baixo peso muito grave";
		}else if (imc >= 16 && imc < 16.99 ) {
			var status = "Baixo peso grave";
		} else if (imc >= 17 && imc < 18.49) {
			var status = "Baixo peso";
		} else if (imc >= 18.50 && imc < 25) {
			var status = "Peso normal";
		} else if (imc >= 25 && imc<29.99) {
			var status = "Sobrepeso";
		} else if (imc>=30 && imc<34.99) {
			var status = "Obesidade grau I";
		} else if (imc>=35 && imc<39.99) {
			var status = "Obesidade grau II";
		} else if (imc>=40) {
			var status = "Obesidade grau III";
		}

		$('#resultado').html("Seu IMC é: "+imc+" e você está classificado como: "+status);

		

	});

});
