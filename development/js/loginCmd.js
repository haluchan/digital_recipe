
//表單位置
$(document).ready(function() {

    var vipID = localStorage.VIPIDS;
    var vipMail = localStorage.MAIL;

    if(vipID !== undefined && vipMail!== undefined ){
        var state = 4;
        step(state);
        sessionData();

    }else{
        var state = 1;
        localStorage.clear();
        step(state);
    }



    //bcid 登入
    $('.login').on('click',function flogin() {

        var bcid = $('#bcid').val();

        if(WLine() === true){

            if (bcid === '') {
                alert('請輸入員工編號')
            } else if (bcid.length < 6) {
                alert('員工編號不完整喔')

            } else {

                $('.login').unbind('click',flogin);


                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange=function (){
                    if( xhr.readyState == 4){
                        if( xhr.status == 200 ){
                            console.log( xhr.responseXML.getElementsByTagName('RTNCODE')[0].textContent);
                            var rtncodeInt = parseInt(xhr.responseXML.getElementsByTagName('RTNCODE')[0].textContent);


                            if( rtncodeInt !== 0){
                                console.log(xhr.responseXML);
                                alert('輸入員工編號無效，請重新確認');

                            }else{
                                // console.log(xhr.responseXML.getElementsByTagName('BCNAME')[0].textContent);
                                alert( xhr.responseXML.getElementsByTagName('BCNAME')[0].textContent +' '+ '歡迎回來');
                                loginInfo(xhr.responseXML , state);
                                state++;
                                console.log(state);

                            }

                            $('.login').bind('click',flogin);

                        }else{
                            alert("伺服器回應有狀況");
                            console.log(xhr.status);

                        }
                    }
                };

                var url = 'getLoginInfo.php?BCID='+ bcid;
                xhr.open("POST", url, true);
                xhr.send( null );


            }

            console.log(state);
        }

    });

    $('.next').on('click',function fnext() {

        console.log(state);
        if(state === 2){
            if($('#locOption option:selected').val() === ""){
                alert("請選擇櫃點")

            }else{

                for (var i = 0; i < $('#locOption')[0].options.length; i++) {
                    var obj = $('#locOption')[0].options[i];
                    if (obj.selected === true) {
                        $('.locInfo').text(obj.textContent);

                        console.log(obj.value);
                        $('#custno').val(obj.value);
                    }
                }
                state++;
                step(state);
            }
        }else if (state === 3) {

            var vipnm = $('#vipnm').val();
            var sbirth = $('#sbirth').val();
            var bform = new RegExp("^([0-9]{4})[./]{1}([0-9]{1,2})[./]{1}([0-9]{1,2})$");
            if (vipnm === '' && sbirth === '') {
                alert('請輸入姓名以及生日');
            }else if(!bform.test(sbirth)){
                alert("請輸入 YYYY/MM/DD 日期格式");
            }else{
                var vipnm = $('#vipnm').val();
                var birth = $('#sbirth').val();
                var sbirth = birth.replace(/-/g,'/');
                $('.next').unbind('click',fnext);


                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange=function (){
                    if( xhr.readyState == 4){
                        if( xhr.status == 200 ){

                            if(xhr.responseText === "1"){
                                alert("查無此客戶");
                            }else{

                            // console.log(xhr.responseXML.getElementsByTagName('RTNDATA'));
                                state = vipLocinInfo(xhr.responseXML,state);

                            }

                        }else{
                            alert("伺服器回應有狀況");
                            console.log(xhr.status);

                        }
                        $('.next').bind('click',fnext);
                    }
                };

                var url = 'cusLogin.php?VIPNM='+ vipnm + '&SBIRTH=' + sbirth;
                xhr.open("POST", url, true);
                xhr.send( null );

            }

        }else if(state === 4) {

            if ($('#telmOption option:selected').val() === "新客戶"){

                $('#signTelm').val($('#newTelm').val());
                $('#signMail').val($('#newMail').val());

                state++;
                step(state);
            }

            var newMail = $('#newMail').val();
            var oldMail = $('#oldMail').val();


            if ($('#telmOption option:selected').val() === "") {

                alert("請選擇電話");

                return false;

            } else if (newMail === "") {

                alert("請輸入電子信箱");

                return false;

            } else if (newMail !== oldMail){

                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newMail)) {

                    alert('您輸入的電子信箱格式有誤');

                    return false;

                }else if(!$('div.goto > span > span').hasClass('active')) {

                    alert('請選擇要進行的項目');

                    return false;

                }else{

                    if ($('#newTelm').val() === ''){

                            if (!$('div.goto > span > span').hasClass('active')) {

                                alert('請選擇要進行的項目');

                                return false;

                            }

                            var oldTelm = $('#telmOption option:selected').val();

                            updataInfo(oldTelm);

                    }else{

                        var mobile_format = /09[0-9]{8}/;

                        if (!mobile_format.test($('#newTelm').val())) {

                            alert('您輸入的電話格式有誤');

                            return false;


                        }else if (!$('div.goto > span > span').hasClass('active')) {

                                alert('請選擇要進行的項目');

                                return false;

                        }else {

                            var tmpTelm = $('#newTelm').val();

                                updataInfo(tmpTelm);
                            }

                        }

                }

            }else if($('#newTelm').val() !== ''){

                var mobile_format = /09[0-9]{8}/;

                if (!mobile_format.test($('#newTelm').val())) {

                    alert('您輸入的電話格式有誤');

                    return false;


                }else if (!$('div.goto > span > span').hasClass('active')) {

                    alert('請選擇要進行的項目');

                    return false;

                }else {

                    var tmpTelm = $('#newTelm').val();

                    updataInfo(tmpTelm);
                }



            }else{

                if (!$('div.goto > span > span').hasClass('active')) {

                    alert('請選擇要進行的項目');

                    return false;

                }else {

                    dataSession();

                    location.href = page + "_01.html";

                }

            }

        }else if(state === 5){
            var signNm = $('#signName').text();
            var signBirth = $('#signBirth').text();
            var newcustno = $('#custno').val();
            var signTelm = $('#signTelm').val();
            var signMail = $('#signMail').val();
            var mobileFormat = /09[0-9]{8}/;
            var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


            if (signTelm === '' && signMail === '') {
                    alert('請輸入電話以及電子信箱');
                    return false;

                }else if (!mobileFormat.test(signTelm)) {
                    alert('您輸入的電話格式有誤');
                    return false;
                }
                else if (!mailFormat.test(signMail)) {
                    alert('您輸入的電子信箱格式有誤');
                    return false;
                }
                else if (!$('div.goto > span > span').hasClass('active')) {
                    alert('請選擇要進行的項目');
                    return false;



            }else{

                    $('.next').unbind('click',fnext);

                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange=function (){
                        if( xhr.readyState == 4){
                            if( xhr.status == 200 ){
                                var rtncodeInt = parseInt(xhr.responseXML.getElementsByTagName('RTNCODE')[0].textContent);
                                // console.log(xhr.responseText);
                                if( rtncodeInt !== 0){
                                    console.log(xhr.responseXML);

                                    alert(xhr.responseXML.getElementsByTagName('RTNMSG')[0].textContent);
                                }else{
                                    // console.log(xhr.responseXML.getElementsByTagName('BCNAME')[0].textContent);
                                    alert('新增會員成功，您的會員編號為' + xhr.responseXML.getElementsByTagName('VIPIDS')[0].textContent);
                                    nVip(xhr.responseXML);
                                }

                            }else{
                                alert("伺服器回應有狀況");
                                console.log(xhr.status);

                            }
                            $('.next').bind('click',fnext);
                        }
                    };

                    var url = 'signup.php?CUSTNO=' + newcustno + '&VIPNM='+ signNm + '&SBIRTH=' + signBirth + '&MAIL=' + signMail + '&TELM=' +signTelm;
                    xhr.open("POST", url, true);
                    xhr.send( null );


                }

        }

    });

    $('.prev').on('click',function(){

        if(state === 2){
            $('#locOption > option').remove();
            $('#locOption').append($('<option>').val("").text("請選擇櫃點"));
            state--;

        }else if(state === 3){

            state--;
        }else if(state === 4){
            $('#telmOption > option').remove();
            $('#telmOption').append($('<option>').val("").text("請選擇手機").attr('data-row',""));
            state--;
        }else if(state === 5){

            $('#telmOption > option').remove();
            $('#telmOption').append($('<option>').val("").text("請選擇手機").attr('data-row',""));
            state-=2;
        }

        step(state);
    });



        //2組以上ＶＩＰ動態選擇
    $('#telmOption').on('change',function () {

        if ($('#telmOption').val() === "新客戶") {

            state++;
            step(state);

        }

        else if($('#telmOption').val() === "" || $('#telmOption').val() === "新客戶"){
            $('#newMail').val('');
        }else{
            var dataRow =$('#telmOption option:selected').attr('data-row');

            $('.vipnmInfo').text(vipxmlDoc.getElementsByTagName('ROW')[dataRow].childNodes[4].textContent);
            $('.sbrithInfo').text(vipxmlDoc.getElementsByTagName('ROW')[dataRow].childNodes[5].textContent);
            $('#vipids').text(vipxmlDoc.getElementsByTagName('ROW')[dataRow].childNodes[2].textContent);
            $('#oldMail').val(vipxmlDoc.getElementsByTagName('ROW')[dataRow].childNodes[7].textContent);
            $('#newMail').val(vipxmlDoc.getElementsByTagName('ROW')[dataRow].childNodes[7].textContent);

        }

    });




});

