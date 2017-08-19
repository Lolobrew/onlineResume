$(document).ready(function(){
    //$('.card').hide();
    $('.defaultOpen').fadeIn(2500);
    $('img').hide();
    //$('.card').slideDown(2500);
    $('img').fadeIn(3000);
});

$('.tablinks').on('click', function(){
    var link = $(this).attr('id');
    $('.tablinks').each(function(){
        if ($(this).attr('id') !== link){
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.tab-pane').each(function(){
        if ($(this).attr('id') !== link){
            $(this).hide();
        } else {
            //$(this).show();
            $(this).addClass("animated fadeInDown");
            $(this).show();
        }
    });
});