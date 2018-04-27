$(document).ready(function(){


    var date = localStorage.getItem('DATE');
    var vipnm = localStorage.getItem('VIPNM');
    var vipids= localStorage.getItem('VIPIDS');
    var bcnm = localStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);

    getlastData(vipids);
    sessionData();


    //前一次資料


});

$('.next').on('click',function(){


    // htmlToCanvas();
   if(htmlToCanvas()){
        sentData();

   }

    $('.bg').css('display','block');
});



$('.prev').on('click',function(){
    window.open('makeup_04.html','_self');
});



function getMackupData(xmlDoc){


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

        htmlToCanvas();



}

function sessionData() {

    var sg = parseInt(localStorage.SG);
    var skinLevel = parseInt(localStorage.SKIN_LEVEL);
    var transparency = parseInt(localStorage.TRANSPARENCY_C);
    var skin_color_c = parseInt(localStorage.SKIN_COLOR_C);
    var skin_light_c = parseInt(localStorage.SKIN_LIGHT_C);
    var elasticity = parseInt(localStorage.ELASTICITY);
    var natural = parseInt(localStorage.NATURAL_C);
    var acquired = parseInt(localStorage.ACQUIRED_C);


    $('.theme_c').text(localStorage.SUBJECT);
    if(localStorage.SUGGESTION !== undefined){
        var textCont = localStorage.SUGGESTION;
        $('.suggest').append('<span>' + textCont.replace(/\n/g,'<br/>') + '<span>');
    }
    $("#NATURAL_C").text(naturalEX(natural));
    $("#ACQUIRED_C").text(acquiredEX(acquired));
    $("#MOISTURE").text(localStorage.MOISTURE);
    $("#SEBUM").text(localStorage.SEBUM);
    $("#CHEEK_COLOR").text(localStorage.CHEEK_COLOR);
    $("#TENSION").text(localStorage.TENSION);
    $("#ELASTICITY").text(elasticityEX(elasticity));
    $("#SG").text(elasticityEX(sg));
    $("#TRANSPARENCY").text(localStorage.TRANSPARENCY);
    $("#TRANSPARENCY_C").text(transparencyEX(transparency));
    $("#HORNY").text(localStorage.HORNY);
    $("#SKIN_LEVEL").text(skinLevelEX(skinLevel));

    $('div[name="SKIN_COLOR_C"]').text(skin_color_cEX(skin_color_c));
    $('div[name="SKIN_LIGHT_C"]').text(skin_light_cEX(skin_light_c));
    $('div[name="SKIN_LIGHT_O"]').text(localStorage.SKIN_LIGHT_O);



    $("input[name*='CREAM_F']").val(localStorage.CREAM_F);
    $("input[name*='COSMETICS_F']").val(localStorage.COSMETICS_F);
    $("input[name*='WATER_F']").val(localStorage.WATER_F);
    $("input[name*='POWDER_F']").val(localStorage.POWDER_F);
    $("input[name*='FOUNDATION_F']").val(localStorage.FOUNDATION_F);
    $("input[name*='PRESSED_F']").val(localStorage.PRESSED_F);

    for (var i = 0; i < 6; i++) {
       if( $('input')[i].value === "1"){
           $('input')[i].setAttribute('checked','checked');
       }

    }

    var len = localStorage.length;

    for (var i = 0; i < len; i++) {
        for (var j = 1; j < 11; j++) {

            if (localStorage.key(i) === "MAKUP_TEXT_" + j) {
                var tmp =localStorage.getItem("MAKUP_TEXT_" + j);
                if(tmp !== ""){
                $('.wrap').append("<div class='tip'>"+tmp+"</div>");
                }
            }
        }
    }

    canvasImg();

    if(localStorage.MAKUP_TXT_C !== undefined){
        var textCont = localStorage.MAKUP_TXT_C;
        $('.suggest').append('<span>' + textCont.replace(/\n/g,'<br/>') + '<span>');
    }

    return true
}

