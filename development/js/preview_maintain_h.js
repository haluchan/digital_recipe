$(function(){


    var date = sessionStorage.getItem('DATE');
    var vipnm = sessionStorage.getItem('VIPNM');
    var vipids= sessionStorage.getItem('VIPIDS');
    var bcnm = sessionStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);


    getlastData(vipids);
    sessionData();


    //前一次資料

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








function sessionData(){

    var sg = parseInt(sessionStorage.SG);
    var skinLevel = parseInt(sessionStorage.SKIN_LEVEL);
    var transparency = parseInt(sessionStorage.TRANSPARENCY_C);
    var skin_color_c = parseInt(sessionStorage.SKIN_COLOR_C);
    var skin_light_c = parseInt(sessionStorage.SKIN_LIGHT_C);
    var elasticity = parseInt(sessionStorage.ELASTICITY);

    var natural = parseInt(sessionStorage.NATURAL_C);
    var acquired = parseInt(sessionStorage.ACQUIRED_C);


    $('.theme_c').text(sessionStorage.SUBJECT);

    if(sessionStorage.canvasFace_3 !== undefined){
        canvasImg();

    }

    $('.suggest').text(sessionStorage.MAKUP_TXT_C);


    var removeValue = parseInt(sessionStorage.BASC_REMOVE);
    var cleanValue = parseInt(sessionStorage.BASC_CLEAN);
    var wetValue = parseInt(sessionStorage.BASC_WET);

    $("#basc_remove").text(removeEx(removeValue));
    $("#basc_clean").text(cleanEx(cleanValue));
    $("#basc_wet").text(wetEx(wetValue));

    $("#NATURAL_C").text(naturalEX(natural));
    $("#ACQUIRED_C").text(acquiredEX(acquired));
    $("#MOISTURE").text(sessionStorage.MOISTURE);
    $("#SEBUM").text(sessionStorage.SEBUM);
    $("#CHEEK_COLOR").text(sessionStorage.CHEEK_COLOR);
    $("#TENSION").text(sessionStorage.TENSION);
    $("#ELASTICITY").text(elasticityEX(elasticity));
    $("#SG").text(sessionStorage.SG);
    $("#TRANSPARENCY").text(sessionStorage.TRANSPARENCY);
    $("#TRANSPARENCY_C").text(transparencyEX(transparency));
    $("#HORNY").text(sessionStorage.HORNY);
    $("#SKIN_LEVEL").text(skinLevelEX(skinLevel));

    $('div[name="SKIN_COLOR_C"]').text(skin_color_cEX(skin_color_c));
    $('div[name="SKIN_LIGHT_C"]').text(skin_light_cEX(skin_light_c));
    $('div[name="SKIN_LIGHT_O"]').text(sessionStorage.SKIN_LIGHT_O);



    if(sessionStorage.BASC_WET !=="0" || sessionStorage.BASC_CLEAN !=="0" || sessionStorage.BASC_REMOVE !=="0"){

        $('#basic').attr('checked','checked');
    }



    if(sessionStorage.HORNY_C !=="0"){

        $('#0').attr('checked','checked');
        $('#sHORNY').text(specEx(sessionStorage.HORNY_C));
        $('#sHORNY').css('display','block');

        if(sessionStorage.HORNY_T !== "0"){
            $('#0').attr('checked','checked');
            $('#pHORNY').text(hornyEx(sessionStorage.HORNY_T));
            $('#pHORNY').siblings(".arrow").css('display','block');
            $('#pHORNY').css('display','block');
        }
    }


    if(sessionStorage.DRYING_C !=="0"){

        $('#2').attr('checked','checked');
        $('#sDRYING').text(specEx(sessionStorage.DRYING_C));
        $('#sDRYING').css('display','block');

        if(sessionStorage.DRYING_T !== "0"){
            $('#2').attr('checked','checked');
            $('#pDRYING').text(dryingEx(sessionStorage.DRYING_T));
            $('#pDRYING').siblings(".arrow").css('display','block');
            $('#pDRYING').css('display','block');
        }


    }


    if(sessionStorage.WHITENING_C !=="0"){

        $('#3').attr('checked','checked');
        $('#sWHITENING').text(specEx(sessionStorage.WHITENING_C));
        $('#sWHITENING').css('display','block');

        if(sessionStorage.WHITENING_T !== "0"){
            $('#3').attr('checked','checked');
            $('#pWHITENING').text(whiteningEx(sessionStorage.WHITENING_T));
            $('#pWHITENING').siblings(".arrow").css('display','block');
            $('#pWHITENING').css('display','block');
        }


    }




    if(sessionStorage.ELASTICITY_C !=="0"){

        $('#4').attr('checked','checked');
        $('#sELASTICITY').text(specEx(sessionStorage.ELASTICITY_C));
        $('#sELASTICITY').css('display','block');

        if(sessionStorage.ELASTICITY_T !== "0"){
            $('#4').attr('checked','checked');
            $('#pELASTICITY').text(elasticityEx(sessionStorage.ELASTICITY_T));
            $('#pELASTICITY').siblings(".arrow").css('display','block');
            $('#pELASTICITY').css('display','block');
        }



    }


    if(sessionStorage.UV_C !=="0"){

        $('#5').attr('checked','checked');
        $('#sUV').text(specEx(sessionStorage.UV_C));
        $('#sUV').css('display','block');

        if(sessionStorage.UV_T !== "0"){
            $('#5').attr('checked','checked');
            $('#pUV').text(uvEx(sessionStorage.UV_T));
            $('#pUV').siblings(".arrow").css('display','block');
            $('#pUV').css('display','block');
        }


    }


    if(sessionStorage.OTHER_C !=="0"){

        $('#6').attr('checked','checked');
        $('#sOTHER').text(specEx(sessionStorage.OTHER_C));
        $('#sOTHER').css('display','block');

        if(sessionStorage.OTHER_T !== "0"){
            $('#6').attr('checked','checked');
            $('#pOTHER').text(otherEx(sessionStorage.OTHER_T));
            $('#pOTHER').siblings(".arrow").css('display','block');
            $('#pOTHER').css('display','block');
        }

    }


    if(sessionStorage.SUGGESTION !== undefined){
        var textCont = sessionStorage.SUGGESTION;
        $('.suggest').append('<span>' + textCont.replace(/\n/g,'<br/>') + '<span>');
    }

return true

}

function canvasImg() {
    // $("#canvasFace_3").append("<div style='width:110%' src="+sessionStorage.canvasFace_3+">");
    $("#canvasFace_3").css('background-image',"url('"+sessionStorage.canvasFace_3+"')");
}


function getMaintainData(xmlDoc) {

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

    setTimeout(htmlToCanvas(),0);
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
        default:
            tmp = "";



    }

    return(tmp);
}

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
        default:
            tmp = "無選取";


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
        default:
            tmp = "無選取";



    }

    return(tmp);

}

