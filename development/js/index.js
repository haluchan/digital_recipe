$(document).ready(function() {
    $('img').parent().css('font-size', 0);

    var winW = window.screen.width,
        winH = window.screen.height,
        winw = $(window).width(),
        winh = $(window).height();


    $('#mo-size').text('螢幕尺寸：寬度' + winW + ' px, 高度：' + winH + ' px');
    $('#browser-size').text('Browser：' + winw + ' px * ' + winh + ' px');


    //Menu
    $('#content').addClass('menu-close');
    $('#menu .btn').click(function() {
        if ($('#menu').hasClass('menu-open')) {
            $('#menu').removeClass('menu-open');
            $('#menu').animate({ 'margin-left': "-200px" }, 300);
            $('#content').animate({ 'margin-right': "100px" }, 300);
        } else {
            $('#menu').addClass('menu-open');
            $('#menu').animate({ 'margin-left': "0px" }, 300);
            $('#content').animate({ 'margin-right': "0px" }, 300);
        }
    });


    //增減圖片說明欄位
    var n = 0,
        num = 10;

    $(document).on("click touchstart", ".new", function() {

        if (n < (num - 1)) {
            $(this).removeClass('new').addClass('remove').text('-');
            $('.note').append('<div><input type="text" placeholder="請填寫圖片說明"/><div class="new">+</div></div>');
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


    //眉型選擇
    //edited by robert start
    $("select[name='brow']").change(function() {
        var value = $(this).val();
        var text = $(this).children('option:selected').text();
        $('.brow-dis img').attr('src', 'img/makeup/03/brow/a' + value + '.png');
        $('div.btn[data="brow"]').css('background-image', 'url("img/makeup/03/paint_face/brow/a' + value + 'b.png")'); //add by robert
        $('div.typeName[data="brow"]').text(text);
        
    });
    //edited by robert end

    //眼彩
    //edited by robert start
    $("select[name='eye']").change(function() {
        var value = $(this).val();
        $('.popmenu.eye .menu').hide();
        $('.popmenu.eye .menu.' + value).fadeIn(500);
        

    });
    //edited by robert end

    for (i = 1; i <= 26; i++) {

        if (i <= 6) {
            data = 'b30' + i;
            bt_num = '0' + i;
            $('.b3 .list ul').append('<li data="' + data + '"><div><img src="img/makeup/03/eye_b3/' + data + '.png"></div><div class="bt_num">' + bt_num + '</div></li>');
        } else if (i > 10 && i <= 16) {
            data = 'b3' + i;
            bt_num = i;
            $('.b3 .list ul').append('<li data="' + data + '"><div><img src="img/makeup/03/eye_b3/' + data + '.png"></div><div class="bt_num">' + bt_num + '</div></li>');
        } else if (i > 20 && i <= 26) {
            data = 'b3' + i;
            bt_num = i;
            $('.b3 .list ul').append('<li data="' + data + '"><div><img src="img/makeup/03/eye_b3/' + data + '.png"></div><div class="bt_num">' + bt_num + '</div></li>');
        }
    }

    for (i = 1; i <= 4; i++) {

        data = 'b20' + i;
        bt_num = '0' + i;
        $('.b2 .list ul').append('<li data="' + data + '"><div><img src="img/makeup/03/eye_b2/' + data + '.png"></div><div class="bt_num">' + bt_num + '</div></li>');

    }

    //edited by robert start
    $('.eye .list li').click(function() {
        doc = $(this).closest('.menu').attr('data');
        var value = $(this).attr('data');
        var text = $(this).parents('.eye').find('select[name="eye"] option:selected').text()+$(this).children('.bt_num').text();

        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).closest('.menu').find('.img img').attr('src', 'img/makeup/03/' + doc + '/eye-img-' + value + '.png');
        $('div.btn[data="eye"]').css('background-image', 'url("img/makeup/03/paint_face/' + doc + '/' + value + 'b.png")'); //add by robert
        $('div.typeName[data="eye"]').text(text);
       

    });
    //edited by robert end
    /*
    $('.b2 .list li').click(function(){
    	$('.b2 .list li').removeClass('active');
    	$(this).addClass('active');
    	$('.b2 .img img').attr('src','img/makeup/03/eye_b2/eye-img-'+$(this).attr('data')+'.png');
    });

    $('.b3 .list li').click(function(){
    	$('.b3 .list li').removeClass('active');
    	$(this).addClass('active');
    	$('.b3 .img img').attr('src','img/makeup/03/eye_b3/eye-img-'+$(this).attr('data')+'.png');
    });
    */

    //edited by robert start
    //唇彩
    $("select[name='lips']").change(function() {
        var value = $(this).val();
        $('.popmenu.lips .menu').hide();
        $('.popmenu.lips .menu.' + value).fadeIn(500);
        // $('form[name="makeup_03"]>input[name="lipsType"]').val(value);
    });
    //edited by robert end
    var lips_a = ["NC04", "NC06", "NC07", "NC08", "NC10", "NC11", "NC12", "NC13", "NC14"];
    for (i = 0; i < lips_a.length; i++) {
        $('.lips .menu.a ul').append('<li data="' + lips_a[i] + '"><div><img src="img/makeup/03/lips_a/' + lips_a[i] + '.png"></div><div class="bt_num">' + lips_a[i] + '</div></li>');
    }
    var lips_b = ["01", "02", "03", "04", "05", "06"];
    for (i = 0; i < lips_b.length; i++) {
        $('.lips .menu.b ul').append('<li data="' + lips_b[i] + '"><div><img src="img/makeup/03/lips_b/' + lips_b[i] + '.png"></div><div class="bt_num">' + lips_b[i] + '</div></li>');
    }
    var lips_c = ["C01", "C02", "C03", "C04", "C05", "C06", "C07", "C08", "C09", "C10", "S01", "S02", "S03", "S04", "S05", "M01", "M02", "M03"];
    for (i = 0; i < lips_c.length; i++) {
        $('.lips .menu.c ul').append('<li data="' + lips_c[i] + '"><div><img src="img/makeup/03/lips_c/' + lips_c[i] + '.png"></div><div class="bt_num">' + lips_c[i] + '</div></li>');
    }
    //edited by robert start
    $('.lips .list li').click(function() {
        doc = $(this).closest('.menu').attr('data');
        var value = $(this).attr('data');
        var text = $(this).parents('.lips').find('select[name="lips"] option:selected').text()+$(this).children('.bt_num').text();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).closest('.menu').find('.img img').attr('src', 'img/makeup/03/' + doc + '/img/' + value + '.png');
        $('div.btn[data="lips"]').css('background-image', 'url("img/makeup/03/paint_face/' + doc + '/' + value + 'b.png")'); //add by robert
        $('div.typeName[data="lips"]').text(text);
    });
    //edited by robert end


    //common
    $('.list li:first-child').addClass('active');

    $('.btn').click(function() {
        var menu = $(this).attr('data');
        $('.popmenu.' + menu).siblings('.popmenu').css('z-index', '999').stop().fadeOut(200);
        $('.popmenu.' + menu).css('z-index', '998').show();
    });

    $('.close').click(function() {
        $('.popmenu').fadeOut(200);
        $('.note').fadeIn(200);
    });

});