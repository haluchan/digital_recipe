$(function() {
    var form = $('form[name="makeup_03"]');
    var img = { brow: getInitialImg('brow'), eye: getInitialImg('eye'), lips: getInitialImg('lips') };

    //清空input裡暫存的資料
    form.children("input").val('0');

    //把每個select的第一個Option加上selected
    $('select.bt>option:first-child').attr('selected', true);


    $('#makeupRecipe div.btn').on('click', function() {
        var model = $(this).attr('data');
        initialAll(img);

        var obj = getDefault(model);

        if (model == 'brow') {
            var imgPath = 'url("img/makeup/03/paint_face/brow/a' + obj.value + 'b.png")';
        } else {

            var imgPath = 'url("img/makeup/03/paint_face/' + model + '_' + obj.type + '/' + obj.value + 'b.png")';
        }

        $(this).css('background-image', imgPath);
        $('div.typeName[data="' + model + '"]').text(obj.text);

    });

    $('.popmenu .ok').on('click', function() {

        var model = $(this).parent('.popmenu').children('select').attr('name');
        var form = $('form[name="makeup_03"]');
        var img = $('#makeupRecipe div.btn[data="' + model + '"]').css('background-image');
        form.children('input[name="' + model + 'Img"]').val(img);
        var obj = getDefault(model);

        if (model == 'brow') {

            form.children('input[name="browVal"]').val(obj.value);
            form.children('input[name="browText"]').val(obj.text);

        } else {

            form.children('input[name="' + model + 'Type"]').val(obj.type);
            form.children('input[name="' + model + 'Val"]').val(obj.value);
            form.children('input[name="' + model + 'Text"]').val(obj.text);

        }

        $('.popmenu').fadeOut(200);
        $('.note').fadeIn(200);

    });

    $('.popmenu .close').on('click', function() {
        initialAll(img);

    });
    //--------------------------------------------------------------------------------------

    function getDefault(model) {
        if (model == 'brow') {
            var element = $('select[name="brow"] option:selected');
            var value = element.val();
            var text = element.text();


        } else {

            var element = $('select[name="' + model + '"] option:selected');
            var type = element.val();
            var active = $('.popmenu.' + model + ' .menu.' + type + ' .list ul li.active')
            var value = active.attr('data');
            var text = element.text() + active.children('.bt_num').text();

        }
        var obj = { type: type, value: value, text: text };
        return obj;
    }

    function initialAll(img) {

        var form = $('form[name="makeup_03"]');
        //重新載入所有的圖片及文字
        var defaultArr = ['brow', 'eye', 'lips'];
        $.each(defaultArr, function(index, val) {
            dImg = '';
            dVal = '';
            dTypeName = '';

            dImg = form.children('input[name="' + val + 'Img"]').val(); //已套用的畫圖區圖片路徑
            dVal = form.children('input[name="' + val + 'Val"]').val(); //已套用的
            dTypeName = form.children('input[name="' + val + 'Text"]').val(); //已套用的文字說明

            if (dImg == '' || dImg == null) {
                dImg = img[val];
            }

            $('#makeupRecipe div.btn[data="' + val + '"]').css('background-image', dImg);
            $('#makeupRecipe div.typeName[data="' + val + '"]').text(dTypeName);

        })
    }

    function getInitialImg(model) {
        return $('#makeupRecipe div.btn[data="' + model + '"]').css('background-image');
    }
});
