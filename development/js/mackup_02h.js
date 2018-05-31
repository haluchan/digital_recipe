$(function(){

    var date = sessionStorage.getItem('DATE');
    var vipnm = sessionStorage.getItem('VIPNM');
    var vipids= sessionStorage.getItem('VIPIDS');
    var bcnm = sessionStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);

    //產生下拉選單
    sessionData();

    //前一次資料
    if(vipids){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange=function (){
            if( xhr.readyState == 4){
                if( xhr.status == 200 ){

                    // if(xhr.responseXML.getElementsByTagName('RTNMSG')[0].textContent !== "查無檢驗資料") {
                        getMackupData(xhr.responseXML)
                    // }
                }else{
                    alert( xhr.status );
                }
            }
        };

        var url = 'getMackupData.php?VIPIDS='+ vipids;
        // var url = 'getTestData.php?VIPIDS='+ vipids; //最新一筆檢測資料
        xhr.open("GET", url, true);
        xhr.send( null );

    }


    //canvas圖片預覽
    var canvas1 = sessionStorage.getItem('canvasFace_0');
    var canvas2 = sessionStorage.getItem('canvasFace_1');

    if (sessionStorage.canvasFace_0 !== undefined){
        $('.skinResult1').css("display","none");
        $('#previewImage-1').append("<img src="+canvas1+">");
    }else{
        $('canvasTool').css("display","block");
    }

    if (sessionStorage.canvasFace_1 !== undefined){
        $('.skinResult2').css("display","none");
        $('#previewImage-2').append("<img src="+canvas2+">");

    }else{
        $('canvasTool').css("display","block");
    }


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





//產生canvas圖檔
function htmlToCanvas1(){

    $('.canvasTool').css('display','none');

    html2canvas($('#html-content-1'), {
        dpi: window.devicePixelRatio,
        onrendered: function (canvas) {
            $('#previewImage-1').append("<img src="+canvas.toDataURL("image/png")+">");
            $('#previewImage-1 > img').css('display','none');
            sessionStorage.setItem('canvasFace_0',canvas.toDataURL("image/png"));

        }
    });
}

function htmlToCanvas2(callback) {

    $('.canvasTool').css('display','none');

    html2canvas($('#html-content-2'), {
        dpi: window.devicePixelRatio,
        onrendered: function (canvas) {
            $('#previewImage-2').append("<img src="+canvas.toDataURL("image/png")+">");
            $('#previewImage-2 > img').css('display','none');
            sessionStorage.setItem('canvasFace_1',canvas.toDataURL("image/png"));
        }
    });
    callback();
}


//給底妝值
$('.check > input').on('click',function () {

    if($(this).prop('checked')){
        $(this).val('1');
    }else{
        $(this).val('0');
    }
});

$('.Back2Log').on('click',function () {
    sessionStorage.clear();
});


//nextPage
$('.next').on('click',function(){

        if($(window).scrollTop() > 100){
            alert("請確認鍵盤收起後，按下確認，再進行下一步");
            return false;
        }

        if(checkdata()=== true) {

            saveData();

        if(sessionStorage.canvasFace_0 === undefined && sessionStorage.canvasFace_1 === undefined) {

            setTimeout(htmlToCanvas2(htmlToCanvas1),300);

        }
            setTimeout(function () {
                window.open('makeup_03.html','_self');
            },800);
        }
});




//prevPage
$('.prev').on('click',function(){

    prevPage();
});






function getMackupData(xmlDoc){

    var elasticity,transparency_c,skinLevel,moisture,sebum,tension,sg,transparency,horny,check;

    if(xmlDoc.getElementsByTagName('ROW')[1] !== undefined){

     elasticity = parseInt(xmlDoc.getElementsByTagName('ELASTICITY')[0].textContent);
     transparency_c = parseInt(xmlDoc.getElementsByTagName('TRANSPARENCY_C')[0].textContent);
     skinLevel = parseInt(xmlDoc.getElementsByTagName('SKIN_LEVEL')[0].textContent);
     moisture = parseInt(xmlDoc.getElementsByTagName('MOISTURE')[0].textContent);
     sebum = parseInt(xmlDoc.getElementsByTagName('SEBUM')[0].textContent);
     tension = parseInt(xmlDoc.getElementsByTagName('TENSION')[0].textContent);
     sg = parseInt(xmlDoc.getElementsByTagName('SG')[0].textContent);
     transparency = parseInt(xmlDoc.getElementsByTagName('TRANSPARENCY')[0].textContent);
     horny = parseInt(xmlDoc.getElementsByTagName('HORNY')[0].textContent);

    }

    check = new checkForm(elasticity, transparency_c, skinLevel, moisture, sebum, tension, sg, transparency, horny);

    $('#p-moisture').text(check.moisture);
    $('#p-sebum').text(check.sebum);
    $('#p-tension').text(check.tension);

    $('#p-elasticity').text(check.elasticity);
    $('#p-sg').text(check.sg);

    $('#p-transparency_c').text(check.transparency_c);
    $('#p-transparency').text(check.transparency);
    $('#p-horny').text(check.horny);

    $('#p-skin_level').text(check.skinLevel);

}

function checkForm(elasticity, transparency_c, skinLevel, moisture, sebum, tension, sg, transparency, horny) {
    this.elasticity = elasticityEX(elasticity);
    this.transparency_c = transparencyEX(transparency_c);
    this.skinLevel = skinLevelEX(skinLevel);
    this.moisture = moisture === 0 || moisture === undefined ? "" : moisture ;
    this.sebum = sebum === 0 || sebum === undefined ? "" : sebum ;
    this.tension = tension === 0 || tension === undefined ? "" : tension ;
    this.sg = sg === 0 || sg === undefined ? "" : sg ;
    this.transparency = transparency === 0 || transparency === undefined ? "" : transparency ;
    this.horny = horny === 0 || horny === undefined ? "" : horny ;
}


function saveData() {
    var len = document.querySelectorAll('input').length;
    for (var i = 0; i < len; i++) {
        var key = document.querySelectorAll('input')[i].name;
        var val = document.querySelectorAll('input')[i].value;
        sessionStorage.setItem(key, val);
        // alert(tmp);

    }

    var count = document.querySelectorAll('select').length;
    for (var i = 0; i < count; i++) {
        var skey = document.querySelectorAll('select')[i].name;
        var sval = document.querySelectorAll('select')[i].value;
        if(sval === ""){
          sessionStorage.setItem(skey, 0);
        }else{
          sessionStorage.setItem(skey, sval);
        }

    }


}



function elasticityEX(tmp) {
    switch(tmp) {
        case 0:
            tmp = "無";
            break;
        case 1:
            tmp = "S";
            break;
        case 2:
            tmp = "G";
            break;
        case undefined:
            tmp = "無";
            break;
    }

    return(tmp);
}



//檔案值交換
function skinLevelEX(tmp) {

    switch(tmp) {
        case 0:
            tmp = "無選取";
            break;
        case 1:
             tmp = "+3";
            break;
        case 2:
             tmp = "+2";
            break;
        case 3:
             tmp = "+1";
            break;
        case 4:
             tmp = "-1";
            break;
        case 5:
             tmp = "-2";
            break;
        case 6:
             tmp = "-3";
            break;
        case undefined:
            tmp = "無選取";
            break;

    }

    return(tmp);

}

function transparencyEX(tmp) {

    switch(tmp) {
        case 0:
            tmp = "無選取";
            break;
        case 1:
            tmp = "角層";
            break;
        case 2:
            tmp = "基底";
            break;
        case 3:
            tmp = "角層透明度";
            break;
        case 4:
            tmp = "黑色素量";
            break;
        case 5:
            tmp = "黑色素分布與均勻度";
            break;
        case 6:
            tmp = "氣血度";
            break;
        case 7:
            tmp = "黃色化";
            break;
        case undefined:
            tmp = "無選取";
            break;

    }

    return(tmp);

}


function exchangeName(tmpNm) {

    switch(tmpNm) {
        case "SUBJECT":
            tmpNm = "主題";
            break;
        case "SKIN_COLOR_C":
            tmpNm = "原膚色";
            break;
        case "SKIN_LIGHT_C":
            tmpNm = "素肌透光度";
            break;
        case "SKIN_LIGHT_O":
            tmpNm = "素肌透光度";
            break;
        case "CHEEK_COLOR":
            tmpNm = "頰部紅潤感";
            break;
        case "NATURAL_C":
            tmpNm = "先天肌膚";
            break;
        case "ACQUIRED_C":
            tmpNm = "後天肌膚狀況";
            break;
        case "MOISTURE":
            tmpNm = "水分";
            break;
        case "SEBUM":
            tmpNm = "皮脂";
            break;
        case "TENSION":
            tmpNm = "張力";
            break;
        case "ELASTICITY":
            tmpNm = "彈力";
            break;
        case "SG":
            tmpNm = "彈力S/G數值";
            break;
        case "TRANSPARENCY_C":
            tmpNm = "透明感選項";
            break;
        case "HORNY":
            tmpNm = "角層";
            break;
        case "SKIN_LEVEL":
            tmpNm = "美肌等級";
            break;
        case "TRANSPARENCY":
            tmpNm = "透明感";
            break;

    }

    return(tmpNm);
}

function skin_color_cEX(tmp) {

    switch(tmp) {
        case 1:
            tmp = "100";
            break;
        case 2:
            tmp = "101";
            break;
        case 3:
            tmp = "102";
            break;
        case 4:
            tmp = "103";
            break;
        case 5:
            tmp = "201";
            break;
    }

    return(tmp);


}

function natural_c(tmp) {

    switch(tmp) {
        case 1:
            tmp = "I";
            break;
        case 2:
            tmp = "II";
            break;
        case 3:
            tmp = "III";
            break;
        case 4:
            tmp = "IV";
            break;

    }

    return(tmp);

}





//資料檢查
function checkdata() {

    // var titleVal =$("input[type*='text']")[0].value;

    // if(titleVal === ""){
    //     alert("請輸入主題");
    //
    //     return false;
    // }

    for (var i = 0; i < 9; i++) {

        var num = /^[0-9]+$/;
        var tmpNm =$("input")[i].name;
        var tmpData = document.querySelectorAll('input')[i].value;

        // if($("input")[i].value === "" ){s
        //
        //     alert("請輸入"+ exchangeName(tmpNm) );
        //     return false;
        // }else{

            if(i === 0){
                continue;
            }

            if($("input")[i].value !==""){

                if (!num.test(tmpData)) {

                    alert(exchangeName(tmpNm) + "只能輸入數字");

                    return false;

                }

            }

        // }

    }


    // for (var k = 0; k < 7; k++) {
    //     if(document.querySelectorAll('select')[k].value === "" ){
    //
    //         var tmp = document.querySelectorAll('select')[k].name;
    //
    //         alert("請輸入"+ exchangeName(tmp) );
    //         return false;
    //     }
    //
    // }

    function checkboxx() {

        var num = 0;

        for (var i = 0; i < 6; i++) {

            if($("input[type*='checkbox']")[i].value === "1"){

                // var num = 0;

                 num++

            }

        }

        return(num);

    }


    if (checkboxx() === 0){

        alert("請至少選擇一種底妝");
        return false;
    }


    return true;

}




//暫存資料
function sessionData() {

    var tmpskin_color = sessionStorage.getItem('SKIN_COLOR_C');

    document.querySelectorAll('select')[0].value = skin_color_cEX(tmpskin_color);


    var slen =  document.querySelectorAll('select');

    for (var j = 0; j < slen.length; j++) {

        var tmpSelectData = sessionStorage.getItem(slen[j].name);

        slen[j].value = tmpSelectData;

    }


    var len =  document.querySelectorAll('input');

    for (var i = 0; i < len.length-6; i++) {


        var tmpInputData = sessionStorage.getItem(len[i].name);


       len[i].value = tmpInputData;

    }

    var subVal = sessionStorage.getItem("SUBJECT");

    $("input[type*='text']")[0].value = subVal;

    for (var k = 9; k < len.length; k++) {

        var tmpnm = sessionStorage.getItem(len[k].name);

        if(tmpnm === "1"){
            len[k].setAttribute('checked','checked');
            len[k].setAttribute('value','1');
        }

    }



}
