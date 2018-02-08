function validate(pass) {
	var status = '';
	var test = pass;
	var goodLength = 8;
	
	//check length
	if (pass.length < goodLength) {
		status = 'Password must contain at least 8 characters';
		return status;
	}
	//check if at least one uppercase character
	test = test.toLowerCase();
	if (test == pass) {
		status = 'Please use at least one uppercase character';
		return status;
	}
	
	//check for at least one lowercase
	test = test.toUpperCase();
	if (test == pass) {
		status = 'Please use at least one lowercase letter';
		return status;
	}
	
	//check for at least one special character
	var regChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
	var count = 0;
	test = test.toLowerCase();
	for (var i = 0; i < test.length; i++) {
		for (var j = 0; j < regChars.length; j++) {
			if (test[i] == regChars[j]) {
				count++;
			}
		}
	}
	if (count == pass.length) {
		status = 'Please use at least one special character';
		return status;
	}
	return status;
}

var main = function() {
	$('body').hide();
	$('body').fadeIn(500);
	
	$(document).on('submit','#entries',function() {
		//username
		if ($('#username').val() == '') {
			$('#alertA').text('Please enter a username');
		}
		else {
			$('#alertA').text('');
		}
		//email
		if ($('#email').val() == '') {
			$('#alertB').text('Please enter your email address');
		}
		else {
			$('#alertB').text('');
		}
		//password
		if ($('#pass').val() == '') {
			$('#alertC').text('Please enter a password');
		}
		else {
			var codeStatus = validate($('#pass').val());
			if (codeStatus != '') {
				$('#pass').val('');
				$('#confirm').val('');
				$('#alertC').text(codeStatus);
			}
			else {
				$('#alertC').text('');
			}
		}
		if ($('#confirm').val() == '') {
			$('#alertD').text('Please re-enter your password');
		}
		else if ($('#confirm').val() != $('#pass').val()) {
			$('#confirm').val('');
			$('#alertD').text('Password does not match');
		}
		else {
			$('#alertD').text('');
		}
		return false;
	});
};

$(document).ready(main);