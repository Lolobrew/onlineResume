$('#navbarIcon').on('click', function(e){
    if($('#navWrap').hasClass('navInactive')){
        $('#navWrap').removeClass('navInactive');
        $('#navWrap').addClass('navActive');
        $('#navbarIcon').removeClass('fa-caret-right');
        $('#navbarIcon').addClass('fa-caret-left');
    } else {
        $('#navWrap').removeClass('navActive');
        $('#navWrap').addClass('navInactive');
        $('#navbarIcon').removeClass('fa-caret-left');
        $('#navbarIcon').addClass('fa-caret-right');
    }
});

