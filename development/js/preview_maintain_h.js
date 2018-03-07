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
    sessionDate();

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

        var url = 'getMaintainData.php?VIPIDS='+ vipids;
        xhr.open("GET", url, true);
        xhr.send( null );

    }

});


$('.next').on('click',function(){

   if(htmlToCanvas){
        sentData();
    }


    $('.bg').css('display','block');

})




$('.prev').on('click',function(){

    location.href = "maintain_05.html";
});








function sessionDate(){

    var sg = parseInt(localStorage.SG);
    var skinLevel = parseInt(localStorage.SKIN_LEVEL);
    var transparency = parseInt(localStorage.TRANSPARENCY_C);
    var skin_color_c = parseInt(localStorage.SKIN_COLOR_C);
    var skin_light_c = parseInt(localStorage.SKIN_LIGHT_C);
    var elasticity = parseInt(localStorage.ELASTICITY);

    var natural = parseInt(localStorage.NATURAL_C);
    var acquired = parseInt(localStorage.ACQUIRED_C);


    $('.theme_c').text(localStorage.SUBJECT);

    if(localStorage.canvasFace_3 !== undefined){
        canvasImg();

    }

    $('.suggest').text(localStorage.MAKUP_TXT_C);

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

    if(localStorage.HORNY_C !=="0"){

        $('#0').attr('checked','checked');
        $('#sHORNY').text(specEx(localStorage.HORNY_C));

        if(localStorage.HORNY_T !== ""){
            $('#0').attr('checked','checked');
            $('#sHORNY').text(localStorage.HORNY_T);
        }

    }


    if(localStorage.DRYING_C !=="0"){

        $('#2').attr('checked','checked');
        $('#sDRYING').text(specEx(localStorage.DRYING_C));

        if(localStorage.DRYING_T !== ""){
            $('#2').attr('checked','checked');
            $('#sDRYING').text(localStorage.DRYING_T);
        }


    }


    if(localStorage.WHITENING_C !=="0"){

        $('#3').attr('checked','checked');
        $('#sWHITENING').text(specEx(localStorage.WHITENING_C));

        if(localStorage.WHITENING_T !== ""){
            $('#3').attr('checked','checked');
            $('#sWHITENING').text(localStorage.WHITENING_T);
        }


    }




    if(localStorage.ELASTICITY_C !=="0"){

        $('#4').attr('checked','checked');
        $('#sELASTICITY').text(specEx(localStorage.ELASTICITY_C));

        if(localStorage.ELASTICITY_T !== ""){
            $('#4').attr('checked','checked');
            $('#sELASTICITY').text(localStorage.ELASTICITY_T);
        }



    }


    if(localStorage.UV_C !=="0"){

        $('#5').attr('checked','checked');
        $('#sUV').text(specEx(localStorage.UV_C));

        if(localStorage.UV_T !== ""){
            $('#5').attr('checked','checked');
            $('#sUV').text(localStorage.UV_T);
        }


    }


    if(localStorage.OTHER_C !=="0"){

        $('#6').attr('checked','checked');
        $('#sOTHER').text(specEx(localStorage.OTHER_C));

        if(localStorage.OTHER_T !== ""){
            $('#6').attr('checked','checked');
            $('#sOTHER').text(localStorage.OTHER_T);
        }

    }



    $('#SUGGESTION').text(localStorage.SUGGESTION);

}

function canvasImg() {
    // $("#canvasFace_3").append("<div style='width:110%' src="+localStorage.canvasFace_3+">");
    $("#canvasFace_3").css('background-image',"url('"+localStorage.canvasFace_3+"')");
}


