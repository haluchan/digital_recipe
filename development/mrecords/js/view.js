detectIE();

$(document).ready(function(){
  $('#step1 li').click(function(){
    $('#step1').hide();
    page = $(this).attr('data');
    $('nav li').removeClass('active');
    $('nav li[data="'+page+'"]').addClass('active');
    $('#step2').show();
    // $('.'+page).show();
  });

  $('nav li').click(function(){
    $('nav li').removeClass('active');
    $(this).addClass('active');
    page = $(this).attr('data');
    //console.log(page);
    $('section').hide();
    // $('.'+page).show();
    $('.fdate').empty();

  });


  var vipid = getvipids();
  var mackupData , maintainData;
  var obj = new Object();

  $('li[data="maintain"]').click(vipid,function () {
    $.ajax({
      url: 'getMaintainData.php',
      type: 'GET',
      contentType: "application/x-www-form-urlencoded",
      data: {
        VIPIDS: vipid
      },
      dataType: "json",
      timeout: 3000,
      error: function(xhr) {
        if(xhr.status === 0){
          alert( "Error CODE" + xhr.status + "\n" + "網路連線過慢，請稍後再試")
        }else{
          alert('Ajax request 發生錯誤' + "\n" + "Error CODE" + xhr.status);
        }
      },
      success: function(response) {
        console.log(response);
        if(!response.hasOwnProperty("RTNDATA")){
          $('.maintain').css("display","none");
          $('.empty').css("display","block");
        }else{
          $('.empty').css("display","none");
          $('.maintain').css("display","block");
          if(response.RTNDATA.ROW.hasOwnProperty("length")) {

            viewMaintainDate(response.RTNDATA.ROW[0], response.RTNDATA.ROW[1]);
            maintainData = response;
            $('.fdate').empty();
            var RDataLenth = response.RTNDATA.ROW.length;

            for (var i = 0; i < RDataLenth; i++) {
              var date = response.RTNDATA.ROW[i].DATE;
              var tmp = date.split(" ", 1);
              var fDate = tmp[0].replace(/\//g, "");
              $('footer').append('<div class=\"floatL\" maindata="' + i + '">' + fDate + '</div>');
              if (i === 2) {
                break;
              }
            }

            $("div[maindata='0']").click(function () {
              if(maintainData.RTNDATA.ROW[1] === undefined){
                viewMaintainDate(maintainData.RTNDATA.ROW[0], obj);
              }else{
                viewMaintainDate(maintainData.RTNDATA.ROW[0], maintainData.RTNDATA.ROW[1]);
              }
            });
            $("div[maindata='1']").click(function () {
              if(maintainData.RTNDATA.ROW[2] === undefined){
                viewMaintainDate(maintainData.RTNDATA.ROW[1], obj);
              }else{
                viewMaintainDate(maintainData.RTNDATA.ROW[1], maintainData.RTNDATA.ROW[2]);
              }
            });
            $("div[maindata='2']").click(function () {
              if(maintainData.RTNDATA.ROW[3] === undefined){
                viewMaintainDate(maintainData.RTNDATA.ROW[2], obj);
              }else{
                viewMaintainDate(maintainData.RTNDATA.ROW[2], maintainData.RTNDATA.ROW[3]);
              }

            });

          }else{

            viewMaintainDate(response.RTNDATA.ROW,obj);
            var sdate = response.RTNDATA.ROW.DATE;
            var stmp = sdate.split(" ",1);
            var sfDate = stmp[0].replace(/\//g,"");
            $('.fdate').empty();
            $('footer').append('<div class=\"floatL\" mackdata="' + 1 + '">' + sfDate + '</div>');
          }
        }
      }
    });

  });



  $('li[data="makeup"]').click(vipid,function () {
    $.ajax({
      url: 'getMackupData.php',
      type: 'GET',
      contentType: "application/x-www-form-urlencoded",
      data: {
        VIPIDS: vipid
      },
      dataType: "json",
      timeout: 3000,
      error: function(xhr) {
        if(xhr.status === 0){
          alert( "Error CODE" + xhr.status + "\n" + "網路連線過慢，請稍後再試")
        }else{
          alert('Ajax request 發生錯誤' + "\n" + "Error CODE" + xhr.status);
        }

      },
      success: function(response) {
        console.log(response);
        if(!response.hasOwnProperty("RTNDATA")){
          $('.makeup').css("display","none");
          $('.empty').css("display","block");
        }else{
          $('.empty').css("display","none");
          $('.makeup').css("display","block");
          if(response.RTNDATA.ROW.hasOwnProperty("length")){

            viewMackupDate(response.RTNDATA.ROW[0],response.RTNDATA.ROW[1]);
            mackupData = response ;

            $('.fdate').empty();
            var RDataLenth = response.RTNDATA.ROW.length;

            for (var i = 0; i < RDataLenth; i++) {
              var date = response.RTNDATA.ROW[i].DATE;
              var tmp = date.split(" ",1);
              var fDate = tmp[0].replace(/\//g,"");
              $('footer').append('<div class=\"floatL\" mackdata="' + i + '">' + fDate + '</div>');
              if (i === 2) { break; }

            }
            $("div[mackdata='0']").click(function () {
              if(mackupData.RTNDATA.ROW[1] === undefined){
                viewMackupDate(mackupData.RTNDATA.ROW[0],obj);
              }else{
                viewMackupDate(mackupData.RTNDATA.ROW[0],mackupData.RTNDATA.ROW[1]);
              }
            });
            $("div[mackdata='1']").click(function () {
              if(mackupData.RTNDATA.ROW[2] === undefined){
                viewMackupDate(mackupData.RTNDATA.ROW[1],obj);
              }else{
                viewMackupDate(mackupData.RTNDATA.ROW[1],mackupData.RTNDATA.ROW[2]);
              }

            });
            $("div[mackdata='2']").click(function () {

              if(mackupData.RTNDATA.ROW[3] === undefined){
                viewMackupDate(mackupData.RTNDATA.ROW[2],obj);
              }else{
                viewMackupDate(mackupData.RTNDATA.ROW[2],mackupData.RTNDATA.ROW[3]);
              }
            });
          }else{
            viewMackupDate(response.RTNDATA.ROW,obj);
            var sdate = response.RTNDATA.ROW.DATE;
            var stmp = sdate.split(" ",1);
            var sfDate = stmp[0].replace(/\//g,"");
            $('.fdate').empty();
            $('footer').append('<div class=\"floatL\" mackdata="' + 1 + '">' + sfDate + '</div>');
          }
        }
      }
    });
  });



  //vipid decode EX：8801010002 + 8649450111= 6540460113  //?vipids=6540460117  5940650166 5540460145
  function getvipids() {
    var tmpUrl = window.location.search;
    if(tmpUrl ===""){
      console.log("未輸入參數");
    }else{
      var vipidPart = tmpUrl.split("vipids=",2);
      var vipid = vipidPart[1];
      var vipcode = "86494501";
      var fullDate = new Date();
      var today = fullDate.getDate();
      var vipcodeDay = vipcode + today;
      var vipArry = [];
      var tmpArry =[];

      for (var i = 0; i < vipcodeDay.length; i++) {
        tmpArry[i] = parseInt(vipid[i])-parseInt(vipcodeDay[i]);
        var tmp = tmpArry[i]+10;
        var Stmp = tmp.toString();
        if(Stmp.length === 1){
          vipArry.push(Stmp[0]);
        }else{
          vipArry.push(Stmp[1]);
        }
      }
      var vipAnswer = "";
      for(var j = 0; j < vipArry.length;j++){
        vipAnswer += vipArry[j];
      }
      console.log(vipAnswer);
      return vipAnswer;
    }
  }




});

//IE升級提醒
function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  //console.log(ua);
  if (msie > 0) {
    // IE 10 or older => return version number
    ver = ua.substring(msie + 5, ua.indexOf('.', msie)), 10;
    console.log('IE'+ver);
    if(ver<=8){
      $('#step1 ul').remove();
      $('#step1').append('<div style="text-align:center;top:50%;display:block;position:absolute;width:100%;font-size:2em">請更新瀏覽器</div>')
      window.alert('為了讓頁面操作更順暢，請更新至IE9以上版本再操作。');

    }
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);

  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    //alert('IE=11');
    console.log('IE11');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);

  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}

//skincare
function viewMaintainDate(data,pdata) {

  var result = new postMaintainData(data,pdata);

  getbcName(result.bcid);

  $('.ssubject').text(result.subject);
  $('.sbasc_remover').text(result.basc_remover);
  $('.sbasc_clean').text(result.basc_clean);
  $('.sbasc_wet').text(result.basc_wet);

  $('.shorny_c').text(result.horny_c);
  $('.shorny_t').text(result.horny_t);
  $('.sdrying_c').text(result.drying_c);
  $('.sdrying_t').text(result.drying_t);
  $('.swhitening_c').text(result.whitening_c);
  $('.swhitening_t').text(result.whitening_t);
  $('.selasticity_c').text(result.elasticity_c);
  $('.selasticity_t').text(result.elasticity_t);
  $('.suv_c').text(result.uv_c);
  $('.suv_t').text(result.uv_t);
  $('.sother_c').text(result.other_c);
  $('.sother_t').text(result.other_t);

//檢測
  $('.snatural_c').text(result.natural_c);
  $('.sacquired_c').text(result.acquired_c);
  $('.smoisture').text(result.moisture);
  $('.ssebum').text(result.sebum);
  $('.stension').text(result.tension);
  $('.selasticity').text(result.elasticity);
  $('.ssg').text(result.sg);
  $('.stransparency').text(result.transparency);
  $('.stransparency_c').text(result.transparency_c);
  $('.shorny').text(result.horny);
  $('.sskin_level').text(result.skin_level);

  $('.sskin_color_c').text(result.skin_color_c);
  $('.sskin_light_c').text(result.skin_light_c);
  $('.sskin_light').text(result.skin_light);

  $('.ssuggestion').empty();
  $('.ssuggestion').append('<span>' + result.suggestion.replace(/\n/g,'<br/>') + '<span>');

  var year = "";
  for (var i = 0; i < 4; i++) {
     year += result.skin_water_url[i];
  }
  $('.maintain01').empty();
  $('.maintain01').append('<img style="width: 55%" src="../image/skincare/'+ year+'/'+result.skin_water_url+'.png">');
  // $('.maintain01').append('<image src="../image/skincare/'+ year+'/'+result.makeup_url+'.png">');



  $("div[data='skincare']").each(function () {

    if($(this).text() === ""){
      $(this).css("background-color","white");
      $(this).siblings(".arrow").removeClass();
      $(this).prev("label").children('span').css("background-image","none");
    }else{
      $(this).css("background-color","#fffae9");
      $(this).prev("label").children('span').css({"background-image":"url(../img/check.png)","background-repeat":"no-repeat","background-position": "0px 0px" ,"background-size":"16px"});
      $(this).siblings("label").children('span').css({"background-image":"url(../img/check.png)","background-repeat":"no-repeat","background-position": "0px 0px" ,"background-size":"16px"});
    }

  });


  //前一次紀錄
  $('.spmoisture').text(result.pmoisture);
  $('.spsebum').text(result.psebum);
  $('.sptension').text(result.ptension);
  $('.spelasticity').text(result.pelasticity);
  $('.spsg').text(result.psg);
  $('.sptransparency').text(result.ptransparency);
  $('.sptransparency_c').text(result.ptransparency_c);
  $('.sphorny').text(result.phorny);
  $('.spskin_level').text(result.pskin_level);


}

function getbcName(data) {
  $.ajax({
    type: "POST",
    url: "getBcName.php",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    data: {
      BCID: data
    },
    dataType: "json",
    timeout: 3000,
    error: function(xhr) {
      if(xhr.status === 0){
        alert( "Error CODE" + xhr.status + "\n" + "網路連線過慢，請稍後再試")
      }else{
        alert('Ajax request 發生錯誤' + "\n" + "Error CODE" + xhr.status);
      }
    },
    success: function(response) {
      var bcname = $('.bcname');
      bcname.text();
      bcname.text(response.RTNDATA1.ROW.BCNAME);
    }
  })

}



function postMaintainData(data, pdata) {
  this.elasticity = elasticityEX(data.ELASTICITY);
  this.transparency_c = transparencyEX(data.TRANSPARENCY_C);
  this.skin_level = skinLevelEX(data.SKIN_LEVEL);
  this.moisture = data.MOISTURE === "0" || data.MOISTURE === undefined ? "" : data.MOISTURE ;
  this.sebum = data.SEBUM === "0" || data.SEBUM === undefined ? "" : data.SEBUM ;
  this.tension = data.TENSION === "0" || data.TENSION === undefined ? "" : data.TENSION ;
  this.sg = data.SG === "0" || data.SG === undefined ? "" : data.SG ;
  this.transparency = data.TRANSPARENCY === "0" || data.TRANSPARENCY === undefined ? "" : data.TRANSPARENCY ;
  this.horny = data.HORNY === "0" || data.HORNY === undefined ? "" : data.HORNY ;
  this.skin_color_c = skin_color_cEX(data.SKIN_COLOR_C);
  this.skin_light_c = skin_light_cEX(data.SKIN_LIGHT_C);
  this.skin_light = data.SKIN_LIGHT === "0" || data.SKIN_LIGHT === undefined ? "" : data.SKIN_LIGHT ;

  this.natural_c = naturalEX(data.NATURAL_C);
  this.acquired_c = acquiredEX(data.ACQUIRED_C);

  this.bcid = data.BCID;


  this.subject = typeof data.SUBJECT === "object" || data.SUBJECT === undefined ? "" : data.SUBJECT;
  this.basc = data.BASC;
  this.basc_remover = removeEx(data.BASC_REMOVER);
  this.basc_clean = cleanEx(data.BASC_CLEAN);
  this.basc_wet = wetEx(data.BASC_WET);
  this.horny_c = specEx(data.HORNY_C);
  this.horny_t = hornyEx(data.HORNY_T);
  this.drying_c = specEx(data.DRYING_C);
  this.drying_t = dryingEx(data.DRYING_T);
  this.whitening_c = specEx(data.WHITENING_C);
  this.whitening_t = whiteningEx(data.WHITENING_T);
  this.elasticity_c = specEx(data.ELASTICITY_C);
  this.elasticity_t = elasticityEx(data.ELASTICITY_T);
  this.uv_c = specEx(data.UV_C);
  this.uv_t = uvEx(data.UV_T);
  this.other_c = specEx(data.OTHER_C);
  this.other_t = otherEx(data.OTHER_T);

  this.suggestion = typeof data.SUGGESTION === "object" || data.SUGGESTION === undefined ? "" : data.SUGGESTION;

  this.makeup_url = data.MAKEUP_URL;
  this.skin_water_url = data.SKIN_WATER_URL;

  //前一次紀錄
  this.pmoisture = pdata.MOISTURE === "0" || pdata.MOISTURE === undefined ? "" : pdata.MOISTURE ;
  this.psebum = pdata.SEBUM === "0" || pdata.SEBUM === undefined ? "" : pdata.SEBUM ;
  this.ptension = pdata.TENSION === "0" || pdata.TENSION === undefined ? "" : pdata.TENSION ;
  this.pelasticity = pdata.ELASTICITY ?  elasticityEX(pdata.ELASTICITY) : "無";
  this.psg = pdata.SG === "0" || pdata.SG === undefined ? "" : pdata.SG ;
  this.ptransparency = pdata.TRANSPARENCY === "0" || pdata.TRANSPARENCY === undefined ? "" : pdata.TRANSPARENCY ;
  this.ptransparency_c = pdata.TRANSPARENCY_C ? transparencyEX(pdata.TRANSPARENCY_C) : "無選取" ;
  this.phorny = pdata.HORNY === "0" || pdata.HORNY === undefined ? "" : pdata.HORNY ;
  this.pskin_level = pdata.SKIN_LEVEL ? skinLevelEX(pdata.SKIN_LEVEL) : "無選取";
}


function elasticityEX(tmp) {
  switch(tmp) {
    case "0":
      tmp = "無";
      break;
    case "1":
      tmp = "S";
      break;
    case "2":
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
    case "0":
      tmp = "無選取";
      break;
    case "1":
      tmp = "+3";
      break;
    case "2":
      tmp = "+2";
      break;
    case "3":
      tmp = "+1";
      break;
    case "4":
      tmp = "-1";
      break;
    case "5":
      tmp = "-2";
      break;
    case "6":
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
    case "0":
      tmp = "無選取";
      break;
    case "1":
      tmp = "角層";
      break;
    case "2":
      tmp = "基底";
      break;
    case "3":
      tmp = "角層透明度";
      break;
    case "4":
      tmp = "黑色素量";
      break;
    case "5":
      tmp = "黑色素分布與均勻度";
      break;
    case "6":
      tmp = "氣血度";
      break;
    case "7":
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
    case "0":
      tmp = "無選取";
      break;
    case "1":
      tmp = "100";
      break;
    case "2":
      tmp = "101";
      break;
    case "3":
      tmp = "102";
      break;
    case "4":
      tmp = "103";
      break;
    case "5":
      tmp = "201";
      break;
    default:
      tmp = "無選取";

  }

  return(tmp);
}

function skin_light_cEX(tmp) {

  switch(tmp) {
    case "0":
      tmp = "無選取";
      break;
    case "1":
      tmp = "B";
      break;
    case "2":
      tmp = "Y";
      break;
    case "3":
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
    case "0":
      tmp = "無";
      break;
    case "1":
      tmp = "D1";
      break;
    case "2":
      tmp = "D2";
      break;
    case "3":
      tmp = "D3";
      break;
    case "4":
      tmp = "D4";
      break;
    default:
      tmp = "無";


  }

  return(tmp);


}

function naturalEX(tmp) {

  switch(tmp) {
    case "0":
      tmp = "無";
      break;
    case "1":
      tmp = "I";
      break;
    case "2":
      tmp = "II";
      break;
    case "3":
      tmp = "III";
      break;
    case "4":
      tmp = "IV";
      break;
    default:
      tmp = "無";


  }

  return(tmp);


}

function specEx(tmp) {

  switch (tmp) {
    case "0":
      tmp ="";
      break;
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
    case "1":
      tmp = "瞬卸潔膚油EX";
      break;
    case "2":
      tmp = "瞬卸潔膚蜜EX";
      break;
    case "3":
      tmp = "瞬卸潔膚霜EX";
      break;
    case "4":
      tmp = "逆齡再生溫感卸妝凝露";
      break;
    case "5":
      tmp = "眼唇卸妝液";
      break;
    default:
      tmp = "";
  }

  return(tmp);
}

function cleanEx(tmp){

  switch(tmp) {
    case "1":
      tmp = "舒緩潔膚乳";
      break;
    case "2":
      tmp = "海洋礦物皂";
      break;
    case "3":
      tmp = "透明潔膚乳e";
      break;
    case "4":
      tmp = "柔潤潔膚乳N";
      break;
    default:
      tmp = "";
  }

  return(tmp);
}

function wetEx(tmp) {

  switch(tmp) {
    case "1":
      tmp = "基礎1";
      break;
    case "2":
      tmp = "基礎2";
      break;
    case "3":
      tmp = "基礎3";
      break;
    case "4":
      tmp = "基礎4";
      break;
    case "5":
      tmp = "強化1";
      break;
    case "6":
      tmp = "強化2";
      break;
    case "7":
      tmp = "強化3";
      break;
    case "8":
      tmp = "強化4";
      break;
    case "9":
      tmp = "超強化1";
      break;
    case "10":
      tmp = "超強化2";
      break;
    case "11":
      tmp = "超強化3";
      break;
    case "12":
      tmp = "超強化4";
      break;
    case "13":
      tmp = "舒緩1";
      break;
    case "14":
      tmp = "舒緩2";
      break;
    case "15":
      tmp = "極致1";
      break;
    case "16":
      tmp = "極致2";
      break;
    case "17":
      tmp = "極致3";
      break;
    default:
      tmp = "";
  }

  return(tmp);
}

function hornyEx(tmp) {

  switch(tmp) {
    case "0":
      tmp ="";
      break;
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
    case "0":
      tmp ="";
      break;
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
    case "0":
      tmp ="";
      break;
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
    case "0":
      tmp ="";
      break;
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
    case "0":
      tmp ="";
      break;
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
    case "0":
      tmp ="";
      break;
    case "2901":
      tmp = "粉刺敷面組合N";
      break;
    case "2902":
      tmp = "急效抗壓馴荳精華";
      break;
    case "2903":
      tmp = "2步驟粉刺組";
      break;
    case "2904":
      tmp = "身體馴荳噴霧EX";
      break;
    case "2905":
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


//mackup
function viewMackupDate(data,pdata) {

  var result = new postMackupData(data, pdata);

  getbcName(result.bcid);

  $('.msubject').text(result.subject);

  $('.txt').empty();

  if (result.makeup_txt_1 !== "") {$('.txt').append("<div class='tip'>"+ result.makeup_txt_1 +"<div>");}
  if (result.makeup_txt_2 !== "") {$('.txt').append("<div class='tip'>"+ result.makeup_txt_2 +"<div>");}
  if (result.makeup_txt_3 !== "") {$('.txt').append("<div class='tip'>"+ result.makeup_txt_3 +"<div>");}
  if (result.makeup_txt_4 !== "") {$('.txt').append("<div class='tip'>"+ result.makeup_txt_4 +"<div>");}
  if (result.makeup_txt_5 !== "") {$('.txt').append("<div class='tip'>"+ result.makeup_txt_5 +"<div>");}
  if (result.makeup_txt_6 !== "") {$('.txt').append("<div class='tip'>"+ result.makeup_txt_6 +"<div>");}
  if (result.makeup_txt_7 !== "") {$('.txt').append("<div class='tip'>"+ result.makeup_txt_7 +"<div>");}
  if (result.makeup_txt_8 !== "") {$('.txt').append("<div class='tip'>"+ result.makeup_txt_8 +"<div>");}
  if (result.makeup_txt_9 !== "") {$('.txt').append("<div class='tip'>"+ result.makeup_txt_9 +"<div>");}
  if (result.makeup_txt_10 !== "") {$('.txt').append("<div class='tip'>"+ result.makeup_txt_10 +"<div>");}

  //檢測資料
  $('.mskin_color_c').text(result.skin_color_c);
  $('.mskin_light_c').text(result.skin_light_c);
  $('.mskin_light_o').text(result.skin_light_o);

  $('.mcheek_color').text(result.cheek_color);
  $('.mnatural_c').text(result.natural_c);
  $('.macquired_c').text(result.acquired_c);


  $('.mmoisture').text(result.moisture);
  $('.msebum').text(result.sebum);
  $('.mtension').text(result.tension);
  $('.melasticity').text(result.elasticity);
  $('.msg').text(result.sg);
  $('.mtransparency').text(result.transparency);
  $('.mtransparency_c').text(result.transparency_c);
  $('.mhorny').text(result.horny);
  $('.mskin_level').text(result.skin_level);


  $('.cream_f').val(result.cream_f);
  $('.cosmetics_f').val(result.cosmetics_f);
  $('.water_f').val(result.water_f);
  $('.powder_f').val(result.powder_f);
  $('.foundation_f').val(result.foundation_f);
  $('.pressed_f').val(result.pressed_f);



  $('.mmakup_txt_c').empty();
  $('.mmakup_txt_c').append('<span>' + result.makup_txt_c.replace(/\n/g, '<br/>') + '<span>');

  var year = "";
  for (var i = 0; i < 4; i++) {
    year += result.skin_water_url[i];
  }
  $('.mskin_water_url').empty();
  $('.mskin_water_url').append('<img style="width: 110%" src="../image/mackup/' + year + '/' + result.skin_water_url + '.png">');

  $('.mmakeup_url').empty();
  $('.mmakeup_url').append('<img style="width: 124%" src="../image/mackup/' + year + '/' + result.makeup_url + '.png">');

  $('.mskin_url').empty();
  $('.mskin_url').append('<img style="width: 104%" src="../image/mackup/' + year + '/' + result.skin_url + '.png">');



  $("input[data='mackup']").each(function(){

    if($(this).val() === "1"){
      $(this).next("label").children('span').css({"background-image":"url(../img/check.png)","background-repeat":"no-repeat","background-position": "0px 2px" ,"background-size":"12px"});
    }else{
      $(this).next("label").children('span').css("background-image","none");
    }

  });



  //前一次資料
  $('.mpmoisture').text(result.mpmoisture);
  $('.mpsebum').text(result.mpsebum);
  $('.mptension').text(result.mptension);
  $('.mpelasticity').text(result.mpelasticity);
  $('.mpsg').text(result.mpsg);
  $('.mptransparency').text(result.mptransparency);
  $('.mptransparency_c').text(result.mptransparency_c);
  $('.mphorny').text(result.mphorny);
  $('.mpskin_level').text(result.mpskin_level);

}


function postMackupData(data, pdata) {
  this.skin_color_c = skin_color_cEX(data.SKIN_COLOR_C);
  this.skin_light_c = skin_light_cEX(data.SKIN_LIGHT_C);
  this.skin_light_o = data.SKIN_LIGHT_O === "0" || data.SKIN_LIGHT_O === undefined ? "" : data.SKIN_LIGHT_O ;

  this.cheek_color = data.CHEEK_COLOR === "0" || data.CHEEK_COLOR === undefined ? "" : data.CHEEK_COLOR;
  this.natural_c = naturalEX(data.NATURAL_C);
  this.acquired_c = acquiredEX(data.ACQUIRED_C);

  this.moisture = data.MOISTURE === "0" || data.MOISTURE === undefined ? "" : data.MOISTURE;
  this.sebum = data.SEBUM === "0" || data.SEBUM === undefined ? "" : data.SEBUM;
  this.tension = data.TENSION === "0" || data.TENSION === undefined ? "" : data.TENSION;
  this.elasticity = elasticityEX(data.ELASTICITY);
  this.sg = data.SG === "0" || data.SG === undefined ? "" : data.SG ;
  this.transparency = data.TRANSPARENCY === "0" || data.TRANSPARENCY === undefined ? "" : data.TRANSPARENCY;
  this.transparency_c = transparencyEX(data.TRANSPARENCY_C);
  this.horny = data.HORNY === "0" || data.HORNY === undefined ? "" : data.HORNY ;
  this.skin_level = skinLevelEX(data.SKIN_LEVEL);


  this.bcid = data.BCID;


  this.subject = typeof data.SUBJECT === "object" || data.SUBJECT === undefined ? "" : data.SUBJECT;


  this.makeup_txt_1 = typeof data.MAKUP_TXT_1 === "object" || data.MAKUP_TXT_1 === undefined ? "" : data.MAKUP_TXT_1;
  this.makeup_txt_2 = typeof data.MAKUP_TXT_2 === "object" || data.MAKUP_TXT_2 === undefined ? "" : data.MAKUP_TXT_2;
  this.makeup_txt_3 = typeof data.MAKUP_TXT_3 === "object" || data.MAKUP_TXT_3 === undefined ? "" : data.MAKUP_TXT_3;
  this.makeup_txt_4 = typeof data.MAKUP_TXT_4 === "object" || data.MAKUP_TXT_4 === undefined ? "" : data.MAKUP_TXT_4;
  this.makeup_txt_5 = typeof data.MAKUP_TXT_5 === "object" || data.MAKUP_TXT_5 === undefined ? "" : data.MAKUP_TXT_5;
  this.makeup_txt_6 = typeof data.MAKUP_TXT_6 === "object" || data.MAKUP_TXT_6 === undefined ? "" : data.MAKUP_TXT_6;
  this.makeup_txt_7 = typeof data.MAKUP_TXT_7 === "object" || data.MAKUP_TXT_7 === undefined ? "" : data.MAKUP_TXT_7;
  this.makeup_txt_8 = typeof data.MAKUP_TXT_8 === "object" || data.MAKUP_TXT_8 === undefined ? "" : data.MAKUP_TXT_8;
  this.makeup_txt_9 = typeof data.MAKUP_TXT_9 === "object" || data.MAKUP_TXT_9 === undefined ? "" : data.MAKUP_TXT_9;
  this.makeup_txt_10 = typeof data.MAKUP_TXT_10 === "object" || data.MAKUP_TXT_10 === undefined ? "" : data.MAKUP_TXT_10;

  //底妝
  this.makup_txt_c = typeof data.MAKUP_TXT_C === "object" || data.MAKUP_TXT_C === undefined ? "" : data.MAKUP_TXT_C;

  this.makeup_url = data.MAKEUP_URL;
  this.skin_water_url = data.SKIN_WATER_URL;
  this.skin_url = data.SKIN_URL;

  this.cream_f = data.CREAM_F === "0" || data.CREAM_F === undefined ? "0" : data.CREAM_F ;
  this.cosmetics_f = data.COSMETICS_F === "0" || data.COSMETICS_F === undefined ? "0" : data.COSMETICS_F ;
  this.water_f = data.WATER_F === "0" || data.WATER_F === undefined ? "0" : data.WATER_F ;
  this.powder_f = data.POWDER_F === "0" || data.POWDER_F === undefined ? "0" : data.POWDER_F ;
  this.foundation_f = data.FOUNDATION_F === "0" || data.FOUNDATION_F === undefined ? "0" : data.FOUNDATION_F ;
  this.pressed_f = data.PRESSED_F === "0" || data.PRESSED_F === undefined ? "0" : data.PRESSED_F ;

  //前一次紀錄
  this.mpmoisture = pdata.MOISTURE === "0" || pdata.MOISTURE === undefined ? "" : pdata.MOISTURE;
  this.mpsebum = pdata.SEBUM === "0" || pdata.SEBUM === undefined ? "" : pdata.SEBUM;
  this.mptension = pdata.TENSION === "0" || pdata.TENSION === undefined ? "" : pdata.TENSION;
  this.mpelasticity = pdata.ELASTICITY ? elasticityEX(pdata.ELASTICITY) : "無";
  this.mpsg = pdata.SG === "0" || pdata.SG === undefined ? "" : pdata.SG ;
  this.mptransparency = pdata.TRANSPARENCY === "0" || pdata.TRANSPARENCY === undefined ? "" : pdata.TRANSPARENCY;
  this.mptransparency_c = pdata.TRANSPARENCY_C ? transparencyEX(pdata.TRANSPARENCY_C) : "無選取";
  this.mphorny = pdata.HORNY === "0" || pdata.HORNY === undefined ? "" : pdata.HORNY ;
  this.mpskin_level = pdata.SKIN_LEVEL ? skinLevelEX(pdata.SKIN_LEVEL) : "無選取";
}