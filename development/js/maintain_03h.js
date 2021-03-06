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


    $(".daily_2 > li > input[type*='checkbox']").on('change',function () {
        if($(this).prop('checked') === false){
            $(this).siblings("input[type*='text']").val('');
        }

    });

    $(".basic > li > input[type*='checkbox']").on('change',function () {

        if($(this).prop('checked') === false){
            $(this).siblings("input[type*='text']").val('');
        }

    });


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
            window.open('maintain_04.html','_self');
        },300);

    }

});

$('.prev').on('click',function(){

    location.href = "maintain_02.html";
});






function sessionData() {

    var len = sessionStorage.length;
    for (var i = 0; i < len; i++) {

        var sessionName = sessionStorage.key(i);
        var dailyLen = $(".L > .daily > li > input[type*='checkbox']").length;

        for (var j = 0; j < dailyLen; j++) {

            var idName =$(".L > .daily > li > input[type*='checkbox']")[j].id;
            var idUName = idName.toUpperCase();
            if(sessionName === idUName) {

                if(sessionStorage.getItem(sessionName) === "1"){

                $(".L > .daily > li > input[type*='checkbox']")[j].value = sessionStorage.getItem(sessionName);
                $(".L > .daily > li > input[type*='checkbox']")[j].checked = true;

                }
            }
        }


        var daily2Len = $(".R > .daily_2 > li > input[type*='checkbox']").length;
        for (var k = 0; k < daily2Len; k++) {

            var idName =$(".R > .daily_2 > li > input[type*='checkbox']")[k].id;
            var idUName = idName.toUpperCase();
            if(sessionName === idUName){

                if(sessionStorage.getItem(sessionName) === "1") {

                    $(".R > .daily_2 > li > input[type*='checkbox']")[k].value = sessionStorage.getItem(sessionName);
                    $(".R > .daily_2 > li > input[type*='checkbox']")[k].checked = true;
                }
            }
        }




        var otherName = $(".R > .daily_2 > li > input[type*='text']")[0].id;
        var otherUName = otherName.toUpperCase();
        if(sessionName === otherUName){
            $(".R > .daily_2 > li > input[type*='text']")[0].value = sessionStorage.getItem(sessionName);
            if($(".R > .daily_2 > li > input[type*='text']").siblings("input[type*='checkbox']")[0].checked === true){
                $(".R > .daily_2 > li > input[type*='text']")[0].setAttribute("style", "display : block;");
            }

        }


        var bascLen = $(".R > .basic > li > input[type*='checkbox']").length;
        for (var l = 0; l < bascLen; l++) {

            var idName =$(".R > .basic > li > input[type*='checkbox']")[l].id;
            var idUName = idName.toUpperCase();
            if(sessionName === idUName){

                if(sessionStorage.getItem(sessionName) === "1") {
                    $(".R > .basic > li > input[type*='checkbox']")[l].value = sessionStorage.getItem(sessionName);
                    $(".R > .basic > li > input[type*='checkbox']")[l].checked = true;
                }
            }

            var idName =$(".R > .basic > li > input[type*='text']")[l].id;
            var idUName = idName.toUpperCase();
            if(sessionName === idUName){
                $(".R > .basic > li > input[type*='text']")[l].value = sessionStorage.getItem(sessionName);

                if($(".R > .basic > li > input[type*='text']").siblings("input[type*='checkbox']")[l].checked === true){
                    $(".R > .basic > li > input[type*='text']")[l].setAttribute("style", "display : block;");
                }
            }

        }


        var selectName =  $('select')[0].name;
        var selectUName = selectName.toUpperCase();
        if(sessionName === selectUName){
            $('select')[0].value = sessionStorage.getItem(sessionName);
        }

    }
}

function getdata() {

    for (var i = 0; i < 11; i++) {

        if($('.daily > li > input')[i].checked === true){

            var idName = $('.daily > li > input')[i].id;
            var name  = idName.toUpperCase();
            sessionStorage.setItem(name,"1");
        }else{
            var idName = $('.daily > li > input')[i].id;
            var name  = idName.toUpperCase();
            sessionStorage.setItem(name,"0");
        }

    }

    for (var j = 0; j < 2; j++) {


        if($('.daily_2 > li > input')[j].checked === true){

            var idName = $('.daily_2 > li > input')[j].id;
            var name  = idName.toUpperCase();
            sessionStorage.setItem(name,"1");
        }else{
            var idName = $('.daily_2 > li > input')[j].id;
            var name  = idName.toUpperCase();
            sessionStorage.setItem(name,"0");
        }

    }

        var idName = $('.daily_2 > li > input')[2].id;
        var idValue = $('.daily_2 > li > input')[2].value;
        var name  = idName.toUpperCase();

        sessionStorage.setItem(name,idValue);


    for (var l = 0; l < 7; l++) {

        if($('.basic > li > input[type*="checkbox"]')[l].checked === true){

            var idName = $('.basic > li > input[type*="checkbox"]')[l].id;
            var name  = idName.toUpperCase();
            sessionStorage.setItem(name,"1");
        }else{
            var idName = $('.basic > li > input[type*="checkbox"]')[l].id;
            var name  = idName.toUpperCase();
            sessionStorage.setItem(name,"0");
        }

        var idName = $('.basic > li > input[type*="text"]')[l].id;
        var idValue = $('.basic > li > input[type*="text"]')[l].value;
        var name  = idName.toUpperCase();

        sessionStorage.setItem(name,idValue);

    }

    var sName = $('select').attr('name');
    var sUName = sName.toUpperCase();
    var sValue = $('select')[0].value;

    sessionStorage.setItem(sUName,sValue);

    return true;

}

function checkdata() {

    var basc = 0;

    var bascLen = $(".R > .basic > li > input[type*='checkbox']").length;
    for (var i = 0; i < bascLen; i++) {

        if($(".R > .basic > li > input[type*='checkbox']")[i].checked === true){
            basc++;
        }
    }


    var daily = 0;

    var dailyLen = $(".L > .daily > li > input[type*='checkbox']").length;
    for (var j = 0; j < dailyLen; j++) {

        if($(".L > .daily > li > input[type*='checkbox']")[j].checked === true){
            daily++;
        }
    }

    var daily2 = 0;

    var daily2Len = $(".R > .daily_2 > li > input[type*='checkbox']").length;

    for (var k = 0; k < daily2Len; k++) {
        if($(".R > .daily_2 > li > input[type*='checkbox']")[k].checked === true){
            daily2++
        }
    }

    
    var totaldaily = daily + daily2;


    if(totaldaily === 0){
        alert("請選擇日常保養");
        return false;
    }

    if(basc === 0){
        alert("請選擇基礎底妝");
        return false;
    }

    if($('select')[0].value === "0"){
        alert("請選擇保養滿意度");
        return false;
    }

    return true;
}



