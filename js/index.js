$(document).ready(function(){
    $('.tab-pane').hide();
    $('.defaultOpen').show();
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
            $(this).show();
        }
    });
});