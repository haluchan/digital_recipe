$(document).ready(function(){

    var date = localStorage.getItem('DATE');
    var vipnm = localStorage.getItem('VIPNM');
    var vipids= localStorage.getItem('VIPIDS');
    var bcnm = localStorage.getItem('BCNM');

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

                    if(xhr.responseXML.getElementsByTagName('RTNMSG')[0].textContent !== "查無檢驗資料"){

                        getMaintainData(xhr.responseXML);
                    }


                }else{
                    alert( xhr.status );
                }
            }
        };

        // var url = 'getMaintainData.php?VIPIDS='+ vipids;
        var url = 'getTestData.php?VIPIDS='+ vipids; //最新一筆檢測資料
        xhr.open("GET", url, true);
        xhr.send( null );

    }


    //canvas圖片預覽
    var canvas3 = localStorage.getItem('canvasFace_3');
    //
    if (localStorage.canvasFace_3 !== undefined){
        $('.skinResult').css("display","none");
        $('#previewImage').append("<img src="+canvas3+">");
    }else{
        $('canvasTool').css("display","block");
    }



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
        $('.btn').siblings('ul').children('li:eq(4)').css('color','#000000');

        $('.btn').siblings('ul').children('li:eq(3)').on('click touchstart',function (){
            location.href = 'maintain_04.html';
        });
        $('.btn').siblings('ul').children('li:eq(4)').on('click touchstart',function (){
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

        if(localStorage.canvasFace_3 === undefined) {

            htmlToCanvas();

        }


            setTimeout(function () {
                window.open('maintain_05.html','_self');
            },300);
    }

});

$('.prev').on('click',function(){

    location.href = "maintain_03.html";
});

function htmlToCanvas() {

    $('.canvasTool').css('display','none');

    html2canvas($('#html-content'), {
        dpi: window.devicePixelRatio,
        onrendered: function (canvas) {
            $('#previewImage').append("<img src="+canvas.toDataURL("image/png")+">");
            $('#previewImage > img').css('display','none');
            localStorage.setItem('canvasFace_3',canvas.toDataURL("image/png"));
        }
    });

    return true;
}


function saveData() {
    var len = document.querySelectorAll('input').length;
    for (var i = 0; i < len; i++) {
        var key = document.querySelectorAll('input')[i].name;
        var val = document.querySelectorAll('input')[i].value;
        localStorage.setItem(key, val);
        // alert(tmp);

    }

    var count = document.querySelectorAll('select').length;
    for (var i = 0; i < count; i++) {
        var skey = document.querySelectorAll('select')[i].name;
        var sval = document.querySelectorAll('select')[i].value;
        localStorage.setItem(skey, sval);
    }


}


function elasticityEX(tmp) {
    switch(tmp) {
        case 1:
            tmp = "S";
            break;
        case 2:
            tmp = "G";
            break;

    }

    return(tmp);
}


function skinLevelEX(tmp) {

    switch(tmp) {
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

    }

    return(tmp);

}

function transparencyEX(tmp) {

    switch(tmp) {
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
            break
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




function checkdata() {

    var titleVal =$("input[type*=text]")[0].value;

    if(titleVal === ""){
        alert("請輸入主題");

        return false;
    }


    for (var i = 0; i < 7; i++) {

        var num = /^[0-9]+$/;
        var tmpNm =$("input[type*=tel]")[i].name;
        var tmpData = $("input[type*=tel]")[i].value;

        if($("input[type*=tel]")[i].value === "" ){

            alert("請輸入"+ exchangeName(tmpNm) );
            return false;
        }else{

            if(i === 0){
                continue;
            }

            if(!num.test(tmpData)){

                alert(exchangeName(tmpNm) + "只能輸入數字");

                return false;

            }

        }

    }


    for (var k = 0; k < 7; k++) {
        if($("select")[k].value === "" ){

            var tmp = $("select")[k].name;

            alert("請輸入"+ exchangeName(tmp) );
            return false;
        }

    }

    return true;

}




function getMaintainData(xmlDoc){

    var elasticity =parseInt(xmlDoc.getElementsByTagName('ELASTICITY')[0].textContent);
    var transparency = parseInt(xmlDoc.getElementsByTagName('TRANSPARENCY_C')[0].textContent);
    var skinLevel = parseInt(xmlDoc.getElementsByTagName('SKIN_LEVEL')[0].textContent);

    $('#p-moisture').text(xmlDoc.getElementsByTagName('MOISTURE')[0].textContent);
    $('#p-sebum').text(xmlDoc.getElementsByTagName('SEBUM')[0].textContent);
    $('#p-tension').text(xmlDoc.getElementsByTagName('TENSION')[0].textContent);

    $('#p-elasticity').text(elasticityEX(elasticity));
    $('#p-sg').text(xmlDoc.getElementsByTagName('SG')[0].textContent);

    $('#p-transparency_c').text(transparencyEX(transparency));
    $('#p-transparency').text(xmlDoc.getElementsByTagName('TRANSPARENCY')[0].textContent);
    $('#p-horny').text(xmlDoc.getElementsByTagName('HORNY')[0].textContent);

    $('#p-skin_level').text(skinLevelEX(skinLevel));


}


function sessionData() {



    var tmpskin_color = localStorage.getItem('SKIN_COLOR_C');

    document.querySelectorAll('select')[0].value = skin_color_cEX(tmpskin_color);


    var slen =  document.querySelectorAll('select');

    for (var j = 0; j < slen.length; j++) {

        var tmpSelectData = localStorage.getItem(slen[j].name);

        slen[j].value = tmpSelectData;

    }

    var subVal = localStorage.getItem("SUBJECT");

    $("input[type*=text]")[0].value = subVal;

    var len =  $("input[type*=tel]");

    for (var i = 0; i < len.length; i++) {


        var tmpInputData = localStorage.getItem(len[i].name);


        len[i].value = tmpInputData;

    }



}