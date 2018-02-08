function validCard(cardNum) {
	var nums = ['0','1','2','3','4','5','6','7','8','9'];
	var count = 0;
	for (var i = 0; i < cardNum.length; i++) {
		for (var j = 0; j < nums.length; j++) {
			if (cardNum[i] == nums[j]) {
				count++;
			}
		}
	}//end for loops
	if (count == 16) {
		return true;
	}
	else return false;
}

var main = function() {
	//opening
	$('body').hide();
	$('body').fadeIn(500);
	
	//various alerts
	$(document).on('submit','#entries',function() {
		//name
		if ($('#name').val() == '') {
			$('#nameAlert').text('Please enter your name as it appears on your card');
		}
		else {
			$('#nameAlert').text('');
		}
		
		//email
		if ($('#email').val() == '') {
			$('#emailAlert').text('Please enter your email address');
		}
		else {
			$('#emailAlert').text('');
		}
		
		//address line 1
		if ($('#address1').val() == '') {
			$('#address1Alert').text('Please enter your billing address');
		}
		else {
			$('#address1Alert').text('');
		}
		
		//city and state
		if (($('#city').val() == '') && ($('#state').val() == '')) {
			$('#cityStateAlert').text('Please enter your billing address city and state');
		}
		else if ($('#city').val() == '') {
			$('#cityStateAlert').text('Please enter your billing address city');
		}
		else if ($('#state').val() == '') {
			$('#cityStateAlert').text('Please enter your billing address state');
		}
		else {
			$('#cityStateAlert').text('');
		}
		
		//zipcode
		if ($('#zipcode').val() == '') {
			$('#zipcodeAlert').text('Please enter your billing address zipcode');
		}
		else {
			$('#zipcodeAlert').text('');
		}
		
		//card number validate
		if ($('#cardNumber').val() == '') {
			$('#cardAlert').text('Please enter your card number');
		}
		else {
			var valid = validCard($('#cardNumber').val());
			if (!valid) {
				$('#cardNumber').val('');
				$('#cardAlert').text('Invalid card number');
			}
			else {
				$('#cardAlert').text('');
			}
		}
		
		return false;
	});
};

$(document).ready(main);