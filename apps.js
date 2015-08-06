	$(document).ready(function(){
	$('#button').on('click', function(){
		if($('main').css('display')=='none'){

			alert('Press OK to view resume');
			document.getElementById('button').innerHTML = "Hide Resume";
			$('main').css({'display': 'inline'});
			document.getElementById('button').blur();

		}
		else {
			alert('Press OK to hide resume');
			document.getElementById('button').innerHTML = "Show Resume";
			$('main').css({'display' : 'none'});
			document.getElementById('button').blur();
		}

	});



});
