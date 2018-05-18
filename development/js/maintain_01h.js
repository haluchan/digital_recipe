$(document).ready(function() {

    var date = sessionStorage.getItem('DATE');
    var vipnm = sessionStorage.getItem('VIPNM');
    var vipids = sessionStorage.getItem('VIPIDS');
    var bcnm = sessionStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);

    if (sessionStorage.canvasFace_2 !== undefined){
        $('.skinResult').css("display","none");
        $('#previewImage').append("<img src="+sessionStorage.canvasFace_2+">");
    }else{
        $('canvasTool').css("display","block");
    }
    sessionData();


    //mean跳轉
    var btn = $('.btn');
    if(sessionStorage.getItem('DRY') !== null){
        btn.siblings('ul').children('li:eq(0)').css('color','#000000');

        btn.siblings('ul').children('li:eq(0)').on('click touchstart',function (){
            location.href = 'maintain_01.html';
        });
    }
    if(sessionStorage.getItem('AIR_DRY') !== null){
        btn.siblings('ul').children('li:eq(1)').css('color','#000000');

        btn.siblings('ul').children('li:eq(1)').on('click touchstart',function (){
            location.href = 'maintain_02.html';
        });
    }
    if(sessionStorage.getItem('MOISTURIZING') !== null){
        btn.siblings('ul').children('li:eq(2)').css('color','#000000');

        btn.siblings('ul').children('li:eq(2)').on('click touchstart',function (){
            location.href = 'maintain_03.html';
        });
    }
    if(sessionStorage.getItem('canvasFace_3') !== null){
        btn.siblings('ul').children('li:eq(3)').css('color','#000000');

        btn.siblings('ul').children('li:eq(3)').on('click touchstart',function (){
            location.href = 'maintain_04.html';
        });
    }

});

//回首頁清暫存
$('.Back2Log').on('click',function () {
    sessionStorage.clear();
});



$('.next').on('click',function(){


    if(checkdata()){

        getdata();

        if(sessionStorage.canvasFace_2 === undefined){
            htmlToCanvas();
        }

        setTimeout(function () {
            window.open('maintain_02.html','_self');
        },300);

    }

});


$('.prev').on('click',function(){

    location.href = "login.html";
});


function getdata() {

    for (var i = 0; i < 11; i++) {

        var idName = $('input')[i].id;
        var name  = idName.toUpperCase();

        if($('input')[i].checked === true){

            sessionStorage.setItem(name,"1");

        }else{

            sessionStorage.setItem(name,"0");
        }

    }

    return true;

}

function htmlToCanvas() {

    $('.canvasTool').css('display','none');

    html2canvas($('#html-content'), {
        dpi: window.devicePixelRatio,
        onrendered: function (canvas) {
            $('#previewImage').append("<img src="+canvas.toDataURL("image/png")+">");
            $('#previewImage > img').css('display','none');
            sessionStorage.setItem('canvasFace_2',canvas.toDataURL("image/png"));
        }
    });

    return true;
}

function sessionData() {


    var len = sessionStorage.length;
    for (var i = 0; i < len; i++) {

        var inputName = sessionStorage.key(i);
        var inputValue = sessionStorage.getItem(inputName);

            if(inputValue === "1"){

                var inputID = inputName.toLowerCase();
                $('#'+inputID+'').attr('checked','ckecked');

            }
    }
}

function checkdata() {



    function checkboxx() {

        var num = 0;

        for (var i = 0; i < 11; i++) {

            if($("input[type*='checkbox']")[i].checked === true){

                // var num = 0;

                num++
            }

        }
        return(num);

    }


    if (checkboxx() === 0){

        alert("請至少選擇一種困擾");
        return false;
    }

return true;

}

