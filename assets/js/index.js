'use strict';
//nodemailer
const nodemailer = require('nodemailer');

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
    var senderAddress = $('#email').val().trim();
    console.log(senderAddress);
    var title = $("#title").val();
    console.log(title);
    var message = $('#message').val();
    console.log(message);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // secure:true for port 465, secure:false for port 587
        auth: {
            user: 'jsonlineresume@gmail.com',
            pass: 'Asimplepass4me!'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: senderAddress, // sender address
        to: 'jeffschultz.js@gmail.com', // list of receivers
        subject: title, // Subject line
        text: message, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    }); 

    $('#email').val('');
    $('#title').val('');
    $('#message').val('');

    $('#myModal').modal('toggle');
    return false;
});