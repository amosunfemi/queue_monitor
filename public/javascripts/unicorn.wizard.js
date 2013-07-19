
$(document).ready(function(){
	
	$("#form-wizard").formwizard({ 
		formPluginEnabled: true,
		validationEnabled: true,
		focusFirstInput : true,
		disableUIStyles : true,
	
		formOptions :{
			success: function(data){$("#status").fadeTo(500,1,function(){ $(this).html("<span>Form was submitted!</span>").fadeTo(5000, 0); })},
			beforeSubmit: function(data){$("#data").html("<span>Form was submitted with ajax. Data sent to the server: " + $.param(data) + "</span>");},
			dataType: 'json',
			resetForm: true
		},
		validationOptions : {
			rules: {
				affiliate:"required",
				qm_name:"required",
				host:"required",
				q_name:"required",
				channel:"required",
				port:{ required: true, number: true },
				time:{ required: true, number: true },
				limit:{ required: true, number: true }
			},
			messages: {
				affiliate: "Please select an affiliate",
				qm_name: "Please enter a name for your Queue Monitor"
			},
			errorClass: "help-inline",
			errorElement: "span",
			highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).parents('.control-group').removeClass('error');
			}
		}
	});	
});
