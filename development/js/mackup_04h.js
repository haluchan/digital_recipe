$(document).ready(function(){

    var date = localStorage.getItem('DATE');
    var vipnm = localStorage.getItem('VIPNM');
    var vipids= localStorage.getItem('VIPIDS');
    var bcnm = localStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);

    $('textarea').text(localStorage.MAKUP_TXT_C);

//mean跳轉跳
    if(localStorage.getItem('DRY') !== null || localStorage.getItem('OIL') !== null || localStorage.getItem('PORES') !== null || localStorage.getItem('ACEN') !== null || localStorage.getItem('DULL') !== null || localStorage.getItem('CB') !== null || localStorage.getItem('SOPTS') !== null || localStorage.getItem('DARK_CIRCLES') !== null || localStorage.getItem('TE') !== null || localStorage.getItem('WRINKLE') !== null || localStorage.getItem('SENSITIVE') !== null || localStorage.getItem('EYE_DULL') !== null || localStorage.getItem('EYE_EDEMA') !== null || localStorage.getItem('LIP_DULL') !== null || localStorage.getItem('MELLOW') !== null || localStorage.getItem('DIMENSION') !== null){
        $('.btn').siblings('ul').children('li:eq(0)').css('color','#000000');

        $('.btn').siblings('ul').children('li:eq(0)').on('click touchstart',function (){
            location.href = 'makeup_01.html';
        });
    }

    if(localStorage.getItem('canvasFace_0') !== null){
        $('.btn').siblings('ul').children('li:eq(1)').css('color','#000000');

        $('.btn').siblings('ul').children('li:eq(1)').on('click touchstart',function (){
            location.href = 'makeup_02.html';
        });
    }
    if(localStorage.getItem('canvasFace_2') !== null){
        $('.btn').siblings('ul').children('li:eq(2)').css('color','#000000');
        $('.btn').siblings('ul').children('li:eq(3)').css('color','#000000');

        $('.btn').siblings('ul').children('li:eq(2)').on('click touchstart',function (){
            location.href = 'makeup_03.html';
        });
        $('.btn').siblings('ul').children('li:eq(3)').on('click touchstart',function (){
            location.href = 'makeup_04.html';
        });
    }

});



$('.Back2Log').on('click',function () {
    localStorage.clear();
});


$('.next').on('click',function() {

    var textVal = $('textarea')[0].value;
    localStorage.setItem('MAKUP_TXT_C',textVal);

    setTimeout(function () {

        window.open('preview_makeup.html','_self');

    },300);

});



$('.prev').on('click',function(){
    prevPage();
});
