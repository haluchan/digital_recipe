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


    //mean跳轉
    var btn = $('.btn');
    if(localStorage.getItem('DRY') !== null){
        btn.siblings('ul').children('li:eq(0)').css('color','#000000');

        btn.siblings('ul').children('li:eq(0)').on('click touchstart',function (){
            location.href = 'maintain_01.html';
        });
    }
    if(localStorage.getItem('AIR_DRY') !== null){
        btn.siblings('ul').children('li:eq(1)').css('color','#000000');

        btn.siblings('ul').children('li:eq(1)').on('click touchstart',function (){
            location.href = 'maintain_02.html';
        });
    }
    if(localStorage.getItem('MOISTURIZING') !== null){
        btn.siblings('ul').children('li:eq(2)').css('color','#000000');

        btn.siblings('ul').children('li:eq(2)').on('click touchstart',function (){
            location.href = 'maintain_03.html';
        });
    }
    if(localStorage.getItem('canvasFace_3') !== null){
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


            var sName = $('select')[i].name;
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
            if($('select')[i].value === "23"){
                var whiteningValue = $('input:text')[2].value;
                localStorage.setItem('WHITENING_T',whiteningValue);
            }
            if($('select')[i].value === "26"){
                var elasticityValue = $('input:text')[3].value;
                localStorage.setItem('ELASTICITY_T',elasticityValue);
            }
            if($('select')[i].value === "28"){
                var uvValue = $('input:text')[4].value;
                localStorage.setItem('UV_T',uvValue);
            }
            if($('select')[i].value === "36"){
                var otherValue = $('input:text')[5].value;
                localStorage.setItem('OTHER_T',otherValue);
            }

    }

    if(localStorage.getItem("HORNY_T") === null){
        localStorage.setItem("HORNY_T","0")
    }
    if(localStorage.getItem("DRYING_T") === null){
        localStorage.setItem("DRYING_T","0")
    }
    if(localStorage.getItem("WHITENING_T") === null){
        localStorage.setItem("WHITENING_T","0")
    }
    if(localStorage.getItem("ELASTICITY_T") === null){
        localStorage.setItem("ELASTICITY_T","0")
    }
    if(localStorage.getItem("UV_T") === null){
        localStorage.setItem("UV_T","0")
    }
    if(localStorage.getItem("OTHER_T") === null){
        localStorage.setItem("OTHER_T","0")
    }


    var textare = $('textarea')[0].name;
    var textUare = textare.toUpperCase();
    var textareValue = $('textarea')[0].value;

    localStorage.setItem(textUare,textareValue);

    var basc = $('#Bbasic').val();

    if(basc === "ON"){
        localStorage.setItem("BASC","1");
    }else{
        localStorage.setItem("BASC","0");
    }


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

    var data = skinProdSelect();
    var horny_t = localStorage.getItem("HORNY_T");
    var drying_t = localStorage.getItem("DRYING_T");
    var whitening_t = localStorage.getItem("WHITENING_T");
    var elasticity_t = localStorage.getItem("ELASTICITY_T");
    var uv_t = localStorage.getItem("UV_T");
    var other_t = localStorage.getItem("OTHER_T");
    var horny_c = localStorage.getItem("HORNY_C");
    var drying_c = localStorage.getItem("DRYING_C");
    var whitening_c = localStorage.getItem("WHITENING_C");
    var elasticity_c = localStorage.getItem("ELASTICITY_C");
    var uv_c = localStorage.getItem("UV_C");
    var other_c = localStorage.getItem("OTHER_C");

    if (horny_c !== null) {

        var horny = horny_c;

        switch (horny) {
            case '14':

                $('.horny_sub').append('<select id="' + data[0].option[1].value + '" name="horny_t"></select>');

                var len = data[0].option[1].option.length;

                for (i = 0; i < len; i++) {

                    $('.horny_sub select[id="14"]').append('<option value="' + data[0].option[1].option[i].value + '">' + data[0].option[1].option[i].name + '</option>')///
                }

                break;
            case '15':

                $('.horny_sub').append('<select id="' + data[0].option[2].value + '" name="horny_t"></select>');

                var len = data[0].option[2].option.length;

                for (i = 0; i < len; i++) {

                    $('.horny_sub select[id="15"]').append('<option value="' + data[0].option[2].option[i].value + '">' + data[0].option[2].option[i].name + '</option>')///
                }

                break;
            case '0':

                break;
            default:
                $('#horny_t').css('display', 'inline-block');
                $('#horny_t').val(horny_t);
        }

        $('#' + horny + '').val(horny_t);
        $('#' + horny + '').css('display', 'inline-block');
    }

    if (drying_c !== null) {

        var drying = drying_c;

        switch (drying) {
            case '17':

                $('.drying_sub').append('<select id="' + data[1].option[1].value + '" name="drying_t"></select>');

                var len = data[1].option[1].option.length;

                for (i = 0; i < len; i++) {

                    $('.drying_sub select[id="17"]').append('<option value="' + data[1].option[1].option[i].value + '">' + data[1].option[1].option[i].name + '</option>')///
                }

                $('#drying_t').val('');
                break;
            case '18':

                $('.drying_sub').append('<select id="' + data[1].option[2].value + '" name="drying_t"></select>');

                var len = data[1].option[2].option.length;

                for (i = 0; i < len; i++) {

                    $('.drying_sub select[id="18"]').append('<option value="' + data[1].option[2].option[i].value + '">' + data[1].option[2].option[i].name + '</option>')///
                }

                $('#drying_t').val('');
                break;
            case '0':

                break;
            default:
                $('#drying_t').css('display', 'inline-block');
                $('#drying_t').val(drying_t);
        }

        $('#' + drying + '').val(drying_t);
        $('#' + drying + '').css('display', 'inline-block');
    }
    if (whitening_c !== null) {

        var whitening = whitening_c;

        switch (whitening) {
            case '20':

                $('.whitening_sub').append('<select id="' + data[2].option[1].value + '" name="whitening_t"></select>');

                var len = data[2].option[1].option.length;

                for (i = 0; i < len; i++) {

                    $('.whitening_sub select[id="20"]').append('<option value="' + data[2].option[1].option[i].value + '">' + data[2].option[1].option[i].name + '</option>')///
                }

                $('#whitening_t').val('');
                break;
            case '21':

                $('.whitening_sub').append('<select id="' + data[2].option[2].value + '" name="whitening_t"></select>');

                var len = data[2].option[2].option.length;

                for (i = 0; i < len; i++) {

                    $('.whitening_sub select[id="21"]').append('<option value="' + data[2].option[2].option[i].value + '">' + data[2].option[2].option[i].name + '</option>')///
                }

                $('#whitening_t').val('');
                break;
            case '22':

                $('.whitening_sub').append('<select id="' + data[2].option[3].value + '" name="whitening_t"></select>');

                var len = data[2].option[3].option.length;

                for (i = 0; i < len; i++) {

                    $('.whitening_sub select[id="22"]').append('<option value="' + data[2].option[3].option[i].value + '">' + data[2].option[3].option[i].name + '</option>')///
                }

                $('#whitening_t').val('');
                break;
            case '0':

                break;
            default:
                $('#whitening_t').css('display', 'inline-block');
                $('#whitening_t').val(whitening_t);
        }
        $('#' + whitening + '').val(whitening_t);
        $('#' + whitening + '').css('display', 'inline-block');
    }
    if (elasticity_c !== null) {

        var elasticity = elasticity_c;

        switch (elasticity) {
            case '24':

                $('.elasticity_sub').append('<select id="' + data[3].option[1].value + '" name="elasticity_t"></select>');

                var len = data[3].option[1].option.length;

                for (i = 0; i < len; i++) {

                    $('.elasticity_sub select[id="24"]').append('<option value="' + data[3].option[1].option[i].value + '">' + data[3].option[1].option[i].name + '</option>')///
                }

                $('#elasticity_t').val('');
                break;
            case '25':

                $('.elasticity_sub').append('<select id="' + data[3].option[2].value + '" name="elasticity_t"></select>');

                var len = data[3].option[2].option.length;

                for (i = 0; i < len; i++) {

                    $('.elasticity_sub select[id="25"]').append('<option value="' + data[3].option[2].option[i].value + '">' + data[3].option[2].option[i].name + '</option>')///
                }

                $('#elasticity_t').val('');
                break;
            case '0':

                break;
            default:
                $('#elasticity_t').css('display', 'inline-block');
                $('#elasticity_t').val(elasticity_t);
        }
        $('#' + elasticity + '').val(elasticity_t);
        $('#' + elasticity + '').css('display', 'inline-block');

    }
    if (uv_c !== null) {

        var uv = uv_c;

        switch (uv) {
            case '27':

                $('.uv_sub').append('<select id="' + data[4].option[1].value + '" name="uv_t"></select>');

                var len = data[4].option[1].option.length;

                for (i = 0; i < len; i++) {

                    $('.uv_sub select[id="27"]').append('<option value="' + data[4].option[1].option[i].value + '">' + data[4].option[1].option[i].name + '</option>')///
                }

                $('#uv_t').val('');
                break;
            case '0':

                break;
            default:
                $('#uv_t').css('display', 'inline-block');
                $('#uv_t').val(uv_t);
        }
        $('#' + uv + '').val(uv_t);
        $('#' + uv + '').css('display', 'inline-block');
    }
    if (other_c !== null) {

        var other = other_c;

        switch (other) {
            case '29':

                $('.other_sub').append('<select id="' + data[5].option[1].value + '" name="other_t"></select>');

                var len = data[5].option[1].option.length;

                for (i = 0; i < len; i++) {

                    $('.other_sub select[id="29"]').append('<option value="' + data[5].option[1].option[i].value + '">' + data[5].option[1].option[i].name + '</option>')///
                }

                $('#other_t').val('');
                break;
            case '30':

                $('.other_sub').append('<select id="' + data[5].option[2].value + '" name="other_t"></select>');

                var len = data[5].option[2].option.length;

                for (i = 0; i < len; i++) {

                    $('.other_sub select[id="30"]').append('<option value="' + data[5].option[2].option[i].value + '">' + data[5].option[2].option[i].name + '</option>')///
                }

                $('#other_t').val('');
                break;
            case '31':

                $('.other_sub').append('<select id="' + data[5].option[3].value + '" name="other_t"></select>');

                var len = data[5].option[3].option.length;

                for (i = 0; i < len; i++) {

                    $('.other_sub select[id="31"]').append('<option value="' + data[5].option[3].option[i].value + '">' + data[5].option[3].option[i].name + '</option>')///
                }

                $('#other_t').val('');
                break;
            case '32':

                $('.other_sub').append('<select id="' + data[5].option[4].value + '" name="other_t"></select>');

                var len = data[5].option[4].option.length;

                for (i = 0; i < len; i++) {

                    $('.other_sub select[id="32"]').append('<option value="' + data[5].option[4].option[i].value + '">' + data[5].option[4].option[i].name + '</option>')///
                }

                $('#other_t').val('');
                break;
            case '33':

                $('.other_sub').append('<select id="' + data[5].option[5].value + '" name="other_t"></select>');

                var len = data[5].option[5].option.length;

                for (i = 0; i < len; i++) {

                    $('.other_sub select[id="33"]').append('<option value="' + data[5].option[5].option[i].value + '">' + data[5].option[5].option[i].name + '</option>')///
                }

                $('#other_t').val('');
                break;
            case '34':

                $('.other_sub').append('<select id="' + data[5].option[6].value + '" name="other_t"></select>');

                var len = data[5].option[6].option.length;

                for (i = 0; i < len; i++) {

                    $('.other_sub select[id="34"]').append('<option value="' + data[5].option[6].option[i].value + '">' + data[5].option[6].option[i].name + '</option>')///
                }

                $('#other_t').val('');
                break;
            case '35':

                $('.other_sub').append('<select id="' + data[5].option[7].value + '" name="other_t"></select>');

                var len = data[5].option[7].option.length;

                for (i = 0; i < len; i++) {

                    $('.other_sub select[id="35"]').append('<option value="' + data[5].option[7].option[i].value + '">' + data[5].option[7].option[i].name + '</option>')///
                }

                $('#other_t').val('');
                break;

            case '0':
                break;

            default:
                $('#other_t').css('display', 'inline-block');
                $('#other_t').val(other_t);
        }
        $('#' + other + '').val(other_t);
        $('#' + other + '').css('display', 'inline-block');
    }


    var sessionLen = localStorage.length;

    for (var k = 0; k < sessionLen; k++) {
        var sessionName = localStorage.key(k);
        var sessionLName = sessionName.toLowerCase();
        var sessionValue = localStorage.getItem(sessionName);

        var slen = $('select').length;
        for (var j = 0; j < slen; j++) {
            var selectName = $('select')[j].id;

            if(selectName === sessionLName){

                if(sessionValue !=="0"){

                $('#'+ selectName +'').val(sessionValue);
                $('#'+ selectName +'').parent().siblings('input[type="checkbox"]').attr('checked','checked');
                $('#'+ selectName +'').parent('.sub').css('display','block');
                $('#'+ selectName +'').siblings('span').css('display','block');


                }

            }

        }

    }


    $('textarea').val(localStorage.getItem("SUGGESTION"));

}


