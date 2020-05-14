$(function(){
	var horaescolhaCampo;

	$('input').on('focus', function(){

		var pos = $(this).offset(); //pega posição
		var wid = $(this).width(); // pega largura 
		//console.log(pos);


		$('.horaescolha').css('left',pos.left +wid+10);
		$('.horaescolha').css('top',pos.top);
		$('.horaescolha').show();

		horaescolhaCampo = $(this);

	});

	$('input').on('blur', function(){
		setTimeout(function(){
			$('.horaescolha').hide();
		},200);
		

	});

	$('.horaescolha button').on('click',function(){
		var hora = $(this).html();
		horaescolhaCampo.val(hora);
	});

});
