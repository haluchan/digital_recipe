$(document).ready(function() {
    $('img').parent().css('font-size', 0);

    var winW = window.screen.width,
        winH = window.screen.height,
        winw = $(window).width(),
        winh = $(window).height();

    var page = $('body').attr('page');


    $('#mo-size').text('螢幕尺寸：寬度' + winW + ' px, 高度：' + winH + ' px');
    $('#browser-size').text('Browser：' + winw + ' px * ' + winh + ' px');


    //Menu
    $('#content').addClass('menu-close');
    $('#menu .btn').click(function() {
        if ($('#menu').hasClass('menu-open')) {
            $('#menu').removeClass('menu-open');
            $('#menu').animate({ 'margin-left': "-200px" }, 300);
            $('#content').animate({ 'margin-right': "100px" }, 300);
        } else {
            $('#menu').addClass('menu-open');
            $('#menu').animate({ 'margin-left': "0px" }, 300);
            $('#content').animate({ 'margin-right': "0px" }, 300);
        }
    });

    // $('.next').click(function(){
    //     nextPage();
    // });
    //
    // $('.prev').click(function(){
    //     prevPage();
    // });

});

var page = $('body').attr('page');

function nextPage(){
    switch(page){
        case 'makeup_01':
            window.open('makeup_02.html','_self');
            break;

        case 'makeup_02':
            window.open('makeup_03.html','_self');
            break;

        case 'makeup_03':
            window.open('makeup_04.html','_self');
            break;

        case 'makeup_04':

            break;

        case 'maintain_01':
            window.open('maintain_02.html','_self');
            break;

        case 'maintain_02':
            window.open('maintain_03.html','_self');
            break;

        case 'maintain_03':
            window.open('maintain_04.html','_self');
            break;

        case 'maintain_04':
            window.open('maintain_05.html','_self');
            break;

        case 'maintain_05':

            break;

        default:

    }
}


function prevPage(){
    switch(page){
        case 'makeup_01':

            break;

        case 'makeup_02':
            window.open('makeup_01.html','_self');
            break;

        case 'makeup_03':
            window.open('makeup_02.html','_self');
            break;

        case 'makeup_04':
            window.open('makeup_03.html','_self');
            break;

        case 'maintain_01':

            break;

        case 'maintain_02':
            window.open('maintain_01.html','_self');
            break;

        case 'maintain_03':
            window.open('maintain_02.html','_self');
            break;

        case 'maintain_04':
            window.open('maintain_03.html','_self');
            break;

        case 'maintain_05':
            window.open('maintain_04.html','_self');
            break;

        default:

    }
}