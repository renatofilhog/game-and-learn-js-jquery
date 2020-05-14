function addBola(){
	// Posições
	var left = Math.floor(Math.random()*801); 
	var top = Math.floor(Math.random()*500);

	// Cores variadas
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);

	var bola = $('<div class="bola"></div>');
	bola.css('left', left+'px');
	bola.css('top',top+"px");
	bola.css('background-color','rgb('+r+','+g+','+b+')');
	bola.on('click',function(){
		$(this).fadeOut("fast");
		
		placar++;
		updatePlacar();
	});

	//$(document.body).append('<div class="bola"></div>');
	$(bola).appendTo(document.body);
}

var placar = 0;

function updatePlacar(){
	$('#placar').html(placar);
}

$(function(){
var x;
	$('#comecar').on('click',function(){

			x = setInterval(addBola,1000);

	});

	$('#parar').on('click',function(){
			clearInterval(x);
	});


});