//網路偵測
function WLine(){

    var states = navigator.onLine;
    if(states){
        return true;
    }else{
        alert("請連上網路");
        return false;
    }

}

//bcid 回傳處理
function loginInfo(xmlDoc , state) {

    var bcnm = xmlDoc.getElementsByTagName('BCNAME')[0].textContent;
    var bcid = document.getElementById('bcid').value;
    $('.bcid').text(bcid);
    $('.bcnm').text(bcnm);
    $('#locOption > option').remove();

    var cmabnm =xmlDoc.getElementsByTagName('CMABNM');
    for (i=0 ; i< cmabnm.length ;i++){
        $('#locOption').append("<option value="+xmlDoc.getElementsByTagName('CUSTNO')[i].textContent+ ">" +xmlDoc.getElementsByTagName('CMABNM')[i].textContent+ "</option>")
    }

    state++;
    step(state);

}





//VIP登入

function vipLocinInfo(xmlDoc ,state) {

    var vipnm = $('#vipnm').val();
    var birth = $('#sbirth').val();
    var sbirth = birth.replace(/-/g,'/');
    vipxmlDoc = xmlDoc;


     if (!xmlDoc.getElementsByTagName('VIPNM')[0]){

         alert('查無客戶資料，轉按確定後跳註冊頁面');

         $('.vipnmInfo').text($('#vipnm').val());
         $('.sbrithInfo').text(sbirth);
         $('#telmOption').append($('<option>').val("新客戶").text("新客戶"));


         state+=2;
         step(state);

         return state;
    }else{

         $('#vipids').val( xmlDoc.getElementsByTagName('VIPIDS')[0].textContent);
         $('.vipnmInfo').text(vipnm);
         $('.sbrithInfo').text(sbirth);

         // console.log(xmlDoc.getElementsByTagName('RTNCODE'));


         for (var i = 1; i <= xmlDoc.getElementsByTagName('TELM').length; i++) {

             $('#telmOption').append(
                 $('<option>').val(xmlDoc.getElementsByTagName('ROW')[i].childNodes[6].textContent).attr('data-row',i).text(xmlDoc.getElementsByTagName('ROW')[i].childNodes[6].textContent))

         }

         $('#telmOption').append($('<option>').val("新客戶").text("新客戶"));

         state++;
         step(state);
         return state;
    }

}





