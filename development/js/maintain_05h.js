$(document).ready(function() {

    var date = localStorage.getItem('DATE');
    var vipnm = localStorage.getItem('VIPNM');
    var vipids = localStorage.getItem('VIPIDS');
    var bcnm = localStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);


    sessionData();
    cancelData();


    //mean跳轉跳
    if(localStorage.getItem('DRY') !== null){
        $('.btn').siblings('ul').children('li:eq(0)').css('color','#000000');

        $('.btn').siblings('ul').children('li:eq(0)').on('click touchstart',function (){
            location.href = 'maintain_01.html';
        });
    }
    if(localStorage.getItem('AIR_DRY') !== null){
        $('.btn').siblings('ul').children('li:eq(1)').css('color','#000000');

        $('.btn').siblings('ul').children('li:eq(1)').on('click touchstart',function (){
            location.href = 'maintain_02.html';
        });
    }
    if(localStorage.getItem('MOISTURIZING') !== null){
        $('.btn').siblings('ul').children('li:eq(2)').css('color','#000000');

        $('.btn').siblings('ul').children('li:eq(2)').on('click touchstart',function (){
            location.href = 'maintain_03.html';
        });
    }
    if(localStorage.getItem('canvasFace_3') !== null){
        $('.btn').siblings('ul').children('li:eq(3)').css('color','#000000');

        $('.btn').siblings('ul').children('li:eq(3)').on('click touchstart',function (){
            location.href = 'maintain_04.html';
        });
    }

});

//回首頁清暫存
$('.Back2Log').on('click',function () {
    localStorage.clear();
});


$('.next').on('click',function(){

    if(checkdata()=== true) {

        saveData();

        setTimeout(function () {
            window.open('preview_maintain.html','_self');
        },300);
    }

});

$('.prev').on('click',function(){

    location.href = "maintain_04.html";
});


function saveData() {

    var sLen =  $('select').length;

    for (var i = 0; i < sLen; i++) {

        if($('select')[i].value !== "0"){

            var sName = $('select')[i].id;
            var sUName = sName.toUpperCase();
            var sValue = $('select')[i].value;
            localStorage.setItem(sUName,sValue);

            if($('select')[i].value === "16"){
                var hornyValue = $('input:text')[0].value;
                localStorage.setItem('HORNY_T',hornyValue);
            }
            if($('select')[i].value === "19"){
                var dryingValue = $('input:text')[1].value;
                localStorage.setItem('DRYING_T',dryingValue);

            }
            if($('select')[i].value === "16"){
                var whiteningValue = $('input:text')[2].value;
                localStorage.setItem('WHITENING_T',whiteningValue);
            }
            if($('select')[i].value === "23"){
                var elasticityValue = $('input:text')[3].value;
                localStorage.setItem('ELASTICITY_T',elasticityValue);
            }
            if($('select')[i].value === "26"){
                var uvValue = $('input:text')[4].value;
                localStorage.setItem('UV_T',uvValue);
            }
            if($('select')[i].value === "28"){
                var otherValue = $('input:text')[5].value;
                localStorage.setItem('OTHER_T',otherValue);
            }

        }
        
    }

   var textare = $('textarea')[0].name;
    var textUare = textare.toUpperCase();
    var textareValue = $('textarea')[0].value;
    localStorage.setItem(textUare,textareValue);

}

function cancelData(){

$('input[type*="checkbox"]').on('change',function(){

    if($(this).prop('checked')=== false){
        $(this).siblings('.sub').children('input[type*="text"]').val("");
        $(this).siblings('.sub').children('input[type*="text"]').css('display','none');
        $(this).siblings('.sub').children('select').val("0");
        $(this).siblings('.sub').children('div').children('select').val('0');

    }

});



}


function sessionData() {

    var len = localStorage.length;

    for (var i = 0; i < len; i++) {
        var sessionName = localStorage.key(i);
        var sessionLName = sessionName.toLowerCase();

        for (var j = 0; j < 26; j++) {
            var selectName = $('select')[j].id;
            var sessionValue = localStorage.getItem(sessionName);

            if(selectName === sessionLName){

                $('#'+ selectName +'').val(sessionValue);

                if(sessionValue !== "0" && sessionValue !==""){

                    $('#'+ selectName +'').parent().siblings('input[type="checkbox"]').attr('checked','checked');
                    $('#'+ selectName +'').parent('.sub').css('display','block');

                    if(sessionValue === '16'  || sessionValue === '19' || sessionValue === '23' || sessionValue === '26' || sessionValue === '28' || sessionValue === '36' ){
                        $('#'+ sessionLName +'').siblings('input[type="text"]').css('display','block');
                        $('#'+ sessionLName +'').siblings('input[type="text"]').val(sessionValue);/////////////////
                    }

                    if(sessionName === '14'  || sessionName === '15'  || sessionName === '17'  || sessionName === '18'  ||
                        sessionName === '20'  || sessionName === '21'  || sessionName === '22'  || sessionName === '24'  || sessionName === '25'  || sessionName === '27'  || sessionName === '29'  || sessionName === '30'  || sessionName === '31'  || sessionName === '32'  || sessionName === '33'  || sessionName === '34'  || sessionName === '45'){
                        $('#'+ sessionLName +'').css('display','inline-block');
                        $('#'+ sessionLName +'').val(sessionValue);
                    }

                }

            }

        }

    }


    $('textarea').val(localStorage.getItem("SUGGESTION"));

}


function checkdata(){


    if($('#basic')[0].checked === true){

        if($('.remove')[0].value === "0" && $('.clean')[0].value === "0" && $('.balance')[0].value === "0"){
            alert('請選擇基礎保養的內容');

            return false;
        }

    }


        var checkNum = 0 ;

        for (var i = 1; i < 7; i++) {

            if($("input:checkbox")[i].checked === true){

                checkNum++;
            }

        }

            if(checkNum === 0){

                alert("特殊保養請至少選擇一項");

                return false;
            }


    var k = 3;

        for (var i = 1; i < 7; i++) {


            if ($('input:checkbox')[i].checked === true) {

                if ($('label').siblings('div').children('select')[k].value === "0") {

                    alert('請選擇所勾選項目的內容');

                    return false;
                }

            }

            k++;
        }

    return true;
}

