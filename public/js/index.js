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
            $('#typeWriter').removeClass('typeWriter');
            $('#typeWriter').addClass('typeWriter');
            $('#typeWriter').append("<h1 id='typeh1'>Yo What Up, my name is Jeff!</h1>");
           // $('#typeh1').text("Hi my name is Jeff, whatup yo!");
        }
    }, {
        offset: '25%'
    });
});