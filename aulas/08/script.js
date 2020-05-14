$(function(){
	$('#senha').on('keyup',function(){
		var txt = $(this).val();
		var strong = 0;

		if(txt.length >=8){
			strong +=20;
		}
		
		var reg = new RegExp(/[a-z]/s);
		if(reg.test(txt)){
			strong+=20;
		}

		var reg = new RegExp(/[A-Z]/s);
		if(reg.test(txt)){
			strong+=20;
		}

		var reg = new RegExp(/[0-9]/i);
		if(reg.test(txt)){
			strong+=20;
		}


		var reg = new RegExp(/[^a-z0-9]/i);
		if(reg.test(txt)){
			strong+=20;
		}

		if(strong <= 20){
			$("#forca").css("color",'red');
			$("#forca").html("Muito Ruim");
		} else if (strong <= 40){
			$("#forca").css("color",'red');
			$("#forca").html("Ruim");
		} else if (strong <= 60){
			$("#forca").css("color",'yellow');
			$("#forca").html("Média");			
		} else if (strong <= 80){
			$("#forca").css("color",'blue');
			$("#forca").html("Boa");			
		} else if (strong <= 100){
			$("#forca").css("color",'green');
			$("#forca").html("Excelente");			
		}
		var a = $("#forca").html();
		$("#forca").html(a+"<br>Força: "+strong+"%");
	});
});