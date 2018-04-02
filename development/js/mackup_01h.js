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
    }

    for (var i = 0; i < 5; i++) {

        var LDemand = $('.LDemand');

        if(LDemand[i].checked === true){

            console.log(LDemand.siblings('.sub').children('select')[i].value);

            if(LDemand.siblings('.sub').children('select')[i].value === "0"){
                alert("請選擇內容");
                return false;

            }

        }

    }

    if(LDemand[5].checked === true){

        if(LDemand.siblings('.sub').children('input')[0].value === ""){
            alert("請填寫內容");
            return false;
        }

    }

    if(LDemand[6].checked === true){

        if(LDemand.siblings('.sub').children('select')[5].value === "0"){
            alert("請選擇內容");
            return false;
        }

    }

    if(LDemand[7].checked === true){

        if(LDemand.siblings('.sub').children('select')[6].value === "0"){
            alert("請選擇內容");
            return false;
        }

    }

    if(LDemand[8].checked === true){

        if(LDemand.siblings('.sub').children('input')[1].value === ""){
            alert("請填寫內容");
            return false;
        }

    }

    if(LDemand[9].checked === true){

        if(LDemand.siblings('.sub').children('select')[7].value === "0"){
            alert("請選擇內容");
            return false;
        }

    }
    if(LDemand[10].checked === true){

        if(LDemand.siblings('.sub').children('select')[8].value === "0"){
            alert("請選擇內容");
            return false;
        }

    }

    skinLDemand(skinRDemand);

    location.href = "makeup_02.html";

});



$('.prev').on('click',function(){

    location.href = "login.html";
});









function skinLDemand(callback) {
    for (var i = 0; i < 9; i++) {

        var key = document.querySelectorAll('select')[i].attributes[0].value;
        var value = document.querySelectorAll('option:checked')[i].value;
        localStorage.setItem(key.toUpperCase(), value);


        if(i === 4){
            var cb = document.querySelectorAll('input')[6].attributes[1].value;
            var cbValue = document.querySelectorAll('input')[6].value;
            localStorage.setItem(cb.toUpperCase(), cbValue);

        }
        if(i === 6){
            var te = document.querySelectorAll('input')[10].attributes[1].value;
            var teValue = document.querySelectorAll('input')[10].value;
            localStorage.setItem(te.toUpperCase(), teValue);
        }

    }

    callback();

}

function skinRDemand() {

    for (var i = 13; i < 18; i++) {

        if(i > 12){
            var key = document.querySelectorAll('input')[i].name;

            if(document.querySelectorAll('input')[i].checked){
                var inputValueT = "1";
                localStorage.setItem(key.toUpperCase(), inputValueT);
            }else{
                var inputValueF = "0";
                localStorage.setItem(key.toUpperCase(), inputValueF);
            }

        }

    }

}


function sessionData() {

    var LDemand = $('.LDemand');

    if(localStorage.DRY !== undefined && localStorage.DRY !== "0"){

        var item0 = $('#0');

       item0.attr('checked','checked');

        var tmpdry = localStorage.getItem('DRY');

        switch(tmpdry) {

            case "55":
                LDemand.siblings('.sub').children('select')[0].value = "55";
                break;
            case "56":
                LDemand.siblings('.sub').children('select')[0].value = "56";
                break;
        }

       item0.siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.OIL !== undefined && localStorage.OIL !== "0"){

        var item1 = $('#1');

       item1.attr('checked','checked');

        var tmpoil = localStorage.getItem('OIL');

        switch(tmpoil) {
            case "57":
                LDemand.siblings('.sub').children('select')[1].value = "57";
                break;
        }

       item1.siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.PORES !== undefined && localStorage.PORES !== "0"){

        var item2 = $('#2');

       item2.attr('checked','checked');

        var tmppores = localStorage.getItem('PORES');

        switch(tmppores) {
            case "58":
                LDemand.siblings('.sub').children('select')[2].value = "58";
                break;
            case "59":
                LDemand.siblings('.sub').children('select')[2].value = "59";
                break;
        }

       item2.siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.ACEN !== undefined && localStorage.ACEN !== "0"){

        var item3 = $('#3');

        item3.attr('checked','checked');

        var tmpacen = localStorage.getItem('ACEN');

        switch(tmpacen) {
            case "60":
                LDemand.siblings('.sub').children('select')[3].value = "60";
                break;

        }

        item3.siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.DULL !== undefined && localStorage.DULL !== "0"){

        var item4 = $('#4');

        item4.attr('checked','checked');

        var tmpdull = localStorage.getItem('DULL');

        switch(tmpdull) {
            case "61":
                LDemand.siblings('.sub').children('select')[4].value = "61";
                break;
            case "62":
                LDemand.siblings('.sub').children('select')[4].value = "62";
                break;
        }

        item4.siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.CB !== undefined && localStorage.CB !== ""){

        var item5 = $('#5');

        item5.attr('checked','checked');

        var tmpcb = localStorage.getItem('CB');


        LDemand.siblings('.sub').children('input')[0].value = tmpcb;


        item5.siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.SPOTS !== undefined && localStorage.SPOTS !== "0"){

        var item6 = $('#6');

        item6.attr('checked','checked');

        var tmpspots = localStorage.getItem('SPOTS');

        switch(tmpspots) {
            case "63":
                LDemand.siblings('.sub').children('select')[5].value = "63";
                break;
        }

        item6.siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.DARK_CIRCLES !== undefined && localStorage.DARK_CIRCLES !== "0"){

        var item7 = $('#7');

        item7.attr('checked','checked');

        var tmpdark_circles = localStorage.getItem('DARK_CIRCLES');

        switch(tmpdark_circles) {
            case "64":
                LDemand.siblings('.sub').children('select')[6].value = "64";
                break;

        }

        item7.siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.TE !== undefined && localStorage.TE !== ""){

        var item8 = $('#8');

        item8.attr('checked','checked');

        var tmpte = localStorage.getItem('TE');


        LDemand.siblings('.sub').children('input')[1].value = tmpte;


        item8.siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.WRINKLE !== undefined && localStorage.WRINKLE !== "0"){

        var item9 = $('#9');

        item9.attr('checked','checked');

        var tmpwrinkle = localStorage.getItem('WRINKLE');

        switch(tmpwrinkle) {

            case "65":
                LDemand.siblings('.sub').children('select')[7].value = "65";
                break;
            case "66":
                LDemand.siblings('.sub').children('select')[7].value = "66";
                break;
        }

        item9.siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.SENSITIVE !== undefined && localStorage.SENSITIVE !== "0"){

        var item10 = $('#10');

        item10.attr('checked','checked');

        var tmpsensitive = localStorage.getItem('SENSITIVE');

        switch(tmpsensitive) {
            case "67":
                LDemand.siblings('.sub').children('select')[8].value = "67";
                break;

        }

        item10.siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.EYE_EDEMA === "1"){

        $('#11').attr('checked','checked');

    }

    if(localStorage.EYE_DULL === "1"){

        $('#12').attr('checked','checked');

    }

    if(localStorage.LIP_DULL === "1"){

        $('#13').attr('checked','checked');

    }

    if(localStorage.MELLOW === "1"){

        $('#14').attr('checked','checked');

    }

    if(localStorage.DIMENSION === "1"){

        $('#15').attr('checked','checked');

    }

}