function skin_color_cEX(tmp) {

    switch(tmp) {
        case 0:
            tmp = "無選取";
            break;
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
        default:
            tmp = "無選取";

    }

    return(tmp);


}

function skin_light_cEX(tmp) {

    switch(tmp) {
        case 0:
            tmp = "無選取";
            break;
        case 1:
            tmp = "B";
            break;
        case 2:
            tmp = "Y";
            break;
        case 3:
            tmp = "P";
            break;
        case undefined:
            tmp = "無選取";
            break;
        default:
            tmp = "無選取";


    }

    return(tmp);


}


function acquiredEX(tmp) {

    switch(tmp) {
        case 0:
            tmp = "無";
            break;
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
        default:
            tmp = "無";


    }

    return(tmp);


}

function naturalEX(tmp) {

    switch(tmp) {
        case 0:
            tmp = "無";
            break;
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
        default:
            tmp = "無";


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
        case "1405":
            tmp = "冰點淨白水慕斯";
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
        case "1505":
            tmp = "冰點淨白水慕斯";
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
        VIPIDS: sessionStorage.VIPIDS,
        DATE: sessionStorage.DATE,
        MAIL: sessionStorage.MAIL,
        VIPNM: sessionStorage.VIPNM,
        BCID: sessionStorage.BCID,
        CUSTNO: sessionStorage.CUSTNO,
        DRY: sessionStorage.DRY,
        OIL: sessionStorage.OIL,
        PORES: sessionStorage.PORES,
        ACEN: sessionStorage.ACEN,
        DULL: sessionStorage.DULL,
        SPOTS: sessionStorage.SPOTS,
        CB: sessionStorage.CB,
        DARK_CIRCLES: sessionStorage.DARK_CIRCLES,
        TE: sessionStorage.TE,
        WRINKLE: sessionStorage.WRINKLE,
        SENSITIVE: sessionStorage.SENSITIVE,
        AIR_DRY: sessionStorage.AIR_DRY,
        DUST: sessionStorage.DUST,
        AIR: sessionStorage.AIR,
        UV_LUX: sessionStorage.UV_LUX,
        AGE: sessionStorage.AGE,
        FOOD: sessionStorage.FOOD,
        SLEEP_L: sessionStorage.SLEEP_L,
        PRESSURE: sessionStorage.PRESSURE,
        MOISTURIZING: sessionStorage.MOISTURIZING,
        WHITE: sessionStorage.WHITE,
        ANTI_AGE: sessionStorage.ANTI_AGE,
        REMOVER: sessionStorage.REMOVER,
        CLEAN: sessionStorage.CLEAN,
        ME: sessionStorage.ME,
        LOTION: sessionStorage.LOTION,
        EMULSION: sessionStorage.EMULSION,
        BEAUTY_FLUID: sessionStorage.BEAUTY_FLUID,
        CREAM: sessionStorage.CREAM,
        CREAM_PROTECTS: sessionStorage.CREAM_PROTECTS,
        CREAM_CONTROL: sessionStorage.CREAM_CONTROL,
        OTHER_M: sessionStorage.OTHER_M,
        OTHER_MC: sessionStorage.OTHER_MC,
        PASTE: sessionStorage.PASTE,
        PASTE_C: sessionStorage.PASTE_C,
        LIQUID: sessionStorage.LIQUID,
        LIQUID_C: sessionStorage.LIQUID_C,
        CREAMY: sessionStorage.CREAMY,
        CREAMY_C: sessionStorage.CREAMY_C,
        CAKE: sessionStorage.CAKE,
        CAKE_C: sessionStorage.CAKE_C,
        POWDER: sessionStorage.POWDER,
        POWDER_C: sessionStorage.POWDER_C,
        AIRB: sessionStorage.AIRB,
        AIRB_C: sessionStorage.AIRB_C,
        BB: sessionStorage.BB,
        BB_C: sessionStorage.BB_C,
        APPROVE_C: sessionStorage.APPROVE_C,
        SUBJECT: sessionStorage.SUBJECT,
        NATURAL_C: sessionStorage.NATURAL_C,
        ACQUIRED_C: sessionStorage.ACQUIRED_C,
        MOISTURE: sessionStorage.MOISTURE,
        SEBUM: sessionStorage.SEBUM,
        TENSION: sessionStorage.TENSION,
        ELASTICITY: sessionStorage.ELASTICITY,
        SG: sessionStorage.SG,
        TRANSPARENCY: sessionStorage.TRANSPARENCY,
        TRANSPARENCY_C: sessionStorage.TRANSPARENCY_C,
        HORNY: sessionStorage.HORNY,
        SKIN_LEVEL: sessionStorage.SKIN_LEVEL,
        SKIN_COLOR_C: sessionStorage.SKIN_COLOR_C,
        SKIN_LIGHT: sessionStorage.SKIN_LIGHT_O,
        SKIN_LIGHT_C: sessionStorage.SKIN_LIGHT_C,
        BASC: sessionStorage.BASC,
        BASC_REMOVER: sessionStorage.BASC_REMOVE,
        BASC_CLEAN: sessionStorage.BASC_CLEAN,
        BASC_WET: sessionStorage.BASC_WET,
        HORNY_C: sessionStorage.HORNY_C,
        HORNY_T: sessionStorage.HORNY_T,
        DRYING_C: sessionStorage.DRYING_C,
        DRYING_T: sessionStorage.DRYING_T,
        WHITENING_C: sessionStorage.WHITENING_C,
        WHITENING_T: sessionStorage.WHITENING_T,
        ELASTICITY_C: sessionStorage.ELASTICITY_C,
        ELASTICITY_T: sessionStorage.ELASTICITY_T,
        UV_C: sessionStorage.UV_C,
        UV_T: sessionStorage.UV_T,
        OTHER_C: sessionStorage.OTHER_C,
        OTHER_T: sessionStorage.OTHER_T,
        SUGGESTION: sessionStorage.SUGGESTION,
        MAKEUP_URL: sessionStorage.canvasFace_2,
        SKIN_WATER_URL: sessionStorage.canvasFace_3,
        PDFImage:sessionStorage.PDFImage
    };

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function (){
        if( xhr.readyState == 4){
            if( xhr.status == 200 ){

                // $('#postData').text(xhr.responseXML.getElementsByTagName('MSG')[0].textContent); //php回傳內容

                if(xhr.responseXML !== false){
                    $('.bg').css('display','none');
                }

                if(xhr.responseXML.getElementsByTagName('MSG')[0].textContent === "新增成功，信件已送出"){
                    alert("新增成功，信件已送出");
                    sessionStorage.clear();
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

    var footer = $('footer');

    footer.css('display','none');

    html2canvas($('#content'), {
        dpi: window.devicePixelRatio*4,
        onrendered: function (canvas) {
            // $('#postData').append("<img src="+canvas.toDataURL("image/png")+">"); //pdf檢查用
            sessionStorage.setItem('PDFImage',canvas.toDataURL("image/png"));
        }
    });


    footer.css('display','block');
    return true;
}

function getlastData(vipids) {

    if(vipids){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange=function (){
            if( xhr.readyState == 4){
                if( xhr.status == 200 ){

                    // if(xhr.responseXML.getElementsByTagName('RTNMSG')[0].textContent !== "查無檢驗資料"){
                    //
                        getMaintainData(xhr.responseXML);
                    // }else {
                    //     if(sessionData() === true){
                    //         htmlToCanvas();
                    //     }
                    // }

                }else{
                    alert("伺服器回應有狀況");
                    console.log(xhr.status);
                }
            }
        };

        var url = 'getMaintainData.php?VIPIDS='+ vipids;
        // var url = 'getTestData.php?VIPIDS='+ vipids; //最新一筆檢測資料
        xhr.open("POST", url, true);
        xhr.send( null );

    }

}



