var main = function() {
	var slide = 200;
	$(document).on('click','.drop-button',function() {
		var obj = $(this).children('.dropdown');
		if (!$(obj).hasClass('dropped')) $(obj).slideDown(slide,function() {
			$(obj).toggleClass('dropped');
		});
	});
	$(document).on('click','body',function() {
		$('.dropped').slideUp(slide);
		$('.dropped').removeClass('dropped');
	});
};

$(document).ready(main);