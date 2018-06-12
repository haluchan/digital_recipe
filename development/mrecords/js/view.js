detectIE();
// var mackupData , maintainData;


$(document).ready(function(){
  $('#step1 li').click(function(){
    $('#step1').hide();
    page = $(this).attr('data');
    $('nav li').removeClass('active');
    $('nav li[data="'+page+'"]').addClass('active');
    $('#step2').show();
    $('.'+page).show();
  });

  $('nav li').click(function(){
    $('nav li').removeClass('active');
    $(this).addClass('active');
    page = $(this).attr('data');
    //console.log(page);
    $('section').hide();
    $('.'+page).show();

  });


  var vipid = getvipids();
  var mackupData , maintainData;

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
        if(response.WSTATUS.ROW.RTNCODE !== "0"){
          $('.empty').css("display","none");
        }else{
          maintainData =function(response){
            return response;
          };
          $('footer').empty();
          var RDataLenth = response.RTNDATA.ROW.length;

          for (var i = 0; i < RDataLenth; i++) {
            var date = response.RTNDATA.ROW[0].DATE;
            var tmp = date.split(" ", 1);
            var fDate = tmp[0].replace(/\//g, "");
            $('footer').append('<div class=\"floatL\" mainData="' + i + '">' + fDate + '</div>');
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
        if(response.WSTATUS.ROW.RTNCODE !== "0"){
          $('.empty').css("display","none");
        }else{
          mackupData =function(response) {
            return response;
          };
          $('footer').empty();
          var RDataLenth = response.RTNDATA.ROW.length;

          for (var i = 0; i < RDataLenth; i++) {
            var date = response.RTNDATA.ROW[0].DATE;
            var tmp = date.split(" ",1);
            var fDate = tmp[0].replace(/\//g,"");
            $('footer').append('<div class=\"floatL\" mackData="' + i + '">' + fDate + '</div>');

          }
        }
      }
    });
  });




  //vipid decode EX：8801010002 + 8649450111= 6440460113  //?vipids=6540460114
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

function postMaintainData(data) {
  this.ACEN = data.ACEN === "0" || data.ACEN === undefined ? "" : ACEN;
  this.ACQUIRED_C = data.ACQUIRED_C === "0" || data.ACQUIRED_C === undefined ? "" : ACQUIRED_C;
  this.AGE = data.AGE === "0" || data.AGE === undefined ? "" : AGE;
  this.AIR = data.AIR === "0" || data.AIR === undefined ? "" : AIR;


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