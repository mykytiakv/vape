idleTimer = null;
idleState = false; // состояние отсутствия
idleWait = 10000; // 1 минута - 60000 указать нужное время
 
$(document).ready( function(){
  $(document).bind('mousemove keydown scroll', function(){
    clearTimeout(idleTimer); // отменяем прежний временной отрезок
    if(idleState == true){ 
    }
 
    idleState = false;
    idleTimer = setTimeout(function(){ 
      // Действия на отсутствие пользователя
      $('.unload').removeClass('hidden');
      idleState = true; 
    }, idleWait);
  });
 
  $("body").trigger("mousemove"); // сгенерируем ложное событие, для запуска скрипта

  $('.unload').on('click', function(e) {
  	var unload = $('.unload')[0]
  	var unOver = $('#unload-over')[0];
  	var elem = e.target;
  	if (elem === unload || elem === unOver) {
  		$('.unload').addClass('hidden');
  		idleState = false;
  	}
  });

  // отправка формы

  $('#unload-form').submit(function(e) {
  	e.preventDefault();
  	var form = $('#unload-form');
  	var name = $(this).find('input[name="name"]')[0];
  	var phone = $(this).find('input[name="phone"]')[0];
  	var reg = /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/;

  	if (name.value.length < 1) {
  		$(name).addClass('is-invalid');
  		e.stopPropagation();
  	} else if (phone.value.match(reg) == null) {
  		$(name).removeClass('is-invalid');
  		$(phone).addClass('is-invalid');  		
  	} else {
  		$(name).removeClass('is-invalid');
  		$(phone).removeClass('is-invalid');
  		$('.unload').addClass('hidden');
  		// submit form here

  		// clear inputs
  		name.value = '';
  		phone.value = '';
  	}  	
  })
});
