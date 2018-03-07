$(document).ready(function() {

    var date = localStorage.getItem('DATE');
    var vipnm = localStorage.getItem('VIPNM');
    var vipids = localStorage.getItem('VIPIDS');
    var bcnm = localStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);



    if (localStorage.canvasFace_2 !== undefined){
        $('.skinResult').css("display","none");
        $('#previewImage').append("<img src="+localStorage.canvasFace_2+">");
    }else{
        $('canvasTool').css("display","block");
    }

    sessionData();



});

$('.Back2Log').on('click',function () {
    localStorage.clear();
});



$('.next').on('click',function(){


    if(checkdata()){

        getdata();

        if(localStorage.canvasFace_2 === undefined){
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

        if($('input')[i].checked === true){

            var idName = $('input')[i].id;
            var name  = idName.toUpperCase();
            localStorage.setItem(name,"1");
        }else{
            var idName = $('input')[i].id;
            var name  = idName.toUpperCase();
            localStorage.setItem(name,"0");
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
            localStorage.setItem('canvasFace_2',canvas.toDataURL("image/png"));
        }
    });

    return true;
}

function sessionData() {


    var len = localStorage.length;
    for (var i = 0; i < len; i++) {

        var inputName = localStorage.key(i);
        var inputValue = localStorage.getItem(inputName);

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

