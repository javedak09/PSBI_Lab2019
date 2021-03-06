$(function(){
	
	$("#form").validate({
		rules: {
			name: {
				required: true,
				number: true,
				minlength: 3
			},
			company: {
				required: true
			},
			phone: {
				required: true,
				number: true,
				minlength: 6
			},
			email: {
				required: true,
				number: true,
				
			},
			message: {
				required: true
			}
		},
		messages: {
			name: {
				required: 'This field is required',
				minlength: 'Minimum length: 3'
			},
			company: {
				required: 'This field is required'
			},
			phone: {
				required: 'This field is required',
				number: 'Invalid phone number',
				minlength: 'Minimum length: 6'
			},
			email: 'Invalid e-mail address',
			message: {
				required: 'This field is required'
			}
		},
		success: function(label) {
			label.html('OK').removeClass('error').addClass('ok');
			setTimeout(function(){
				label.fadeOut(500);
			}, 2000)
		}
	});
	
});