function canvasImg() {

    $("#canvasFace_0").css('background-image',"url('"+localStorage.canvasFace_0+"')");
    $("#canvasFace_1").css('background-image',"url('"+localStorage.canvasFace_1+"')");
    $("#canvasFace_2").css('background-image',"url('"+localStorage.canvasFace_2+"')");


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

function skin_light_cEX(tmp) {

    switch(tmp) {
        case 1:
            tmp = "B";
            break;
        case 2:
            tmp = "Y";
            break;
        case 3:
            tmp = "P";
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

function acquiredEX(tmp) {

    switch(tmp) {
        case 1:
            tmp = "D1";
            break;
        case 2:
            tmp = "D2";
            break;
        case 3:
            tmp = "D3";
            break;
        case 4:
            tmp = "D4";
            break;

    }

    return(tmp);


}

function naturalEX(tmp) {

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



function sentData() {



    for (var i = 1; i <= 10; i++) {

        var tmp = "MAKUP_TEXT_"+i ;

        if(localStorage.getItem(tmp) === null){

            localStorage.setItem(tmp,"");

        }

    }






    var data = {
        VIPIDS: localStorage.VIPIDS,
        DATE: localStorage.DATE,
        MAIL: localStorage.MAIL,
        VIPNM: localStorage.VIPNM,
        BCID: localStorage.BCID,
        DRY: localStorage.DRY,
        OIL: localStorage.OIL,
        PORES: localStorage.PORES,
        ACEN: localStorage.ACEN,
        DULL: localStorage.DULL,
        CB: localStorage.CB,
        SPOTS: localStorage.SPOTS,
        DARK_CIRCLES: localStorage.DARK_CIRCLES,
        TE: localStorage.TE,
        WRINKLE: localStorage.WRINKLE,
        SENSITIVE: localStorage.SENSITIVE,
        EYE_EDEMA: localStorage.EYE_EDEMA,
        EYE_DULL: localStorage.EYE_DULL,
        LIP_DULL: localStorage.LIP_DULL,
        MELLOW: localStorage.MELLOW,
        DIMENSION: localStorage.DIMENSION,
        REFLECTION_N: "0",
        REFLECTION_B: "0",
        REFLECTION_O: "0",
        CREAM_F: localStorage.CREAM_F,
        COSMETICS_F: localStorage.COSMETICS_F,
        WATER_F: localStorage.WATER_F,
        POWDER_F: localStorage.POWDER_F,
        FOUNDATION_F: localStorage.FOUNDATION_F,
        PRESSED_F: localStorage.PRESSED_F,
        SUBJECT: localStorage.SUBJECT,
        SKIN_COLOR_C: localStorage.SKIN_COLOR_C,
        SKIN_LIGHT_C: localStorage.SKIN_LIGHT_C,
        SKIN_LIGHT_O: localStorage.SKIN_LIGHT_O,
        CHEEK_COLOR: localStorage.CHEEK_COLOR,
        NATURAL_C: localStorage.NATURAL_C,
        ACQUIRED_C: localStorage.ACQUIRED_C,
        MOISTURE: localStorage.MOISTURE,
        SEBUM: localStorage.SEBUM,
        TENSION: localStorage.TENSION,
        ELASTICITY: localStorage.ELASTICITY,
        SG: localStorage.SG,
        TRANSPARENCY: localStorage.TRANSPARENCY,
        TRANSPARENCY_C: localStorage.TRANSPARENCY_C,
        HORNY: localStorage.HORNY,
        SKIN_LEVEL: localStorage.SKIN_LEVEL,
        EYEBROW_TC: localStorage.EYEBROW_TC,
        SHADOW: localStorage.SHADOW,
        SHADOW_S: localStorage.SHADOW_S,
        SHADOW_COLOR_C: localStorage.SHADOW_COLOR_C,
        LIP_O: localStorage.LIP_O,
        LIP_SC: localStorage.LIP_SC,
        LIP_COLOR: localStorage.LIP_COLOR,
        MAKUP_TXT_1: localStorage.MAKUP_TEXT_1,
        MAKUP_TXT_2: localStorage.MAKUP_TEXT_2,
        MAKUP_TXT_3: localStorage.MAKUP_TEXT_3,
        MAKUP_TXT_4: localStorage.MAKUP_TEXT_4,
        MAKUP_TXT_5: localStorage.MAKUP_TEXT_5,
        MAKUP_TXT_6: localStorage.MAKUP_TEXT_6,
        MAKUP_TXT_7: localStorage.MAKUP_TEXT_7,
        MAKUP_TXT_8: localStorage.MAKUP_TEXT_8,
        MAKUP_TXT_9: localStorage.MAKUP_TEXT_9,
        MAKUP_TXT_10: localStorage.MAKUP_TEXT_10,
        MAKUP_TXT_C: localStorage.MAKUP_TXT_C,
        MAKEUP_URL: localStorage.canvasFace_0,
        SKIN_URL: localStorage.canvasFace_1,
        SKIN_WATER_URL: localStorage.canvasFace_2,
        PDFImage:localStorage.PDFImage
    };

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function (){
        if( xhr.readyState == 4){
            if( xhr.status == 200 ){
                $('#postData').append("<img src="+xhr.responseText+">");
                $('#postData').text(xhr.responseText);

                if(xhr.responseText !== false){
                    $('.bg').css('display','none');
                }

                if(xhr.responseText === "新增成功，信件已送出"){

                    alert("新增成功，信件已送出");
                    localStorage.clear();
                    location.href = "login.html";
                }

            }else{
                alert( xhr.status );
            }
        }
    };

    var json_upload =  JSON.stringify(data);
    xhr.open("POST", "sentMakeup.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(json_upload);

}

function htmlToCanvas() {

    $('footer').css('display','none');

    html2canvas($('#content'), {
        dpi: window.devicePixelRatio*4,
        onrendered: function (canvas) {
            // $('#postData').append("<img src="+canvas.toDataURL("image/png")+">"); ////pdf檢查用
            localStorage.setItem('PDFImage',canvas.toDataURL("image/png"));
        }
    });


    $('footer').css('display','block');
    return true
}

function getlastData(vipids) {

    if(vipids){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange=function (){
            if( xhr.readyState == 4){
                if( xhr.status == 200 ){
                    if(xhr.responseXML.getElementsByTagName('RTNMSG')[0].textContent !== "查無檢驗資料") {
                        getMackupData(xhr.responseXML);
                    }else{
                        if(sessionData() === true){
                            htmlToCanvas();
                        }
                    }

                }else{
                    alert("伺服器回應有狀況");
                    console.log(xhr.status);
                }
            }
        };

        // var url = 'getMackupData.php?VIPIDS='+ vipids;
        var url = 'getTestData.php?VIPIDS='+ vipids; //最新一筆檢測資料
        xhr.open("POST", url, true);
        xhr.send( null );

    }

}



