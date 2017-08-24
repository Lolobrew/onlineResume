'use strict';


//doc ready
$(document).ready(function(){
    //$('.card').hide();
    $('.defaultOpen').fadeIn(2500);
    $('img').hide();
    //$('.card').slideDown(2500);
    $('img').fadeIn(3000);
});

//set active class when clicked on to display hidden info
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

//send email w/ nodemailer
$('#sendBtn').on('click', function(event){
    var from, subject, text;
      
        from = $('#email').val().trim();
        //console.log(from);
        subject = $("#title").val();
        //console.log(subject);
        text = $('#message').val();
        //console.log(text);

        text += "       ||  Sender: " + from;
        
        $('#emailMessage').html("Your email is sending, please wait...");

        $.get("https://jeffschultzresume.herokuapp.com/send", {from:from, subject:subject, text:text})
        .done(function(data) {
            console.log(data);
            $('#email').val("");
            $('#title').val("");
            $('#message').val("");
            $('#emailMessage').html("Your email has been sent. Thank you!");
            setTimeout(function(){
                $('#myModal').modal('toggle');
                $('#emailMessage').html("");
            }, 2000);
            
        });
        
});