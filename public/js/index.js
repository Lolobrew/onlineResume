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

    $('#btmPhoneNumberh2').hide();
    $('#btmEmailh2').hide();

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
        offset: '45%'
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
        offset: '45%'
    });


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


    $('#emailLink').on("click", function(e){
        e.preventDefault();
        $('#myModal').modal("show");
    });

    $('#emailBtmLink').on('click', function(e){
        e.preventDefault();
        $('#myModal').modal('show');
    })

    $('#sendBtn').on("click", function(e){
        e.preventDefault();
        sendEmail();
    });

    $('#phoneBtmLink').hover(function(){
        $('#btmPhoneNumberh2').show();
    }, function(){
        $('#btmPhoneNumberh2').hide();
    });

    $('#emailBtmLink').hover(function(){
        $('#btmEmailh2').show();
    }, function(){
        $('#btmEmailh2').hide();
    });

    $('#phoneBtmLink').on('click', function(){
        if(!$(this).hasClass("activeLink")){
            $(this).addClass("activeLink");
            $('#btmPhoneNumberh2').show();
        } else {
            $(this).removeClass('activeLink');
            $('#btmPhoneNumberh2').hide();
        }
    });


    /*var count = 0;

    var iArr = [$('#fbI'), $("#twitterI"), $("#githubI"), $("#linkedInI"), $("#stackOI")];

    function stopActive(count){
        if($('.fa').hasClass('active')){
            $('.fa').removeClass('active');
        };
 
    };


    function startActive(count){

        iArr[count].addClass("active");

        setTimeout(function(){
            stopActive(count);
        }, 4000);


    }
    
    startActive(count);*/
});