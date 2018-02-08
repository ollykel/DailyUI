var main = function() {
	//submit email
	$(document).on('submit','#emailForm', function() {
		$('#thanks').text('Thank you for signing up!');
		$('#email').val('');
		return false;
	});
};

$(document).ready(main);