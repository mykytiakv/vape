$('.mr-btn').click(function(e) {
    var parent = ($(e.target).hasClass('mr-btn')) ? e.target : $(e.target).closest('.mr-btn');
    $('.mr-btn').empty();
    if ($(parent).hasClass('o')) {
        $(parent).removeClass('o');
        // $('.how-info').css({'height': '200px'});
        $('.how-info').removeClass('big');
        $('.how-gradient').css({'display': 'block'});
        $(parent).append('<span class="circle-plus"><i class="material-icons">add</i></span><br>Читать больше');
    } else {
        $(parent).addClass('o');        
        // $('.how-info').css({'height': '100%'});
        $('.how-info').addClass('big');
        $('.how-gradient').css({'display': 'none'});
        $(parent).append('<span class="circle-plus"><i class="material-icons">remove</i></span><br>Читать меньше');
    }	
})
$('#filter-button').click(function() {
	document.getElementById("mobile-filter").style.width = "250px";
});

$('.filter-type li').click(function(e) {
    var checkbox = $(e.target).find('input');
    $(checkbox).prop('checked', !$(checkbox).is(':checked'));
})

$('#unload-form').submit(function(e) {
    e.preventDefault();
    console.log('send form');
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
