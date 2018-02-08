var main = function() {
	//var defaults
	var save = 0;
	var curr = 0;
	var backMult = 0.1;
	var status = 'Ready';
	var output = '0.';
	var decimals = false;
	var percent = false;
	var reset = false;
	var toggle = false;
	var done = false;
	
	//conversion rates
	var toPd = 0.756;
	var toEuro = 0.8633;
	
	//get exchange rate
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState == XMLHttpRequest.DONE) {
			//alert('Data: ' + httpRequest.responseText);//---------------tester
			var files = httpRequest.responseText;
			var info = JSON.parse(files);
			toPd = info.rates['GBP'] / info.rates['USD'];
			toEuro = 1 / info.rates['USD'];
		}
		//else return -1;
	};
	httpRequest.open('GET',"http://api.fixer.io/latest?symbols=USD,GBP",true);
	httpRequest.send();
	
	function update() {
		if ((curr % 1) == 0.0) {
			output = curr + '.';
		}
		else output = curr;
		$('#status').text(status);
		$('#output').text(output);
	}
	
	function buildFront(input) {
		curr *= 10;
		switch (input) {
			case '1':
				curr += 1;
			break;
			case '2':
				curr += 2;
			break;
			case '3':
				curr += 3;
			break;
			case '4':
				curr += 4;
			break;
			case '5':
				curr += 5;
			break;
			case '6':
				curr += 6;
			break;
			case '7':
				curr += 7;
			break;
			case '8':
				curr += 8;
			break;
			case '9':
				curr += 9;
			break;
			default:
				curr += 0;
			break;
		}//end switch
	}//end buildFront
	
	function buildBack(input) {
		switch (input) {
			case '1':
				curr += 1 * backMult;
			break;
			case '2':
				curr += 2 * backMult;
			break;
			case '3':
				curr += 3 * backMult;
			break;
			case '4':
				curr += 4 * backMult;
			break;
			case '5':
				curr += 5 * backMult;
			break;
			case '6':
				curr += 6 * backMult;
			break;
			case '7':
				curr += 7 * backMult;
			break;
			case '8':
				curr += 8 * backMult;
			break;
			case '9':
				curr += 9 * backMult;
			break;
			default:
				curr += 0 * backMult;
			break;
		}//end switch
		backMult *= 0.1;
	}//end buildBack
	
	//basic number manipulation
	$(document).on('click','.num',function() {
		if (done) {
			curr = 0.0;
			done = !done;
		}
		if (status != 'Ready' && !reset) {
			curr = 0.0;
			percent = false;
			decimals = false;
			reset = true;
		}
		if (decimals) {
			buildBack($(this).text());
		}
		else {
			buildFront($(this).text());
		}
		update();
	});//end number manipulator
	
	//------------------------------------------------------------clear
	$(document).on('click','#clear',function() {
		curr = 0;
		save = 0;
		backMult = 0.1;
		status = 'Ready';
		decimals = false;
		reset = false;
		$('.button').removeClass('selected');
		update();
	});//end clear
	
	//selecting buttons
	$(document).on('click','.operator',function() {
		if ($(this).hasClass('selected')) {
			toggle = false;
		}
		else toggle = true;
		$('.button').removeClass('selected');
		if (toggle) {
			$(this).addClass('selected');
		}
	});//end selecting buttons
	
	//decimal button
	$(document).on('click','#dot',function() {
		if (!decimals) {
			decimals = true;
		}
	});//end decimals
	
	//operators
	$(document).on('click','.operator',function() {
		save = curr;
		switch ($(this).attr('id')) {
			case 'plus':
				status = 'Add';
			break;
			case 'minus':
				status = 'Subtract';
			break;
			case 'mult':
				status = 'Multiply';
			break;
			case 'divide':
				status = 'Divide';
			break;
			case 'xSqY':
				status = 'Power';
			break;
			case 'xRtY':
				status = 'Root';
			break;
			default:
				'Ready';
			break;
		}//end switch
		update();
	});//end operators
	
	//doers
	$(document).on('click','.doer',function() {
		switch($(this).attr('id')) {
			case 'perc':
				curr *= 0.01;
				decimals = true;
				backMult *= 0.01;
			break;
			case 'sign':
				curr *= -1;
			break;
			case 'xSq':
				curr *= curr;
			break;
			case 'xSqrt':
				curr = Math.sqrt(curr);
			break;
			case 'usToPd':
				if ($('#second').hasClass('seconded')) {
					curr /= toPd;
				}
				else curr *= toPd;
			break;
			case 'usToEuro':
				if ($('#second').hasClass('seconded')) {
					curr /= toEuro;
				}
				else curr *= toEuro;
			break;
			default:
				curr = curr;
			break;
		}//end switch
		update();
	});
	
	//second
	$(document).on('click','#second',function() {
		if ($('#second').hasClass('seconded')) {
			$('.seconded').removeClass('seconded');
			$('#usToPd').text('$-£');
			$('#usToEuro').text('$-€');
		}
		else {
			$('#second').addClass('seconded');
			$('#usToPd').addClass('seconded');
			$('#usToEuro').addClass('seconded');
			$('#usToPd').text('£-$');
			$('#usToEuro').text('€-$');
			
		}
	});
	
	//equals
	$(document).on('click','#equals',function() {
		if (reset) {
		switch (status) {
			case 'Add':
				curr += save;
			break;
			case 'Subtract':
				curr = save - curr;
			break;
			case 'Multiply':
				curr *= save;
			break;
			case 'Divide':
				curr = save / curr;
			break;
			case 'Power':
				curr = Math.pow(save,curr);
			break;
			case 'Root':
				curr = Math.pow(save,(1 / curr));
			break;
			default:
				curr = curr;
			break;
		}//end switch
		save = 0.0;
		backMult = 0.1;
		status = 'Ready';
		decimals = false;
		reset = false;
		$('.button').removeClass('selected');
		done = true;
		update();
		}
	});//end equals
};

$(document).ready(main);
