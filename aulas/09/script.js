var data1;
$(function(){

	$('button').on('click',function(){
		var cidade = $("#cidade").val();
		var url = 'http://api.weatherbit.io/v2.0/current?&city='+cidade+'&key=7bc43d56b26f4be482fbc0339366e8f9'

		$.ajax({
			url: encodeURI(url),
			type:'GET',
			dataType:'json',
			beforeSend:function(){
				$("#graus").html('Carregando....');
			},
			success:function(data){
				$("#graus").html('Atualmente faz: '+data["data"][0].temp+' º C <br> Com sensação térmica de: '+data["data"][0].app_temp+' ºC');
				console.log(data);
				data1 = data;
				return data1;
			},
			fail:function(){
				$("#graus").html('Error..');
			}
		});
	});
});

