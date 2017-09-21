$(document).ready(function(){
    
        //on click of caret, toggle navbar left and right
        $('#navbarIcon').on('click', function(e){
            if($('#navWrap').hasClass('slideOutLeft')){
                $('#navWrap').removeClass('slideOutLeft');
                $('#navWrap').addClass('slideInLeft');
                $('#navbarIcon').removeClass('fa-caret-right');
                $('#navbarIcon').addClass('fa-caret-left');
                $('#caretTab').removeClass('inactive');
                $('#caretTab').addClass('active');
            } else {
                $('#navWrap').removeClass('slideInLeft');
                $('#navWrap').addClass('slideOutLeft');
                $('#navbarIcon').removeClass('fa-caret-left active');
                $('#navbarIcon').addClass('fa-caret-right inactive');
                $('#caretTab').removeClass('active');
                $('#caretTab').addClass('inactive');
            }
        });
    });