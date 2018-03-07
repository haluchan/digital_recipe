$(document).ready(function() {

    var date = localStorage.getItem('DATE');
    var vipnm = localStorage.getItem('VIPNM');
    var vipids = localStorage.getItem('VIPIDS');
    var bcnm = localStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);


    sessionData();
    cancelData();

});


$('.Back2Log').on('click',function () {
    localStorage.clear();
});


$('.next').on('click',function(){

    if(checkdata()=== true) {

        saveData();

        setTimeout(function () {
            window.open('preview_maintain.html','_self');
        },300);
    }

});

$('.prev').on('click',function(){

    location.href = "maintain_04.html";
});


function saveData() {

    for (var i = 0; i < 6; i++) {
        
        var sName = $('select')[i].id;
        var sUName = sName.toUpperCase();
        var sValue = $('select')[i].value;
        localStorage.setItem(sUName,sValue);

        var textName = $("input[type*='text']")[i].id;
        var textUName = textName.toUpperCase();
        var textValue = $("input[type*='text']")[i].value;
        localStorage.setItem(textUName,textValue);

        
    }

   var textare = $('textarea')[0].name;
    var textUare = textare.toUpperCase();
    var textareValue = $('textarea')[0].value;
    localStorage.setItem(textUare,textareValue);

}

function cancelData(){

$('input[type*="checkbox"]').on('change',function(){

    if($(this).prop('checked')=== false){
        $(this).siblings('.sub').children('input[type*="text"]').val("");
        $(this).siblings('.sub').children('input[type*="text"]').css('display','none');
        $(this).siblings('.sub').children('select').val("0");

    }

});



}


function sessionData() {

    var len = localStorage.length;

    for (var i = 0; i < len; i++) {
        var sessionName = localStorage.key(i);
        var sessionLName = sessionName.toLowerCase();

        for (var j = 0; j < 6; j++) {
            var selectName = $('select')[j].id;
            var sessionValue = localStorage.getItem(sessionName);
            var textValue = $('input[type*="text"]')[j].id;

            if(sessionLName === textValue){
                $('#'+ textValue +'').val(sessionValue);
            }


            if(selectName === sessionLName){

                $('#'+ selectName +'').val(sessionValue);

                if(sessionValue !== "0" && sessionValue !==""){

                    $('#'+ selectName +'').parent().siblings('input[type="checkbox"]').attr('checked','checked')
                    $('#'+ selectName +'').parent('.sub').css('display','block');

                    if(sessionValue === '16'  || sessionValue === '19' || sessionValue === '23' || sessionValue === '26' || sessionValue === '28' || sessionValue === '36' ){
                        $('#'+ selectName +'').siblings('input[type="text"]').css('display','block');
                    }

                }

            }


        }

    }


    $('textarea').val(localStorage.getItem("SUGGESTION"));

}


function checkdata(){



    if($("input:checked").length === 0){

        alert("請至少選擇一項");

        return false;
    }



    return true;
}

