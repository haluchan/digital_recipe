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


    // htmlToCanvas();
   // if(htmlToCanvas === true){

        sentData();
        submit();
   // }

    $('.bg').css('display','block');
});



$('.prev').on('click',function(){
    window.open('makeup_04.html','_self');
});

//取消sunbimt
function submit() {
    var submitId=$('.next');
    submitId.unbind("click");
    console.log('offclick');
    setTimeout(function(){
      submitId.on('click',function () {
        sentData();
        submit();
        $('.bg').css('display','block');
      });
      console.log('onclick');
    },8000);
}



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

function sessionData() {

    var sg = parseInt(sessionStorage.SG);
    var skinLevel = parseInt(sessionStorage.SKIN_LEVEL);
    var transparency = parseInt(sessionStorage.TRANSPARENCY_C);
    var skin_color_c = parseInt(sessionStorage.SKIN_COLOR_C);
    var skin_light_c = parseInt(sessionStorage.SKIN_LIGHT_C);
    var elasticity = parseInt(sessionStorage.ELASTICITY);
    var natural = parseInt(sessionStorage.NATURAL_C);
    var acquired = parseInt(sessionStorage.ACQUIRED_C);


    $('.theme_c').text(sessionStorage.SUBJECT);
    if(sessionStorage.SUGGESTION !== undefined){
        var textCont = sessionStorage.SUGGESTION;
        $('.suggest').append('<span>' + textCont.replace(/\n/g,'<br/>') + '<span>');
    }
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



    $("input[name*='CREAM_F']").val(sessionStorage.CREAM_F);
    $("input[name*='COSMETICS_F']").val(sessionStorage.COSMETICS_F);
    $("input[name*='WATER_F']").val(sessionStorage.WATER_F);
    $("input[name*='POWDER_F']").val(sessionStorage.POWDER_F);
    $("input[name*='FOUNDATION_F']").val(sessionStorage.FOUNDATION_F);
    $("input[name*='PRESSED_F']").val(sessionStorage.PRESSED_F);

    for (var i = 0; i < 6; i++) {
       if( $('input')[i].value === "1"){
           $('input')[i].setAttribute('checked','checked');
       }

    }

    var len = sessionStorage.length;

    // for (var i = 0; i < len; i++) {
        for (var j = 0; j < 10; j++) {

            // if (sessionStorage.key(i) === "MAKUP_TEXT_" + j) {
            if (sessionStorage.getItem("MAKUP_TEXT_" + j)){
                var tmp =sessionStorage.getItem("MAKUP_TEXT_" + j);
                if(tmp !== ""){
                    $('.wrap').append("<div class='tip'>"+tmp+"</div>");
                }
            }
            // }
        }
    // }

    canvasImg();

    if(sessionStorage.MAKUP_TXT_C !== undefined){
        var textCont = sessionStorage.MAKUP_TXT_C;
        $('.suggest').append('<span>' + textCont.replace(/\n/g,'<br/>') + '<span>');
    }



}

