// https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Raghu&format=json     (Run this in the browser to know how the content is fetched)

var allchar="0123456789ABCDEF";


$(document).ready(function (){
	$("#ser").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#search").click();
    }
	});


	$('#search').click(function(){
		if(!($('#ser').val())){
			alert('Please Enter a Search Query');
		}
		else {
		$('#display-result').empty();
		$.ajax({
			url:'http://en.wikipedia.org/w/api.php',
			data: { action :'query', list: 'search', srsearch: $("input[name=query]").val(), format: 'json'},
			dataType: 'jsonp',
			success: processResult
		});
	var randcolor = "";

	for(var i=0;i<6;i++){
		randcolor+= allchar[Math.floor(Math.random()*16)];
	}
	document.body.style.backgroundColor = "#"+randcolor;
	document.body.style.WebkitTransition = "opacity ,1s";
		

	}
	});



});


var allchar="0123456789ABCDEF";

function processResult(apiResult){
	for(var i=0;i<apiResult.query.search.length; i++){
		var url = "https://en.wikipedia.org/wiki/";
		var item = apiResult.query.search[i].title.replace(/ /g,'_');
		var pageurl = url+item;


		$('#display-result').append('<a class="results"href="'+pageurl+ '" target="_blank"><p class="panel panel-default"><span class="wikititle">'+ apiResult.query.search[i].title+' </span><br>'+ apiResult.query.search[i].snippet + '</p></a>');

	}
}

function backcolor(){
	document.body.style.backgroundColor="rgb(0,126,213)";
}









// apiResult.query.search[i].title