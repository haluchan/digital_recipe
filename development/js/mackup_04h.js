$(function(){

    var date = sessionStorage.getItem('DATE');
    var vipnm = sessionStorage.getItem('VIPNM');
    var vipids= sessionStorage.getItem('VIPIDS');
    var bcnm = sessionStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);

    $('textarea').text(sessionStorage.MAKUP_TXT_C);

//mean跳轉
    var btn = $('.btn');
    if(sessionStorage.getItem('DRY') !== null || sessionStorage.getItem('OIL') !== null || sessionStorage.getItem('PORES') !== null || sessionStorage.getItem('ACEN') !== null || sessionStorage.getItem('DULL') !== null || sessionStorage.getItem('CB') !== null || sessionStorage.getItem('SOPTS') !== null || sessionStorage.getItem('DARK_CIRCLES') !== null || sessionStorage.getItem('TE') !== null || sessionStorage.getItem('WRINKLE') !== null || sessionStorage.getItem('SENSITIVE') !== null || sessionStorage.getItem('EYE_DULL') !== null || sessionStorage.getItem('EYE_EDEMA') !== null || sessionStorage.getItem('LIP_DULL') !== null || sessionStorage.getItem('MELLOW') !== null || sessionStorage.getItem('DIMENSION') !== null){
       btn.siblings('ul').children('li:eq(0)').css('color','#000000');

       btn.siblings('ul').children('li:eq(0)').on('click touchstart',function (){
            location.href = 'makeup_01.html';
        });
    }

    if(sessionStorage.getItem('canvasFace_0') !== null){
       btn.siblings('ul').children('li:eq(1)').css('color','#000000');

       btn.siblings('ul').children('li:eq(1)').on('click touchstart',function (){
            location.href = 'makeup_02.html';
        });
    }
    if(sessionStorage.getItem('canvasFace_2') !== null){
       btn.siblings('ul').children('li:eq(2)').css('color','#000000');
       btn.siblings('ul').children('li:eq(3)').css('color','#000000');

       btn.siblings('ul').children('li:eq(2)').on('click touchstart',function (){
            location.href = 'makeup_03.html';
        });
       btn.siblings('ul').children('li:eq(3)').on('click touchstart',function (){
            location.href = 'makeup_04.html';
        });
    }

});



$('.Back2Log').on('click',function () {
    sessionStorage.clear();
});


$('.next').on('click',function() {

    var textVal = $('textarea')[0].value;
    var regex = /[＆：]/gm;
    var m;
    if ((m = regex.exec(textVal)) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;

      }
      m.forEach(function(match) {
        alert('請勿使用'+ match +'字元');
      });
      return false;
    }
    sessionStorage.setItem('MAKUP_TXT_C',textVal);

    setTimeout(function () {

        window.open('preview_makeup.html','_self');

    },300);

});



$('.prev').on('click',function(){
    prevPage();
});