function canvasImg() {

    $("#canvasFace_0").css('background-image',"url('"+sessionStorage.canvasFace_0+"')");
    $("#canvasFace_1").css('background-image',"url('"+sessionStorage.canvasFace_1+"')");
    $("#canvasFace_2").css('background-image',"url('"+sessionStorage.canvasFace_2+"')");


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



function sentData() {



    for (var i = 0; i < 10; i++) {

        var tmp = "MAKUP_TEXT_"+i ;

        if(sessionStorage.getItem(tmp) === null){

            sessionStorage.setItem(tmp,"");

        }

    }






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
        CB: sessionStorage.CB,
        SPOTS: sessionStorage.SPOTS,
        DARK_CIRCLES: sessionStorage.DARK_CIRCLES,
        TE: sessionStorage.TE,
        WRINKLE: sessionStorage.WRINKLE,
        SENSITIVE: sessionStorage.SENSITIVE,
        EYE_EDEMA: sessionStorage.EYE_EDEMA,
        EYE_DULL: sessionStorage.EYE_DULL,
        LIP_DULL: sessionStorage.LIP_DULL,
        MELLOW: sessionStorage.MELLOW,
        DIMENSION: sessionStorage.DIMENSION,
        REFLECTION_N: "0",
        REFLECTION_B: "0",
        REFLECTION_O: "0",
        CREAM_F: sessionStorage.CREAM_F,
        COSMETICS_F: sessionStorage.COSMETICS_F,
        WATER_F: sessionStorage.WATER_F,
        POWDER_F: sessionStorage.POWDER_F,
        FOUNDATION_F: sessionStorage.FOUNDATION_F,
        PRESSED_F: sessionStorage.PRESSED_F,
        SUBJECT: sessionStorage.SUBJECT,
        SKIN_COLOR_C: sessionStorage.SKIN_COLOR_C,
        SKIN_LIGHT_C: sessionStorage.SKIN_LIGHT_C,
        SKIN_LIGHT_O: sessionStorage.SKIN_LIGHT_O,
        CHEEK_COLOR: sessionStorage.CHEEK_COLOR,
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
        EYEBROW_TC: sessionStorage.EYEBROW_TC,
        SHADOW: sessionStorage.SHADOW,
        SHADOW_S: sessionStorage.SHADOW_S,
        SHADOW_COLOR_C: sessionStorage.SHADOW_COLOR_C,
        LIP_O: sessionStorage.LIP_O,
        LIP_SC: sessionStorage.LIP_SC,
        LIP_COLOR: sessionStorage.LIP_COLOR,
        MAKUP_TXT_1: sessionStorage.MAKUP_TEXT_0,
        MAKUP_TXT_2: sessionStorage.MAKUP_TEXT_1,
        MAKUP_TXT_3: sessionStorage.MAKUP_TEXT_2,
        MAKUP_TXT_4: sessionStorage.MAKUP_TEXT_3,
        MAKUP_TXT_5: sessionStorage.MAKUP_TEXT_4,
        MAKUP_TXT_6: sessionStorage.MAKUP_TEXT_5,
        MAKUP_TXT_7: sessionStorage.MAKUP_TEXT_6,
        MAKUP_TXT_8: sessionStorage.MAKUP_TEXT_7,
        MAKUP_TXT_9: sessionStorage.MAKUP_TEXT_8,
        MAKUP_TXT_10: sessionStorage.MAKUP_TEXT_9,
        MAKUP_TXT_C: sessionStorage.MAKUP_TXT_C,
        MAKEUP_URL: sessionStorage.canvasFace_0,
        SKIN_URL: sessionStorage.canvasFace_1,
        SKIN_WATER_URL: sessionStorage.canvasFace_2,
        PDFImage:sessionStorage.PDFImage
    };

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function (){
        if( xhr.readyState == 4){
            if( xhr.status == 200 ){

                // $('#postData').text(xhr.responseXML.getElementsByTagName('MSG')[0].textContent); //php回傳內容

                if(xhr.responseText === "新增成功，信件已送出"){
                    $('.bg').css('display','none');
                    alert("新增成功，信件已送出");
                    sessionStorage.clear();
                    location.href = "login.html";
                }else{
                    $('.bg').css('display','none');
                    if(xhr.responseText === "錯誤訊息:資料已存在。"){
                        alert("此檢測資料已重覆，將不會再被寫入\n" +
                          "按下確認後，頁面即將跳回首頁\n" +
                          "請重新操作，謝謝 ");
                        sessionStorage.clear();
                        location.href = "login.html";
                    }else{
                        alert(xhr.responseText);
                    }
              }

            }else{

                if(xhr.status !== 0){
                  $('.bg').css('display','none');
                    alert("連線狀態:"+xhr.status);
                }else{
                    errorMsg();
                }

            }
        }
    };

    var json_upload =  JSON.stringify(data);
    xhr.open("POST", "sentMakeup.php");
    xhr.timeout = 60000;
    // xhr.ontimeout = errorMsg();
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(json_upload);
  function errorMsg(){
    $('.bg').css('display','none');
    console.log("連線狀態:"+ xhr.status);
    alert("偵測到偵測不穩定，資料未送出，請再送一次！");
  }

}

function htmlToCanvas() {

    var footer = $('footer');

    footer.css('display','none');

    html2canvas($('#content'), {
        dpi: window.devicePixelRatio*4,
        onrendered: function (canvas) {
            // $('#postData').append("<img src="+canvas.toDataURL("image/png")+">"); ////pdf檢查用
            sessionStorage.setItem('PDFImage',canvas.toDataURL("image/png"));
        }
    });


    footer.css('display','block');
    return true
}

function getlastData(vipids) {

    if(vipids){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange=function (){
            if( xhr.readyState == 4){
                if( xhr.status == 200 ){
                    // if(xhr.responseXML.getElementsByTagName('RTNMSG')[0].textContent !== "查無檢驗資料") {
                        getMackupData(xhr.responseXML);
                    // }else{
                    //     if(sessionData() === true){
                    //         htmlToCanvas();
                        // }
                    // }

                }else{
                    alert("伺服器回應有狀況");
                    console.log(xhr.status);
                }
            }
        };

        var url = 'getMackupData.php?VIPIDS='+ vipids;
        // var url = 'getTestData.php?VIPIDS='+ vipids; //最新一筆檢測資料
        xhr.open("POST", url, true);
        xhr.send( null );

    }

}