function nVip(xmlDoc) {

    var vipids = xmlDoc.getElementsByTagName('VIPIDS')[0].textContent;


    $('#vipids').val(vipids);

    var Today=new Date();
    localStorage.setItem("DATE" , Today.getFullYear() + "/" + (Today.getMonth()+1) + "/" + Today.getDate());
    localStorage.setItem("DATE" , Today.getFullYear() + "/" + (Today.getMonth()+1) + "/" + Today.getDate());
    localStorage.setItem('BCID',$('#bcid').val());
    localStorage.setItem("VIPIDS",$('#vipids').val());
    localStorage.setItem("MAIL",$('#signMail').val());
    localStorage.setItem("VIPNM", $('#vipnm').val());
    localStorage.setItem("BCNM", $('#bcnm').text());

    location.href = location.href = page + "_01.html";

}


function updataVip(xmlDoc) {

    console.log(xmlDoc);
    if (xmlDoc.getElementsByTagName('RTNMSG')[0].textContent !== '更新成功。') {
        // console.log(toString(xmlDoc.getElementsByTagName('RTNMSG')[0].textContent));
        alert('輸入電話、信箱有誤，請重新確認');
        return false;
    } else {
        // console.log(xhr.responseXML.getElementsByTagName('BCNAME')[0].textContent);
        alert('會員資料修改成功');

        dataSession();

        location.href = page + "_01.html";
    }


}



