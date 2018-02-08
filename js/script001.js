var main = function() {
	$('body').hide();
	$('body').fadeIn(500);
	
	var alertA = 'Please enter your username or email address';
	var alertB = 'Please enter your password';
	$(document).on('submit','#entries',function() {
		var getName = $('#username').val();
		var getPass = $('#pass').val();
		if (getName == '') {
			$('#alertA').text(alertA);
		}
		else {
			$('#alertA').text('');
		}
		if (getPass == '') {
			$('#alertB').text(alertB);
		}
		else {
			$('#alertB').text('');
		}
		return false;
	});
};

$(document).ready(main);