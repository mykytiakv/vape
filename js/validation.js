(function() {
window.addEventListener('load', function() {
  var forms = document.getElementsByClassName('needs-validation');

  function checkPhone(form) {
  	console.log(form)
  	var input = $(form).find('.phone')[0];
  	var phone = input.value;
  	var feedback = $(input).parent().find('.invalid-feedback')[0];
  	var result = phone.match(/^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/) != null;
  	if (!result) {
  		feedback.style.display = 'block';
  		input.style.borderColor = '#dc3545';
  	} else {
  		feedback.style.display = 'none';
  		input.style.borderColor = '#28a745';
  	}
  	return result;
  }

  function checkCapcha(form) {
  	var capchaResponse = grecaptcha.getResponse();
  	console.log($(form).find('.capcha')[0]);
  	var feedback = $(form).find('.capcha').parent().find('.invalid-feedback')[0];
  	var result = (capchaResponse != 0)
  	var visible = (!result) ? 'block' : 'none';
  	feedback.style.display = visible;
  	return result
  }

  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    	event.preventDefault();
    	var isPhone = checkPhone(form);
    	var isCapcha = checkCapcha(form);
        if (form.checkValidity() === false || !isPhone || !isCapcha) {
           event.preventDefault();
           event.stopPropagation();
        } else {
        	//hide modal
        	($(form).has('#buyInClickForm'))
	        	? $('#buyInClick').modal('hide') 
	        	: $('#requestCallback').modal('hide');
        }
        form.classList.add('was-validated');
    }, false);
  });
}, false);
})();