function updataInfo(Telm) {
    var vipids = $('#vipids').val();
    var newMail = $('#newMail').val();
    var bcid = $('#bcid').val();
    var custno = $('#custno').val();
    // var newTelm =$('#newTelm').val();


    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log(xhr.responseXML);
                updataVip(xhr.responseXML);
            } else {
                alert("伺服器回應有狀況");
                console.log(xhr.status);

            }
        }
    };

    var url = 'updateVip.php?BCID=' + bcid + '&CUSTNO=' + custno + '&VIPIDS=' + vipids + '&MAIL=' + newMail + '&TELM=' + Telm;
    xhr.open("POST", url, true);
    xhr.send(null);


}


function dataSession() {

    var Today=new Date();
    localStorage.setItem("DATE" , Today.getFullYear() + "/" + (Today.getMonth()+1) + "/" + Today.getDate());
    localStorage.setItem('BCID', $('#bcid').val());
    localStorage.setItem("VIPIDS", $('#vipids').val());
    localStorage.setItem("MAIL", $('#newMail').val());
    localStorage.setItem("VIPNM", $('#vipnm').val());
    localStorage.setItem("BCNM", $('#bcnm').text());
    localStorage.setItem("LOCINFO", $('.locInfo').eq(0).text());
    localStorage.setItem("BIRTHDAY", $('.sbrithInfo').eq(0).text());

}


function sessionData() {


    $('#bcid').val(localStorage.BCID);
    $('#vipnm').val(localStorage.VIPNM);
    $('.bcid').text(localStorage.BCID);
    $('.bcnm').text(localStorage.BCNM);
    $('.locInfo').text(localStorage.LOCINFO);
    $('.vipnmInfo').text(localStorage.VIPNM);
    $('.sbrithInfo').text(localStorage.BIRTHDAY);

    var vipnm = localStorage.getItem('VIPNM');
    var sbirth = localStorage.getItem('BIRTHDAY');

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function (){
        if( xhr.readyState == 4){
            if( xhr.status == 200 ){

                if(xhr.responseText === "1"){
                    alert("查無此客戶");
                }else{

                    var xmlDoc = xhr.responseXML;
                    vipxmlDoc = xmlDoc;

                    $('#vipids').val( xmlDoc.getElementsByTagName('VIPIDS')[0].textContent);
                    $('.vipnmInfo').text(vipnm);
                    $('.sbrithInfo').text(sbirth);


                    for (var i = 1; i <= xmlDoc.getElementsByTagName('TELM').length; i++) {

                        $('#telmOption').append(
                            $('<option>').val(xmlDoc.getElementsByTagName('ROW')[i].childNodes[6].textContent).attr('data-row',i).text(xmlDoc.getElementsByTagName('ROW')[i].childNodes[6].textContent))

                    }

                    $('#telmOption').append($('<option>').val("新客戶").text("新客戶"));

                }

            }else{
                alert("伺服器回應有狀況");
                console.log(xhr.status);

            }
        }
    };

    var url = 'cusLogin.php?VIPNM='+ vipnm + '&SBIRTH=' + sbirth;
    xhr.open("POST", url, true);
    xhr.send( null );

}

function step(state){
    switch(state){
        case 1:
            $('.border>div,.prev,.next').hide();
            $('.step_1,.login').fadeIn(300);
            return state;
            break;

        case 2:
            $('.border>div,.login').hide();
            $('.step_2,.prev,.next').fadeIn(300);
            return state;
            break;

        case 3:
            $('.border>div').hide();
            $('.step_3').fadeIn(300);
            return state;
            break;

        case 4:
            $('.border>div').hide();
            $('.step_4').fadeIn(300);
            $('.login').hide();
            $('.prev,.next').fadeIn(300);
            return state;
            break;

        case 5:
            $('.border>div').hide();
            $('.step_5').fadeIn(300);
            return state;
            break;

        default:
            $('.border>div,.prev,.next').hide();
            $('.step_1,.login').fadeIn(300);

    }
    console.log(state);
}