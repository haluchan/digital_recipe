$(document).ready(function() {

    var date = sessionStorage.getItem('DATE');
    var vipnm = sessionStorage.getItem('VIPNM');
    var vipids = sessionStorage.getItem('VIPIDS');
    var bcnm = sessionStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);

    sessionData();

    //mean跳轉
    var btn = $('.btn');
    if(sessionStorage.getItem('DRY') !== null){
        btn.siblings('ul').children('li:eq(0)').css('color','#000000');

        btn.siblings('ul').children('li:eq(0)').on('click touchstart',function (){
            location.href = 'maintain_01.html';
        });
    }
    if(sessionStorage.getItem('AIR_DRY') !== null){
        btn.siblings('ul').children('li:eq(1)').css('color','#000000');

        btn.siblings('ul').children('li:eq(1)').on('click touchstart',function (){
            location.href = 'maintain_02.html';
        });
    }
    if(sessionStorage.getItem('MOISTURIZING') !== null){
        btn.siblings('ul').children('li:eq(2)').css('color','#000000');

        btn.siblings('ul').children('li:eq(2)').on('click touchstart',function (){
            location.href = 'maintain_03.html';
        });
    }
    if(sessionStorage.getItem('canvasFace_3') !== null){
        btn.siblings('ul').children('li:eq(3)').css('color','#000000');
        btn.siblings('ul').children('li:eq(4)').css('color','#000000');

        btn.siblings('ul').children('li:eq(3)').on('click touchstart',function (){
            location.href = 'maintain_04.html';
        });
        btn.siblings('ul').children('li:eq(4)').on('click touchstart',function (){
            location.href = 'maintain_05.html';
        });
    }

});




//回首頁清暫存
$('.Back2Log').on('click',function () {
    sessionStorage.clear();
});



$('.next').on('click',function(){


    if(checkdata()){

        getdata();


        setTimeout(function () {
            window.open('maintain_03.html','_self');
        },300);

    }

});

$('.prev').on('click',function(){

    location.href = "maintain_01.html";
});

function sessionData() {

    var len = sessionStorage.length;
    for (var i = 0; i < len; i++) {

        var inputName = sessionStorage.key(i);
        var inputValue = sessionStorage.getItem(inputName);

        if(inputValue === "1"){

            var inputID = inputName.toLowerCase();
            $('#'+inputID+'').attr('checked','ckecked');

        }
    }



}

function checkdata(){
    var inside = 0,
        outside = 0;

    for (var i = 0; i < 4; i++) {

        if($('.outside > li > input')[i].checked === true){
            outside++
        }


        if($('.inside > li > input')[i].checked === true){
            inside++
        }

    }

    if(outside === 0){
        alert("請選擇外在因素");
        return false;
    }
    if(inside === 0){
        alert("請選擇內在因素");
        return false;
    }

    return true;
    
}

function getdata() {

    for (var i = 0; i < 8; i++) {

        var idName = $('input')[i].id;
        var name  = idName.toUpperCase();

        if($('input')[i].checked === true){

            sessionStorage.setItem(name,"1");
        }else{

            sessionStorage.setItem(name,"0");
        }

    }

    return true;

}
