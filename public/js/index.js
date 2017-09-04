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

    var picArray = ["../images/motorcycling.jpg", "../images/homebrewing.jpg", "../images/dogs.jpg", "../images/webdev.jpg", "../images/hiking.jpg" ];
    var wordArray = ["Motorcycling", "Homebrewing", "My Dogs", "Web Development", "Hiking"];
    var currentIndex = -1;



    /*var changeJumbo = setInterval(function(){
        currentIndex++;
        if (currentIndex >= picArray.length){
            currentIndex = 0;
        }
        var picState = picArray[currentIndex];
        var wordState = wordArray[currentIndex];
        function setJumboPic(picState, wordState){
            $('#mainJumbo').css('background-image', 'url('+ picState +')');
            $('#themeWord').html(wordState);
        }
        setJumboPic(picState, wordState);
    }, 8000);*/

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

    var waypoints = $('#typeWriter').waypoint(function(direction){

        if ($('#typeWriter').hasClass('typeWriter')){
            $('#typeWriter').empty();
            $('#typeWriter').removeClass('typeWriter');
            $('#typeWriter').addClass('typeWriter');
            $('#typeWriter').append("<h2 id='typeh1'>I'm a full stack developer in the Phoenix area.<br></h2>");
            setTimeout (function(){
                $('#typeWriter').append("<h2>That's pretty cool right?<br></h2>");
            }, 3000);
            setTimeout(function(){
                $('#typeWriter').append("<h2>For just a small donation of only $500,000,000<br></h2>");
            }, 6000);
            setTimeout(function(){
                $('#typeWriter').append("<h2>I can be yours today!</h2>");
            }, 9000);
           // $('#typeh1').text("Hi my name is Jeff, whatup yo!");
        }
    }, {
        offset: '25%'
    });
});