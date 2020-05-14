$(function(){

	$('.btn:eq(0)').on('click', function(){
		var valor = $('.btn:eq(0)').val();
		var visor = $('#visor').val();
		$('#visor').val(visor+valor);
	});
	
	$('.btn:eq(1)').on('click', function(){
		var valor = $('.btn:eq(1)').val();
		var visor = $('#visor').val();
		$('#visor').val(visor+valor);
	});

	$('.btn:eq(2)').on('click', function(){
		var valor = $('.btn:eq(2)').val();
		var visor = $('#visor').val();
		$('#visor').val(visor+valor);
	});

	$('.btn:eq(3)').on('click', function(){
		var valor = $('.btn:eq(3)').val();
		var visor = $('#visor').val();
		$('#visor').val(visor+valor);
	});
	
	$('.btn:eq(4)').on('click', function(){
		var valor = $('.btn:eq(4)').val();
		var visor = $('#visor').val();
		$('#visor').val(visor+valor);
	});

	$('.btn:eq(5)').on('click', function(){
		var valor = $('.btn:eq(5)').val();
		var visor = $('#visor').val();
		$('#visor').val(visor+valor);
	});
	$('.btn:eq(6)').on('click', function(){
		var valor = $('.btn:eq(6)').val();
		var visor = $('#visor').val();
		$('#visor').val(visor+valor);
	});
	
	$('.btn:eq(7)').on('click', function(){
		var valor = $('.btn:eq(7)').val();
		var visor = $('#visor').val();
		$('#visor').val(visor+valor);
	});

	$('.btn:eq(8)').on('click', function(){
		var valor = $('.btn:eq(8)').val();
		var visor = $('#visor').val();
		$('#visor').val(visor+valor);
	});
	$('.btn:eq(9)').on('click', function(){
		var valor = $('.btn:eq(9)').val();
		var visor = $('#visor').val();
		$('#visor').val(visor+valor);
	});
	
	$('.btn:eq(10)').on('click', function(){
		var valor = $('.btn:eq(10)').val();
		var visor = $('#visor').val();
		$('#visor').val(visor+valor);
	});

	var peso = 0;
	var altura = 0;

	$('.btn:eq(11)').on('click', function(){
		var visor = $('#visor').val();

		if(peso != 0 && altura != 0){
			//var peso = parseInt($('.peso').html().trim());
			//var altura = parseInt($('.altura').html().trim());
			var resultado = peso/(altura*altura);


			//$('#imc').html(resultado);
			$('.welcome').html('Calculadora IMC: Seu IMC é: '+resultado);

		} else if (altura == 0) {
			peso = parseInt(visor);
			$('.welcome').html('Calculadora IMC: Insira sua altura (Metros)');
			
		} else {
			altura = parseInt(visor);
		}

		$('#visor').val('');
	});



	$('.btn:eq(12)').on('click', function(){
		$('#visor').val('');
	});

});
