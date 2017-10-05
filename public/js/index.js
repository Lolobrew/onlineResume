$(document).ready(function(){

    //on click of caret, toggle navbar left and right
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

    //hide divs to display phone number, email, resume
    $('#btmPhoneNumberh2').hide();
    $('#btmEmailh2').hide();
    $('#pdfBtmh2').hide();

    //bounce caret for visibility
    function addBounce(){
        if($('#navWrap').hasClass('navInactive')){
            $('#navbarIcon').addClass('animated bounce');
        }
    };

    //stop caret bounce
    function removeBounce(){
        $('#navbarIcon').removeClass('animated bounce');
    };

    //timer for caret
    setInterval(function(){
        addBounce();
    }, 8000);
    setInterval(function(){
        removeBounce();
    }, 9000);

    //breakDiv1
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

    //breakDiv2
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
        offset: '45%'
    });

    //breakDiv3
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
        offset: '60%'
    });

    //breakDiv4
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
        offset: '60%'
    });

    //function to send Email w/ get request
    function sendEmail(){
        var from = $('#from').val().trim();
        var subject = $('#subject').val()
        var text = $('#message').val() + "     || Sender address:    " + from + "   ||  ";
        $.get("/send",{from:from,subject:subject,text:text},function(data){
            
            if (data =="sent")
            {
                alert("Your email has been sent!");
            } else if (data == "error"){
                alert("There was an error sending your email, please try again.");
            }
        }).done(function(data){
            $('#from').val("");
            $('#subject').val("");
            $('#message').val("");
        });
        $('#myModal').modal("toggle");
    }

    //show modal on click
    $('#emailLink').on("click", function(e){
        e.preventDefault();
        $('#myModal').modal("show");
    });

    //show modal on click
    $('#emailBtmLink').on('click', function(e){
        e.preventDefault();
        $('#myModal').modal('show');
    })

    //send email on click
    $('#sendBtn').on("click", function(e){
        e.preventDefault();
        sendEmail();
    });

    //show phone number on hover
    $('#phoneBtmLink').hover(function(){
        $('#btmPhoneNumberh2').show();
    }, function(){
        $('#btmPhoneNumberh2').hide();
    });

    //show email address on hover
    $('#emailBtmLink').hover(function(){
        $('#btmEmailh2').show();
    }, function(){
        $('#btmEmailh2').hide();
    });

    //show 'my resume' on hover
    $('#pdfBtmLink').hover(function(){
        $('#pdfBtmh2').show();
    }, function(){
        $('#pdfBtmh2').hide();
    });


    function scrolling(division){
        $('html, body').animate({
            scrollTop: division.offset().top
        }, 100);
        $('#navWrap').removeClass('navActive');
        $('#navWrap').addClass('navInactive'); 
        $('#navbarIcon').removeClass('fa-caret-left');
        $('#navbarIcon').addClass('fa-caret-right');
    }


    //click on nav link, scroll to top
    $("#top").on("click", function( e ) {        
        e.preventDefault();        
        scrolling($('#mainJumbo'));
    });

    //click on nav link, scroll to about me
    $("#about").on("click", function( e ) {        
        e.preventDefault();        
        scrolling($('#jumboTwo'));
    });

    //click on nav link, scroll to portfolio
    $("#portfolio").on("click", function( e ) {        
        e.preventDefault();        
        scrolling($('#jumboThree'));
    });

    //click on nav link, scroll to experience
    $("#experience").on("click", function( e ) {        
        e.preventDefault();        
        scrolling($('#jumboFour'));
    });

    //click on nav link, scroll to contact
    $("#contact").on("click", function( e ) {        
        e.preventDefault();        
        scrolling($('#jumboFive'));
    });

//closing brackets
});