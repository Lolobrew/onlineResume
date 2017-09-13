$(document).ready(function(){

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

    $('#aboutDiv').hide();

    function addBounce(){
        if($('#navWrap').hasClass('navInactive')){
            $('#navbarIcon').addClass('animated bounce');
        }
    };

    function removeBounce(){
        $('#navbarIcon').removeClass('animated bounce');
    };

    setInterval(function(){
        addBounce();
    }, 8000);
    setInterval(function(){
        removeBounce();
    }, 9000);

    var waypoint1 = $('#breakDiv1').waypoint(function(direction){

        if ($('#breakDiv1').hasClass('typeWriter')){
            $('#breakDiv1').removeClass('typeWriter');
            $('#breakDiv1').empty();
            $('#breakDiv1').addClass('typeWriter');
            $('#breakDiv1').append("<h2>About Me</h2>");
            setTimeout(function(){
                $('#breakDiv1').removeClass('typeWriter');
            }, 8000);
            $('#aboutDiv').show();
        }
    }, {
        offset: '60%'
    });

    var waypoint2 = $('#breakDiv2').waypoint(function(direction){
        if ($('#breakDiv2').hasClass('typeWriter')){
            $('#breakDiv2').removeClass('typeWriter');
            $('#breakDiv2').empty();
            $('#breakDiv2').addClass('typeWriter');
            $('#breakDiv2').append("<h2>Portfolio</h2>");
            setTimeout(function(){
                $('#breakDiv2').removeClass('typeWriter');
            }, 8000);
        }
    }, {
        offset: '32%'
    });

    var waypoint3 = $('#breakDiv3').waypoint(function(direction){
        if ($('#breakDiv3').hasClass('typeWriter')){
            $('#breakDiv3').removeClass('typeWriter');
            $('#breakDiv3').empty();
            $('#breakDiv3').addClass('typeWriter');
            $('#breakDiv3').append("<h2>Experience</h2>");
            setTimeout(function(){
                $('#breakDiv3').removeClass('typeWriter');
            }, 8000);
        }
    }, {
        offset: '32%'
    });


    var waypoint4 = $('#breakDiv4').waypoint(function(direction){
        if ($('#breakDiv4').hasClass('typeWriter')){
            $('#breakDiv4').removeClass('typeWriter');
            $('#breakDiv4').empty();
            $('#breakDiv4').addClass('typeWriter');
            $('#breakDiv4').append("<h2>Contact Me</h2>");
            setTimeout(function(){
                $('#breakDiv4').removeClass('typeWriter');
            }, 8000);
        }
    }, {
        offset: '35%'
    });
    
});