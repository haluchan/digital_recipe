$(document).ready(function(){

    var date = sessionStorage.getItem('DATE');
    var vipnm = sessionStorage.getItem('VIPNM');
    var vipids= sessionStorage.getItem('VIPIDS');
    var bcnm = sessionStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);

    sessionData();


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



$('.next').on('click',function(){

    if(document.querySelectorAll('input:checked').length < 1 ){
        alert("請至少選擇一項");

        return false;
    }else{
        saveSession(toNextPage);
    }



});



$('.prev').on('click',function(){

    location.href = "login.html";
});


function saveSession(callback) {

    var input = $('input');
    var iLength = input.length;


    for (var i = 0; i < iLength; i++) {

        var inputNm = input.eq(i).attr('name');
        var nmUp = inputNm.toUpperCase();


        if(input.eq(i).prop('checked') === true){

            sessionStorage.setItem(nmUp,"1");
        }else{
            sessionStorage.setItem(nmUp,"0");
        }

    }

    if(typeof callback === "function") callback();
}

function toNextPage() {
    location.href = "makeup_02.html";
}


function sessionData() {

    var input = $('input');
    var lsLength = sessionStorage.length;
    var inLength = input.length;

    for (var i = 0; i < lsLength; i++) {
        var Nm = sessionStorage.key(i);
        var lowNm = Nm.toLocaleLowerCase();
        for (var j = 0; j < inLength; j++) {

            if(input.eq(j).attr('name') === lowNm){

                if(sessionStorage.getItem(Nm) === "1")

                input.eq(j).prop('checked','true');
            }
        }
    }
}