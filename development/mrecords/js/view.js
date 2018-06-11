$(document).ready(function(){
    $('#step1 li').click(function(){
        $('#step1').hide();
        page = $(this).attr('data');
        $('nav li').removeClass('active');
        $('nav li[data="'+page+'"]').addClass('active');
        $('#step2').show();
        $('.'+page).show();
    });

    $('nav li').click(function(){
        $('nav li').removeClass('active');
        $(this).addClass('active');
        page = $(this).attr('data');
        //console.log(page);
        $('section').hide();
        $('.'+page).show();
    });


    //vipid decode EX：8801010002 + 1603122705= 9404132708

var vipid = "9404132708";




});