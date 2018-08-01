var slider1 = document.getElementById('slider-range-1');
var slider2 = document.getElementById('slider-range-2');
// get slider values range slider1.noUiSlider.options
noUiSlider.create(slider1, {
	start: [1000, 1800],
	connect: true,
	step: 10,
	tooltips: true,
	range: {
		min: [0],
		max: [4000]
	},
	format: {
      to: function ( value ) {
        return value;
      },
      from: function ( value ) {
        return value;
      }
    }
});
noUiSlider.create(slider2, {
	start: [1000, 1800],
	connect: true,
	step: 10,
	tooltips: true,
	range: {
		min: [0],
		max: [4000]
	},
	format: {
      to: function ( value ) {
        return value;
      },
      from: function ( value ) {
        return value;
      }
    }
});
slider1.noUiSlider.on('change', function() {
    document.getElementById('slider-range-2').noUiSlider.updateOptions({start: slider1.noUiSlider.get() });
})
slider2.noUiSlider.on('change', function() {
    document.getElementById('slider-range-1').noUiSlider.updateOptions({start: slider2.noUiSlider.get() });
})

$(document).ready(function(){
    var isCookie = getCookie('filter_values');
    if (isCookie != '' && isCookie != undefined) {
        var cookies = JSON.parse(getCookie('filter_values'));
        for (var i = 0; i < cookies.length; i++) {
            if (cookies[i].key === 'range') {
                document.getElementById('slider-range-1').noUiSlider.updateOptions({start: cookies[i].value});
                document.getElementById('slider-range-2').noUiSlider.updateOptions({start: cookies[i].value});
            } else {
                var findInputs = $('body').find('input[name="' + cookies[i].key + '"]');
                if (findInputs != undefined || findInputs == '') {
                    for (var j = 0; j < findInputs.length; j++) {
                        $(findInputs[j]).prop('checked', cookies[i].value);
                    }
                }
            }                   
        }
    }
    
})

$('.filter input').change(function(e) {
    var elem = e.target;
    var findInputs = $('body').find('input[name="' + elem.name + '"]');    
    for (var j = 0; j < findInputs.length; j++) {
        $(findInputs[j]).prop('checked', elem.checked);
    }        
})


$('.reset-btn').click(function() {
    var range = [0, 0];
    var inputs = $('body').find('input');
    for (var j = 0; j < inputs.length; j++) {
        $(inputs[j]).prop('checked', false);
    }
    document.getElementById('slider-range-1').noUiSlider.updateOptions({start: range});
    document.getElementById('slider-range-2').noUiSlider.updateOptions({start: range});
    document.cookie = "filter_values=";
})

$('#sort-btn').click(function() {
    var filter = $('#lg-filter');
    ($(filter).hasClass('hide')) ? $(filter).removeClass('hide') : $(filter).addClass('hide');
    
    var inputs = $('#lg-filter').find('input');
    var sliderValues = document.getElementById('slider-range-1').noUiSlider.get();
    var data = [];
    data.push({'key': 'range', 'value': sliderValues })

    for (var i = 0; i < inputs.length; i++) {
        var val = (inputs[i].type === 'checkbox') ? inputs[i].checked : inputs[i].value;
        data.push({'key': inputs[i].name, 'value' : val })
    }    
    
    document.cookie = "filter_values=" + JSON.stringify(data);
})

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}
