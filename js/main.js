$('.mr-btn').click(function(e) {
    var parent = ($(e.target).hasClass('mr-btn')) ? e.target : $(e.target).closest('.mr-btn');
    $('.mr-btn').empty();
    if ($(parent).hasClass('open')) {
        $(parent).removeClass('open');
        // $('.how-info').css({'height': '200px'});
        $('.how-info').removeClass('big');
        $('.how-gradient').css({'display': 'block'});
        $(parent).append('<span class="circle-plus"><i class="fa fa-plus" aria-hidden="true"></i></span><br>Читать больше');
    } else {
        $(parent).addClass('open');        
        // $('.how-info').css({'height': '100%'});
        $('.how-info').addClass('big');
        $('.how-gradient').css({'display': 'none'});
        $(parent).append('<span class="circle-plus"><i class="fa fa-minus" aria-hidden="true"></i></span><br>Читать меньше');
    }	
})
$('#filter-button').click(function() {
	document.getElementById("mobile-filter").style.width = "250px";
});

$('.filter-type li').click(function(e) {
    var checkbox = $(e.target).find('input');
    $(checkbox).prop('checked', !$(checkbox).is(':checked'));
})

function closeNav() {
    document.getElementById("mobile-filter").style.width = "0";
}

$(document).ready(function(){
    $("#toTop").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
});

$('#sort-btn').click(function() {
    var filter = $('#lg-filter');
    ($(filter).hasClass('hide')) ? $(filter).removeClass('hide') : $(filter).addClass('hide');
})