function wrap(input, tag) {
	var output = '<' + tag + '>' + input + '</' + tag + '>';
	return output;
}//end function wrap #1

function wrap(input, tag, info) {
	var output = '<' + tag + ' ' + info + '>' + input + '</' + tag + '>';
	return output;
}//end function wrap #2

function pushRight(object, mSecs) {
	$(object).css('left','0px');
	if (mSecs > 0) {
		var pos = parseInt($(object).css('left'),10);
		alert('Left: ' + pos);
		$(object).css('left',(pos + 10) + 'px');
		window.setTimeout(pushRight(object,mSecs - 1),1);
	}
}//end function pushRight

//tester
$(document).ready(function() {
	for (var i = 0; i < 7; i++) {
		if (i % 2 == 0) {
			$('#main').append(wrap('Foo foo foo','p'));
		}
		else {
			$('#main').append(wrap('Bar bar bar bar','p','class="barbar"'));
		}
	}//end for loop
	
	function recurring(num,limit) {
		if (num < limit) {
			if (num % 3 == 0) {
				$('#main').append(wrap('This is red text.','p','class = "redText"'));
			}
			else {
				var inside = wrap('This is a blue div.','p');
				inside += wrap('This is not a red div.','p');
				inside += wrap('This is not a green div either.','p');
				inside = wrap(inside,'div','class="blueDiv"');
				$('#main').append(inside);
			}
			recurring(num + 1, limit);
		}
	}//end function recurring
	
	recurring(0,16);
	
	pushRight('#main',1000);
});