function getMaintainData(xmlDoc) {

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

function specEx(tmp) {

    switch (tmp) {
        case '14':
            tmp = "去除老廢角質";
            break;
        case '15':
            tmp = "提升角層濕潤度";
            break;
        case '16':
            tmp = "其他";
            break;
        case '17':
            tmp = "補充水分,深層鎖水造水";
            break;
        case '18':
            tmp = "給予肌膚滋潤,防止養分流失";
            break;
        case '19':
            tmp = "其他";
            break;
        case '20':
            tmp = "排出,抑制黑色素";
            break;
        case '21':
            tmp = "改善真皮層「黃色化」";
            break;
        case '22':
            tmp = "促進血液循環正常,提高血液含氧量";
            break;
        case '23':
            tmp = "其他";
            break;
        case '24':
            tmp = "活絡真皮細胞活力";
            break;
        case '25':
            tmp = "促進膠原,彈力蛋白纖維生成";
            break;
        case '26':
            tmp = "其他";
            break;
        case '27':
            tmp = "白天做好防護";
            break;
        case '28':
            tmp = "其他";
            break;
        case '29':
            tmp = "控油,抑制多餘油分";
            break;
        case '30':
            tmp = "收斂毛孔";
            break;
        case '31':
            tmp = "去除粉刺";
            break;
        case '32':
            tmp = "消炎治痘";
            break;
        case '33':
            tmp = "促進血液循環順暢";
            break;
        case '34':
            tmp = "黑眼圈:促進眼週血液循環順暢";
            break;
        case '35':
            tmp = "敏感:提升肌膚防禦力";
            break;
        case '36':
            tmp = "其他";
            break;
        default:
            tmp = "無選取";
    }


    return (tmp);
}

function sentData() {





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
        SPOTS: localStorage.SPOTS,
        CB: localStorage.CB,
        DARK_CIRCLES: localStorage.DARK_CIRCLES,
        TE: localStorage.TE,
        WRINKLE: localStorage.WRINKLE,
        SENSITIVE: localStorage.SENSITIVE,
        AIR_DRY: localStorage.AIR_DRY,
        DUST: localStorage.DUST,
        AIR: localStorage.AIR,
        UV_LUX: localStorage.UV_LUX,
        AGE: localStorage.AGE,
        FOOD: localStorage.FOOD,
        SLEEP_L: localStorage.SLEEP_L,
        PRESSURE: localStorage.PRESSURE,
        MOISTURIZING: localStorage.MOISTURIZING,
        WHITE: localStorage.WHITE,
        ANTI_AGE: localStorage.ANTI_AGE,
        REMOVER: localStorage.REMOVER,
        CLEAN: localStorage.CLEAN,
        ME: localStorage.ME,
        LOTION: localStorage.LOTION,
        EMULSION: localStorage.EMULSION,
        BEAUTY_FLUID: localStorage.BEAUTY_FLUID,
        CREAM: localStorage.CREAM,
        CREAM_PROTECTS: localStorage.CREAM_PROTECTS,
        CREAM_CONTROL: localStorage.CREAM_CONTROL,
        OTHER_M: localStorage.OTHER_M,
        OTHER_MC: localStorage.OTHER_MC,
        PASTE: localStorage.PASTE,
        PASTE_C: localStorage.PASTE_C,
        LIQUID: localStorage.LIQUID,
        LIQUID_C: localStorage.LIQUID_C,
        CREAMY: localStorage.CREAMY,
        CREAMY_C: localStorage.CREAMY_C,
        CAKE: localStorage.CAKE,
        CAKE_C: localStorage.CAKE_C,
        POWDER: localStorage.POWDER,
        POWDER_C: localStorage.POWDER_C,
        AIRB: localStorage.AIRB,
        AIRB_C: localStorage.AIRB_C,
        BB: localStorage.BB,
        BB_C: localStorage.BB_C,
        APPROVE_C: localStorage.APPROVE_C,
        SUBJECT: localStorage.SUBJECT,
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
        SKIN_COLOR_C: localStorage.SKIN_COLOR_C,
        SKIN_LIGHT: localStorage.SKIN_LIGHT_O,
        SKIN_LIGHT_C: localStorage.SKIN_LIGHT_C,
        HORNY_C: localStorage.HORNY_C,
        HORNY_T: localStorage.HORNY_T,
        DRYING_C: localStorage.DRYING_C,
        DRYING_T: localStorage.DRYING_T,
        WHITENING_C: localStorage.WHITENING_C,
        WHITENING_T: localStorage.WHITENING_T,
        ELASTICITY_C: localStorage.ELASTICITY_C,
        ELASTICITY_T: localStorage.ELASTICITY_T,
        UV_C: localStorage.UV_C,
        UV_T: localStorage.UV_T,
        OTHER_C: localStorage.OTHER_C,
        SUGGESTION: localStorage.SUGGESTION,
        MAKEUP_URL: localStorage.canvasFace_2,
        SKIN_WATER_URL: localStorage.canvasFace_3,
        PDFImage:localStorage.PDFImage
    };

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function (){
        if( xhr.readyState == 4){
            if( xhr.status == 200 ){
                // $('#postData').append("<img src="+xhr.responseText+">");
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
    xhr.open("POST", "sentMaintain.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(json_upload);

}

function htmlToCanva() {


    html2canvas($('#content'), {
        dpi: window.devicePixelRatio*4,
        onrendered: function (canvas) {
            // $('#postData').append("<img src="+canvas.toDataURL("image/png")+">");
            localStorage.setItem('PDFImage',canvas.toDataURL("image/png"));
        }
    });

    return true;


}





