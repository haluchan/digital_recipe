$(document).ready(function(){

    var date = localStorage.getItem('DATE');
    var vipnm = localStorage.getItem('VIPNM');
    var vipids= localStorage.getItem('VIPIDS');
    var bcnm = localStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);

    sessionData();


    //mean跳轉
    var btn = $('.btn');
    if(localStorage.getItem('DRY') !== null || localStorage.getItem('OIL') !== null || localStorage.getItem('PORES') !== null || localStorage.getItem('ACEN') !== null || localStorage.getItem('DULL') !== null || localStorage.getItem('CB') !== null || localStorage.getItem('SOPTS') !== null || localStorage.getItem('DARK_CIRCLES') !== null || localStorage.getItem('TE') !== null || localStorage.getItem('WRINKLE') !== null || localStorage.getItem('SENSITIVE') !== null || localStorage.getItem('EYE_DULL') !== null || localStorage.getItem('EYE_EDEMA') !== null || localStorage.getItem('LIP_DULL') !== null || localStorage.getItem('MELLOW') !== null || localStorage.getItem('DIMENSION') !== null){
        btn.siblings('ul').children('li:eq(0)').css('color','#000000');

        btn.siblings('ul').children('li:eq(0)').on('click touchstart',function (){
            location.href = 'makeup_01.html';
        });
    }

    if(localStorage.getItem('canvasFace_0') !== null){
        btn.siblings('ul').children('li:eq(1)').css('color','#000000');

        btn.siblings('ul').children('li:eq(1)').on('click touchstart',function (){
            location.href = 'makeup_02.html';
        });
    }
    if(localStorage.getItem('canvasFace_2') !== null){
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
    localStorage.clear();
});



$('.next').on('click',function(){

    if(document.querySelectorAll('input:checked').length < 1 ){
        alert("請至少選擇一項");

        return false;
    }else{
        saveSession(toNextPage());
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

            localStorage.setItem(nmUp,"1");
        }else{
            localStorage.setItem(nmUp,"0");
        }

    }

    callback;
}

function toNextPage() {
    location.href = "makeup_02.html";
}


function sessionData() {

    var input = $('input');
    var lsLength = localStorage.length;
    var inLength = input.length;

    for (var i = 0; i < lsLength; i++) {
        var Nm = localStorage.key(i);
        var lowNm = Nm.toLocaleLowerCase();
        for (var j = 0; j < inLength; j++) {

            if(input.eq(j).attr('name') === lowNm){

                if(localStorage.getItem(Nm) === "1")

                input.eq(j).prop('checked','true');
            }
        }
    }
}