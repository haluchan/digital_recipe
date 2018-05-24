$(function(){


    var date = sessionStorage.getItem('DATE');
    var vipnm = sessionStorage.getItem('VIPNM');
    var vipids= sessionStorage.getItem('VIPIDS');
    var bcnm = sessionStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);

    var canvasMackup = sessionStorage.getItem('canvasFace_2');

    if (sessionStorage.canvasFace_2 !== undefined){

        $('#html-content').css("display","none");
        $('#previewImage').append("<img src="+canvasMackup+">");

        sessionStorage.getItem('EYEBROW_TC',$("input[name*='browVal']")[0].value);
        sessionStorage.getItem('SHADOW',$("input[name*='eyeType']")[0].value);
        sessionStorage.getItem('SHADOW_S',$("input[name*='eyeType']")[0].value);
        sessionStorage.getItem('SHADOW_COLOR_C',$("input[name*='eyeVal']")[0].value);
        sessionStorage.getItem('LIP_O',$("input[name*='lipsType']")[0].value);
        sessionStorage.getItem('LIP_SC',$("input[name*='lipsType']")[0].value);
        sessionStorage.getItem('LIP_COLOR',$("input[name*='lipsVal']")[0].value);


        var count = tmpDate();



    }else{
        $('.canvasTool').css('display','block');
    }


    setinput(count);


    //mean跳轉
    var btn = $('.btn');
    if(sessionStorage.getItem('DRY') !== null || sessionStorage.getItem('OIL') !== null || sessionStorage.getItem('PORES') !== null || sessionStorage.getItem('ACEN') !== null || sessionStorage.getItem('DULL') !== null || sessionStorage.getItem('CB') !== null || sessionStorage.getItem('SOPTS') !== null || sessionStorage.getItem('DARK_CIRCLES') !== null || sessionStorage.getItem('TE') !== null || sessionStorage.getItem('WRINKLE') !== null || sessionStorage.getItem('SENSITIVE') !== null || sessionStorage.getItem('EYE_DULL') !== null || sessionStorage.getItem('EYE_EDEMA') !== null || sessionStorage.getItem('LIP_DULL') !== null || sessionStorage.getItem('MELLOW') !== null || sessionStorage.getItem('DIMENSION') !== null){
        btn.siblings('ul').children('li:eq(0)').css('color','#000000');

        btn.siblings('ul').children('li:eq(0)').on('click touchstart',function (){
            location.href = 'makeup_01.html';
        });
    }

    if(sessionStorage.getItem('canvasFace_0') !== null){
        btn.siblings('ul').children('li:eq(1)').css('color','#000000');

        btn.siblings('ul').children('li:eq(1)').on('click touchstart',function (){
            location.href = 'makeup_02.html';
        });
    }
    if(sessionStorage.getItem('canvasFace_2') !== null){
        btn.siblings('ul').children('li:eq(2)').css('color','#000000');
        btn.siblings('ul').children('li:eq(3)').css('color','#000000');

        btn.siblings('ul').children('li:eq(2)').on('click touchstart',function (){
            location.href = 'makeup_03.html';
        });
        btn.siblings('ul').children('li:eq(3)').on('click touchstart',function (){
            location.href = 'makeup_04.html';
        });
    }


});



$('.Back2Log').on('click',function () {
    sessionStorage.clear();
});


$('.prev').on('click',function(){
    prevPage();
});

$('.next').on('click',function() {



    var canvasMackup = sessionStorage.getItem('canvasFace_2');


    if(checkInput()){


        var intext = $("input[name*='MAKUP_TEXT']");
        var k=0;

        for (var j = 0; j < 10; j++) {
            sessionStorage.removeItem('MAKUP_TEXT_'+j);
        }

        for (var i = 0; i < intext.length; i++) {
            var tmpName = intext[i].name+"_"+k;
            var tmpValue = intext[i].value;
            if(tmpValue){
                sessionStorage.setItem(tmpName,tmpValue);
            }
            k++;
        }

        if(!canvasMackup){

            setTimeout(function () {
                htmlToCanvas();
            },300);

            getdata();
        }


        setTimeout(function () {
            window.open('makeup_04.html','_self');
        },800);

    }


});




function checkInput() {

    var len = $("input[name*='MAKUP_TEXT']").length;
    for (var i = 0; i < len; i++) {

        // if($("input[name*='MAKUP_TEXT']")[i].value === ""){
        //     alert("請填寫輸入欄位");
        //     return false;
        // }
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


}

function getdata() {
    sessionStorage.setItem('EYEBROW_TC',$("input[name*='browVal']")[0].value);
    sessionStorage.setItem('SHADOW',$("input[name*='eyeType']")[0].value);
    sessionStorage.setItem('SHADOW_S',$("input[name*='eyeType']")[0].value);
    sessionStorage.setItem('SHADOW_COLOR_C',$("input[name*='eyeVal']")[0].value);
    sessionStorage.setItem('LIP_O',$("input[name*='lipsType']")[0].value);
    sessionStorage.setItem('LIP_SC',$("input[name*='lipsType']")[0].value);
    sessionStorage.setItem('LIP_COLOR',$("input[name*='lipsVal']")[0].value);


}

function tmpDate() {

    var tmp =[];

    var len = sessionStorage.length;

    // for (var i = 0; i < len; i++) {

        for (var j = 0; j < 10; j++) {

            if (sessionStorage.getItem("MAKUP_TEXT_" + j)) {

                var tmpName = "MAKUP_TEXT_" + j;

                tmp.push(j);

                var count ;
                count = tmp.length;

                if(count<10){

                $('#firstInput').remove();

                $('.note').append('<div><input type="text" placeholder="請填寫圖片說明" maxlength="18" name="MAKUP_TEXT" value="'+sessionStorage.getItem(tmpName)+'" /><div class="remove">-</div></div>');
                }else if(count === 10){
                    $('.note').append('<div><input type="text" placeholder="請填寫圖片說明" maxlength="18" name="MAKUP_TEXT" value="'+sessionStorage.getItem(tmpName)+'" /><div class="new" style="display: none">+</div></div>');
                }

            }
        }
    // }


    if(count<10){
        $('.note').append('<div><input type="text" placeholder="請填寫圖片說明" maxlength="18" name="MAKUP_TEXT" /><div class="new" >+</div></div>');
        count++;
    }

    return(count);

}


function setinput(count){

    //增減圖片說明欄位

    var n,num;

    if(count){
        n = count-1;
        num = 10;
    }else{
        n = 0;
        num = 10;
    }



    $(document).on("click touchstart", ".new", function() {

        if (n < (num - 1)) {
            $(this).removeClass('new').addClass('remove').text('-');
            $('.note').append('<div><input type="text" placeholder="請填寫圖片說明" name="MAKUP_TEXT" maxlength="18"/><div class="new">+</div></div>');
            n++;
            if (n == (num - 1)) {
                $(".note").children().children('.new').css('display', 'none');
            }
        }
    });

    $(document).on("click touchstart", ".remove", function() {
        $(this).parent().remove();
        n--;
        if (n == (num - 2)) {
            $(".note").children().children('.new').css('display', 'inline-block');
        }
    });

}


