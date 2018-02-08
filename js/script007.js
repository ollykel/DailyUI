function appendData(dataList, dataName, data) {
	var output = "";
	output = dataList + dataName + ':'  + data + ';';
	return output;
}

var main = function() {
	var output = "";
	$(document).on('click','#submitter',function() {
		
		output = appendData(output,'searches',$('input[name="searches"]:checked').val());
		output = appendData(output,'friendsList',$('input[name="friends"]:checked').val());
		output = appendData(output,'likes',$('input[name="likes"]:checked').val());
		output = appendData(output,'events',$('input[name="events"]:checked').val());
		output = appendData(output,'posts',$('input[name="posts"]:checked').val());
		output = appendData(output,'comments',$('input[name="comments"]:checked').val());
		output = appendData(output,'likes2',$('input[name="likes2"]:checked').val());
		output = appendData(output,'events2',$('input[name="events2"]:checked').val());
		output = appendData(output,'posts2',$('input[name="posts2"]:checked').val());
		output = appendData(output,'comments2',$('input[name="comments2"]:checked').val());
		
		alert('Data: ' + output);
		window.location('./Day007B.html');
		return false;
	});
};

$(document).ready(main);
