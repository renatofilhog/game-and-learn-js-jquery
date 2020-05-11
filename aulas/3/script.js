$(function(){

	$('#form').on('submit', function(e){
		e.preventDefault();
	});

	$('#btn').on('click', function(){
		$('.div').css('background-color','red');
		//$('.div').toggle('slow');
		//$('.div').fadeToggle('slow');
		$('.div').slideToggle('fast');

	});
	
	$('#btn2').on('click', function(){
		$('body').append("<ul class='lista'></ul>");
	});

	$('#btn3').on('click', function(){
		$('.lista').append("<li>"+$('#senha').val()+"</li>");
	});

});