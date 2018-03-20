$(document).ready(function(){


    var date = localStorage.getItem('DATE');
    var vipnm = localStorage.getItem('VIPNM');
    var vipids= localStorage.getItem('VIPIDS');
    var bcnm = localStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);



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

    //產生下拉選單
    sessionDate(htmlToCanvas);

});


$('.next').on('click',function(){

   if(htmlToCanvas()){
        sentData();
    }


    $('.bg').css('display','block');

});




$('.prev').on('click',function(){

    location.href = "maintain_05.html";
});








function sessionDate(callback){

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


    var removeValue = parseInt(localStorage.BASC_REMOVE);
    var cleanValue = parseInt(localStorage.BASC_CLEAN);
    var wetValue = parseInt(localStorage.BASC_WET);

    $("#basc_remove").text(removeEx(removeValue));
    $("#basc_clean").text(cleanEx(cleanValue));
    $("#basc_wet").text(wetEx(wetValue));

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



    if(localStorage.BASC_WET !=="0" || localStorage.BASC_CLEAN !=="0" || localStorage.BASC_REMOVE !=="0"){

        $('#basic').attr('checked','checked');
    }



    if(localStorage.HORNY_C !=="0"){

        $('#0').attr('checked','checked');
        $('#sHORNY').text(specEx(localStorage.HORNY_C));
        $('#sHORNY').css('display','block');

        if(localStorage.HORNY_T !== "0"){
            $('#0').attr('checked','checked');
            $('#pHORNY').text(hornyEx(localStorage.HORNY_T));
            $('#pHORNY').siblings(".arrow").css('display','block');
            $('#pHORNY').css('display','block');
        }
    }


    if(localStorage.DRYING_C !=="0"){

        $('#2').attr('checked','checked');
        $('#sDRYING').text(specEx(localStorage.DRYING_C));
        $('#sDRYING').css('display','block');

        if(localStorage.DRYING_T !== "0"){
            $('#2').attr('checked','checked');
            $('#pDRYING').text(dryingEx(localStorage.DRYING_T));
            $('#pDRYING').siblings(".arrow").css('display','block');
            $('#pDRYING').css('display','block');
        }


    }


    if(localStorage.WHITENING_C !=="0"){

        $('#3').attr('checked','checked');
        $('#sWHITENING').text(specEx(localStorage.WHITENING_C));
        $('#sWHITENING').css('display','block');

        if(localStorage.WHITENING_T !== "0"){
            $('#3').attr('checked','checked');
            $('#pWHITENING').text(whiteningEx(localStorage.WHITENING_T));
            $('#pWHITENING').siblings(".arrow").css('display','block');
            $('#pWHITENING').css('display','block');
        }


    }




    if(localStorage.ELASTICITY_C !=="0"){

        $('#4').attr('checked','checked');
        $('#sELASTICITY').text(specEx(localStorage.ELASTICITY_C));
        $('#sELASTICITY').css('display','block');

        if(localStorage.ELASTICITY_T !== "0"){
            $('#4').attr('checked','checked');
            $('#pELASTICITY').text(elasticityEx(localStorage.ELASTICITY_T));
            $('#pELASTICITY').siblings(".arrow").css('display','block');
            $('#pELASTICITY').css('display','block');
        }



    }


    if(localStorage.UV_C !=="0"){

        $('#5').attr('checked','checked');
        $('#sUV').text(specEx(localStorage.UV_C));
        $('#sUV').css('display','block');

        if(localStorage.UV_T !== "0"){
            $('#5').attr('checked','checked');
            $('#pUV').text(uvEx(localStorage.UV_T));
            $('#pUV').siblings(".arrow").css('display','block');
            $('#pUV').css('display','block');
        }


    }


    if(localStorage.OTHER_C !=="0"){

        $('#6').attr('checked','checked');
        $('#sOTHER').text(specEx(localStorage.OTHER_C));
        $('#sOTHER').css('display','block');

        if(localStorage.OTHER_T !== "0"){
            $('#6').attr('checked','checked');
            $('#pOTHER').text(otherEx(localStorage.OTHER_T));
            $('#pOTHER').siblings(".arrow").css('display','block');
            $('#pOTHER').css('display','block');
        }

    }



    $('#SUGGESTION').text(localStorage.SUGGESTION);



    callback();

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

function removeEx(tmp) {

    switch(tmp) {
        case 1:
            tmp = "瞬卸潔膚油EX";
            break;
        case 2:
            tmp = "瞬卸潔膚蜜EX";
            break;
        case 3:
            tmp = "瞬卸潔膚霜EX";
            break;
        case 4:
            tmp = "逆齡再生溫感卸妝凝露";
            break;
        case 5:
            tmp = "眼唇卸妝液";
            break;
        default:
            tmp = "";
    }

    return(tmp);
}


function cleanEx(tmp){

    switch(tmp) {
        case 1:
            tmp = "舒緩潔膚乳";
            break;
        case 2:
            tmp = "海洋礦物皂";
            break;
        case 3:
            tmp = "透明潔膚乳e";
            break;
        case 4:
            tmp = "柔潤潔膚乳N";
            break;
        default:
            tmp = "";
    }

    return(tmp);
}



function wetEx(tmp) {

    switch(tmp) {
        case 1:
            tmp = "基礎1";
            break;
        case 2:
            tmp = "基礎2";
            break;
        case 3:
            tmp = "基礎3";
            break;
        case 4:
            tmp = "基礎4";
            break;
        case 5:
            tmp = "強化1";
            break;
        case 6:
            tmp = "強化2";
            break;
        case 7:
            tmp = "強化3";
            break;
        case 8:
            tmp = "強化4";
            break;
        case 9:
            tmp = "超強化1";
            break;
        case 10:
            tmp = "超強化2";
            break;
        case 11:
            tmp = "超強化3";
            break;
        case 12:
            tmp = "超強化4";
            break;
        case 13:
            tmp = "舒緩1";
            break;
        case 14:
            tmp = "舒緩2";
            break;
        case 15:
            tmp = "極致1";
            break;
        case 16:
            tmp = "極致2";
            break;
        case 17:
            tmp = "極致3";
            break;
        default:
            tmp = "";
    }

    return(tmp);
}



function hornyEx(tmp) {

    switch(tmp) {
        case "1401":
            tmp = "泥狀角質按摩霜e";
            break;
        case "1402":
            tmp = "逆齡再生修復精露";
            break;
        case "1403":
            tmp = "角質發光液EX 1";
            break;
        case "1404":
            tmp = "角質發光液EX 2";
            break;
        case "1501":
            tmp = "泥狀角質按摩霜e";
            break;
        case "1502":
            tmp = "逆齡再生修復精露";
            break;
        case "1503":
            tmp = "角質發光液EX 1";
            break;
        case "1504":
            tmp = "角質發光液EX 2";
            break;

    }

    return(tmp);


}





function dryingEx(tmp) {

    switch(tmp) {
        case "1701":
            tmp = "美膚膜力保濕露";
            break;
        case "1702":
            tmp = "美膚保水菁華棒";
            break;
        case "1703":
            tmp = "美膚溫感眼部精華";
            break;
        case "1704":
            tmp = "膜力護唇抗UV精華";
            break;
        case "1705":
            tmp = "美膚微整機能液";
            break;
        case "1706":
            tmp = "美膚微整精華凝凍";
            break;
        case "1801":
            tmp = "美膚膜力保濕露";
            break;
        case "1802":
            tmp = "美膚保水菁華棒";
            break;
        case "1803":
            tmp = "美膚溫感眼部精華";
            break;
        case "1804":
            tmp = "膜力護唇抗UV精華";
            break;
        case "1805":
            tmp = "美膚微整機能液";
            break;
        case "1806":
            tmp = "美膚微整精華凝凍";
            break;

    }

    return(tmp);


}




function whiteningEx(tmp) {

    switch(tmp) {
        case "2001":
            tmp = "肌淨白精萃OP";
            break;
        case "2002":
            tmp = "肌淨白面膜";
            break;
        case "2101":
            tmp = "肌淨白精萃OP";
            break;
        case "2102":
            tmp = "肌淨白面膜";
            break;
        case "2201":
            tmp = "肌淨白精萃OP";
            break;
        case "2202":
            tmp = "肌淨白面膜";
            break;

    }

    return(tmp);


}



function elasticityEx(tmp) {

    switch(tmp) {
        case "2401":
            tmp = "逆齡再生無痕乳霜";
            break;
        case "2402":
            tmp = "逆齡再生無痕眼膜霜";
            break;
        case "2403":
            tmp = "肌能膜力緊緻精華";
            break;
        case "2404":
            tmp = "肌能補充膠囊";
            break;
        case "2405":
            tmp = "緊緻集效霜";
            break;
        case "2406":
            tmp = "抗皺集效霜";
            break;
        case "2501":
            tmp = "逆齡再生無痕乳霜";
            break;
        case "2502":
            tmp = "逆齡再生無痕眼膜霜";
            break;
        case "2503":
            tmp = "肌能膜力緊緻精華";
            break;
        case "2504":
            tmp = "肌能補充膠囊";
            break;
        case "2505":
            tmp = "緊緻集效霜";
            break;
        case "2506":
            tmp = "抗皺集效霜";
            break;

    }

    return(tmp);


}




function uvEx(tmp) {

    switch(tmp) {
        case "2701":
            tmp = "舒緩隔光霜EX";
            break;
        case "2702":
            tmp = "臉部抗痕防護乳EX";
            break;
        case "2703":
            tmp = "全身抗痕防護乳";
            break;

    }

    return(tmp);

}



function otherEx(tmp) {

    switch(tmp) {
        case "2901":
            tmp = "粉刺敷面組合N";
            break;
        case "2902":
            tmp = "急效抗壓馴荳精華";
            break;
        case "2903":
            tmp = "身體馴荳噴霧EX";
            break;
        case "2904":
            tmp = "按摩水凝露N";
            break;
        case "3001":
            tmp = "粉刺敷面組合N";
            break;
        case "3002":
            tmp = "急效抗壓馴荳精華";
            break;
        case "3003":
            tmp = "2步驟粉刺組";
            break;
        case "3004":
            tmp = "身體馴荳噴霧EX";
            break;
        case "3005":
            tmp = "按摩水凝露N";
            break;
        case "3101":
            tmp = "粉刺敷面組合N";
            break;
        case "3102":
            tmp = "急效抗壓馴荳精華";
            break;
        case "3103":
            tmp = "2步驟粉刺組";
            break;
        case "3104":
            tmp = "身體馴荳噴霧EX";
            break;
        case "3105":
            tmp = "按摩水凝露N";
            break;
        case "3201":
            tmp = "粉刺敷面組合N";
            break;
        case "3202":
            tmp = "急效抗壓馴荳精華";
            break;
        case "3203":
            tmp = "2步驟粉刺組";
            break;
        case "3204":
            tmp = "身體馴荳噴霧EX";
            break;
        case "3205":
            tmp = "按摩水凝露N";
            break;
        case "3301":
            tmp = "粉刺敷面組合N";
            break;
        case "3302":
            tmp = "急效抗壓馴荳精華";
            break;
        case "3303":
            tmp = "2步驟粉刺組";
            break;
        case "3304":
            tmp = "身體馴荳噴霧EX";
            break;
        case "3305":
            tmp = "按摩水凝露N";
            break;
        case "3401":
            tmp = "粉刺敷面組合N";
            break;
        case "3402":
            tmp = "急效抗壓馴荳精華";
            break;
        case "3403":
            tmp = "2步驟粉刺組";
            break;
        case "3404":
            tmp = "身體馴荳噴霧EX";
            break;
        case "3405":
            tmp = "按摩水凝露N";
            break;
        case "3501":
            tmp = "粉刺敷面組合N";
            break;
        case "3502":
            tmp = "急效抗壓馴荳精華";
            break;
        case "3503":
            tmp = "2步驟粉刺組";
            break;
        case "3504":
            tmp = "身體馴荳噴霧EX";
            break;
        case "3505":
            tmp = "按摩水凝露N";
            break;


    }

    return(tmp);
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
        BASC: localStorage.BASC,
        BASC_REMOVER: localStorage.BASC_REMOVE,
        BASC_CLEAN: localStorage.BASC_CLEAN,
        BASC_WET: localStorage.BASC_WET,
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
        OTHER_T: localStorage.OTHER_T,
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

function htmlToCanvas() {


    html2canvas($('#content'), {
        dpi: window.devicePixelRatio*4,
        onrendered: function (canvas) {
            // $('#postData').append("<img src="+canvas.toDataURL("image/png")+">");
            localStorage.setItem('PDFImage',canvas.toDataURL("image/png"));
        }
    });

    return true;


}





