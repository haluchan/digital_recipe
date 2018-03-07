$(document).ready(function(){

    var date = localStorage.getItem('DATE');
    var vipnm = localStorage.getItem('VIPNM');
    var vipids= localStorage.getItem('VIPIDS');
    var bcnm = localStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);




        tmpData();



});

$('.Back2Log').on('click',function () {
    localStorage.clear();
});



$('.next').on('click',function(){
// document.querySelectorAll('select')[0].attributes[0].value;
// document.querySelectorAll('option:checked')[3].value;
    if(document.querySelectorAll('input:checked').length < 1 ){
        alert("請至少選擇一項");

        return false;
    }


    for (var i = 0; i < 5; i++) {

        if($('.LDemand')[i].checked === true){


            console.log($('.LDemand').siblings('.sub').children('select')[i].value);

            if($('.LDemand').siblings('.sub').children('select')[i].value === "0"){
                alert("請選擇內容");
                return false;

            }

        }

    }

    if($('.LDemand')[5].checked === true){

        if($('.LDemand').siblings('.sub').children('input')[0].value === ""){
            alert("請填寫內容");
            return false;
        }

    }

    if($('.LDemand')[6].checked === true){

        if($('.LDemand').siblings('.sub').children('select')[5].value === "0"){
            alert("請選擇內容");
            return false;
        }

    }

    if($('.LDemand')[7].checked === true){

        if($('.LDemand').siblings('.sub').children('select')[6].value === "0"){
            alert("請選擇內容");
            return false;
        }

    }

    if($('.LDemand')[8].checked === true){

        if($('.LDemand').siblings('.sub').children('input')[1].value === ""){
            alert("請填寫內容");
            return false;
        }

    }

    if($('.LDemand')[9].checked === true){

        if($('.LDemand').siblings('.sub').children('select')[7].value === "0"){
            alert("請選擇內容");
            return false;
        }

    }
    if($('.LDemand')[10].checked === true){

        if($('.LDemand').siblings('.sub').children('select')[8].value === "0"){
            alert("請選擇內容");
            return false;
        }

    }

    skinLDemand(skinRDemand);

    // alert('ok');

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
                var inputValue = "1";
                localStorage.setItem(key.toUpperCase(), inputValue);
            }else{
                var inputValue = "0";
                localStorage.setItem(key.toUpperCase(), inputValue);
            }

        }

    }

}


function tmpData() {

    if(localStorage.DRY !== undefined && localStorage.DRY !== "0"){



        $('#0').attr('checked','checked');

        var tmpdry = localStorage.getItem('DRY');

        switch(tmpdry) {
            case "55":
                $('.LDemand').siblings('.sub').children('select')[0].value = "55";
                break;
            case "56":
                $('.LDemand').siblings('.sub').children('select')[0].value = "56";
                break;
        }

        $('#0').siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.OIL !== undefined && localStorage.OIL !== "0"){

        $('#1').attr('checked','checked');

        var tmpoil = localStorage.getItem('OIL');

        switch(tmpoil) {
            case "57":
                $('.LDemand').siblings('.sub').children('select')[1].value = "57";
                break;
        }

        $('#1').siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.PORES !== undefined && localStorage.PORES !== "0"){

        $('#2').attr('checked','checked');

        var tmppores = localStorage.getItem('PORES');

        switch(tmppores) {
            case "58":
                $('.LDemand').siblings('.sub').children('select')[2].value = "58";
                break;
            case "59":
                $('.LDemand').siblings('.sub').children('select')[2].value = "59";
                break;
        }

        $('#2').siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.ACEN !== undefined && localStorage.ACEN !== "0"){

        $('#3').attr('checked','checked');

        var tmpacen = localStorage.getItem('ACEN');

        switch(tmpacen) {
            case "60":
                $('.LDemand').siblings('.sub').children('select')[3].value = "60";
                break;

        }

        $('#3').siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.DULL !== undefined && localStorage.DULL !== "0"){

        $('#4').attr('checked','checked');

        var tmpdull = localStorage.getItem('DULL');

        switch(tmpdull) {
            case "61":
                $('.LDemand').siblings('.sub').children('select')[4].value = "61";
                break;
            case "62":
                $('.LDemand').siblings('.sub').children('select')[4].value = "62";
                break;
        }

        $('#4').siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.CB !== undefined && localStorage.CB !== ""){

        $('#5').attr('checked','checked');

        var tmpcb = localStorage.getItem('CB');


        $('.LDemand').siblings('.sub').children('input')[0].value = tmpcb;


        $('#5').siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.SPOTS !== undefined && localStorage.SPOTS !== "0"){

        $('#6').attr('checked','checked');

        var tmpspots = localStorage.getItem('SPOTS');

        switch(tmpspots) {
            case "63":
                $('.LDemand').siblings('.sub').children('select')[5].value = "63";
                break;
        }

        $('#6').siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.DARK_CIRCLES !== undefined && localStorage.DARK_CIRCLES !== "0"){

        $('#7').attr('checked','checked');

        var tmpdark_circles = localStorage.getItem('DARK_CIRCLES');

        switch(tmpdark_circles) {
            case "64":
                $('.LDemand').siblings('.sub').children('select')[6].value = "64";
                break;

        }

        $('#7').siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.TE !== undefined && localStorage.TE !== ""){

        $('#8').attr('checked','checked');

        var tmpte = localStorage.getItem('TE');


        $('.LDemand').siblings('.sub').children('input')[1].value = tmpte;


        $('#8').siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.WRINKLE !== undefined && localStorage.WRINKLE !== "0"){

        $('#9').attr('checked','checked');

        var tmpwrinkle = localStorage.getItem('WRINKLE');

        switch(tmpwrinkle) {
            case "65":
                $('.LDemand').siblings('.sub').children('select')[7].value = "65";
                break;
            case "66":
                $('.LDemand').siblings('.sub').children('select')[7].value = "66";
                break;
        }

        $('#9').siblings('.sub').css({"display":"block","opacity":"100%"});

    }

    if(localStorage.SENSITIVE !== undefined && localStorage.SENSITIVE !== "0"){

        $('#10').attr('checked','checked');

        var tmpsensitive = localStorage.getItem('SENSITIVE');

        switch(tmpsensitive) {
            case "67":
                $('.LDemand').siblings('.sub').children('select')[8].value = "67";
                break;

        }

        $('#10').siblings('.sub').css({"display":"block","opacity":"100%"});

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