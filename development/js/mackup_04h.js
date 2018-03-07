$(document).ready(function(){

    var date = localStorage.getItem('DATE');
    var vipnm = localStorage.getItem('VIPNM');
    var vipids= localStorage.getItem('VIPIDS');
    var bcnm = localStorage.getItem('BCNM');

    $('#date').text(date);
    $('#vipnm').text(vipnm);
    $('#vipids').text(vipids);
    $('#bcnm').text(bcnm);

    $('textarea').text(localStorage.MAKUP_TXT_C);




});

$('.Back2Log').on('click',function () {
    localStorage.clear();
});


$('.next').on('click',function() {

    var textVal = $('textarea')[0].value;
    localStorage.setItem('MAKUP_TXT_C',textVal);

    setTimeout(function () {

        window.open('preview_makeup.html','_self');

    },300);

});



$('.prev').on('click',function(){
    prevPage();
});