function checkdata(){


    if($('#basic')[0].checked === true){

        if($('.basc_remove')[0].value === "0" && $('.basc_clean')[0].value === "0" && $('.basc_wet')[0].value === "0"){
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



    if ($('input:checkbox')[1].checked === true) {

        if ($('#horny_c').val() === "0") {

            alert('請選擇角層保養內容');

            return false;

        }else{

            if($('select[name="horny_t"]').val() === "0" && $('#horny_t').val() === ""){

                alert('請選擇角層保養產品');

                return false;

            }
        }

    }
    if ($('input:checkbox')[2].checked === true) {

        if ($('#drying_c').val() === "0") {

            alert('請選擇乾燥保養內容');

            return false;

        }else{

            if($('select[name="drying_t"]').val() === "0" && $('#drying_t').val() === ""){

                alert('請選擇乾燥保養產品');

                return false;

            }
        }

    }
    if ($('input:checkbox')[3].checked === true) {

        if ($('#whitening_c').val() === "0") {

            alert('請選擇美白保養內容');

            return false;

        }else{

            if($('select[name="whitening_t"]').val() === "0" && $('#whitening_t').val() === ""){

                alert('請選擇美白保養產品');

                return false;

            }
        }

    }
    if ($('input:checkbox')[4].checked === true) {

        if ($('#elasticity_c').val() === "0") {

            alert('請選擇張力、彈力保養內容');

            return false;

        }else{

            if($('select[name="elasticity_t"]').val() === "0" && $('#elasticity_t').val() === ""){

                alert('請選擇張力、彈力保養產品');

                return false;

            }
        }

    }
    if ($('input:checkbox')[5].checked === true) {

        if ($('#uv_c').val() === "0") {

            alert('請選擇紫外線保養內容');

            return false;

        }else{

            if($('select[name="uv_t"]').val() === "0" && $('#uv_t').val() === ""){

                alert('請選擇紫外線保養之產品');

                return false;

            }
        }

    }
    if ($('input:checkbox')[6].checked === true) {

        if ($('#other_c').val() === "0") {

            alert('請選擇其他保養內容');

            return false;

        }else{

            if($('select[name="other_t"]').val() === "0" && $('#other_t').val() === ""){

                alert('請選擇其他保養產品');

                return false;

            }
        }

    }
    return true;
}

