$(document).ready(function(){
var special = skinProdSelect();

	//special list
	for(i=0 ; i<special.length ; i++){
		$('.special').append('<li><input type="checkbox" id="inputHidden'+i+'"><label for="inputHidden'+i+'"><span></span>'+special[i].name+'保養</label><div class="sub"><select id="'+special[i].id+'c" name="'+special[i].id + 'c"></select><span></span><div class="'+special[i].id+'sub third_sub"></div><input type="text" id="'+special[i].id+'t" name="'+special[i].name+'文字" placeholder="請輸入備註" class="other"></sub></li>');

        // for(j=0 , j_num=special[i].option.length; j<j_num ; j++){
        //     $('#'+special[i].id+'c').append('<option value="'+special[i].option[j].value+'">'+special[i].option[j].name+'</option>');
        //
        //     if(j>0 && j<j_num-1){
        //         $('.'+special[i].id+'sub').append('<select id="'+special[i].option[j].value+'"></select>');
        //         for(var t=0, t_num=special[i].option[j].option.length ; t<t_num ; t++){
        //             $('.'+special[i].id+'sub select[id="'+special[i].option[j].value+'"]').append('<option value="'+special[i].option[j].option[t].value+'">'+special[i].option[j].option[t].name+'</option>');
        //             console.log(t_num);
        //         }
        //     }
        // }



        for(j=0 , j_num=special[i].option.length; j<j_num ; j++) {
            $('#' + special[i].id + 'c').append('<option value="' + special[i].option[j].value + '">' + special[i].option[j].name + '</option>');
        }

    }


    var data = special;
    $("#horny_c").change([data],function (){

        var selectHorny =$("#horny_c").find(':selected').val();

        if($('select[name="horny_t"]').length !== 0){
            $('select[name="horny_t"]').remove();
        }

        switch(selectHorny){
            case '14':

                $('.horny_sub').append('<select id="'+data[0].option[1].value+'" name="horny_t"></select>');

                var len=data[0].option[1].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.horny_sub select[id="14"]').append('<option value="'+data[0].option[1].option[i].value+'">'+data[0].option[1].option[i].name+'</option>')
                }

                $('#horny_t').val('');

                break;
            case '15':

                $('.horny_sub').append('<select id="'+data[0].option[2].value+'" name="horny_t"></select>');

                var len=data[0].option[2].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.horny_sub select[id="15"]').append('<option value="'+data[0].option[2].option[i].value+'">'+data[0].option[2].option[i].name+'</option>')
                }

                $('#horny_t').val('');
                break;
            case '16':

                break;
                default:
        }

    });

    $("#drying_c").change([data],function (){

        var selectHorny =$("#drying_c").find(':selected').val();
        if($('select[name="drying_t"]').length !== 0){
            $('select[name="drying_t"]').remove();
        }

        switch(selectHorny){
            case '17':

                $('.drying_sub').append('<select id="'+data[1].option[1].value+'" name="drying_t"></select>');

                var len=data[1].option[1].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.drying_sub select[id="17"]').append('<option value="'+data[1].option[1].option[i].value+'">'+data[1].option[1].option[i].name+'</option>')
                }

                $('#drying_t').val('');
                break;
            case '18':

                $('.drying_sub').append('<select id="'+data[1].option[2].value+'" name="drying_t"></select>');

                var len=data[1].option[2].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.drying_sub select[id="18"]').append('<option value="'+data[1].option[2].option[i].value+'">'+data[1].option[2].option[i].name+'</option>')
                }

                $('#drying_t').val('');
                break;
            case '19':

                break;
                default:
        }

    });

    $("#whitening_c").change([data],function (){

        var selectHorny =$("#whitening_c").find(':selected').val();
        if($('select[name="whitening_t"]').length !== 0){
            $('select[name="whitening_t"]').remove();
        }

        switch(selectHorny){
            case '20':

                $('.whitening_sub').append('<select id="'+data[2].option[1].value+'" name="whitening_t"></select>');

                var len=data[2].option[1].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.whitening_sub select[id="20"]').append('<option value="'+data[2].option[1].option[i].value+'">'+data[2].option[1].option[i].name+'</option>')
                }

                $('#whitening_t').val('');
                break;
            case '21':

                $('.whitening_sub').append('<select id="'+data[2].option[2].value+'" name="whitening_t"></select>');

                var len=data[2].option[2].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.whitening_sub select[id="21"]').append('<option value="'+data[2].option[2].option[i].value+'">'+data[2].option[2].option[i].name+'</option>')
                }

                $('#whitening_t').val('');
                break;
            case '22':

                $('.whitening_sub').append('<select id="'+data[2].option[3].value+'" name="whitening_t"></select>');

                var len=data[2].option[3].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.whitening_sub select[id="22"]').append('<option value="'+data[2].option[3].option[i].value+'">'+data[2].option[3].option[i].name+'</option>')
                }

                $('#whitening_t').val('');
                break;
            case '23':

                break;
            default:
        }

    });


    $("#elasticity_c").change([data],function (){

        var selectHorny =$("#elasticity_c").find(':selected').val();
        if($('select[name="elasticity_t"]').length !== 0){
            $('select[name="elasticity_t"]').remove();
        }

        switch(selectHorny){
            case '24':

                $('.elasticity_sub').append('<select id="'+data[3].option[1].value+'" name="elasticity_t"></select>');

                var len=data[3].option[1].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.elasticity_sub select[id="24"]').append('<option value="'+data[3].option[1].option[i].value+'">'+data[3].option[1].option[i].name+'</option>')
                }

                $('#elasticity_t').val('');
                break;
            case '25':

                $('.elasticity_sub').append('<select id="'+data[3].option[2].value+'" name="elasticity_t"></select>');

                var len=data[3].option[2].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.elasticity_sub select[id="25"]').append('<option value="'+data[3].option[2].option[i].value+'">'+data[3].option[2].option[i].name+'</option>')
                }

                $('#elasticity_t').val('');
                break;
            case '26':

                break;
            default:
        }

    });

    $("#uv_c").change([data],function (){

        var selectHorny =$("#uv_c").find(':selected').val();
        if($('select[name="uv_t"]').length !== 0){
            $('select[name="uv_t"]').remove();
        }

        switch(selectHorny){
            case '27':

                $('.uv_sub').append('<select id="'+data[4].option[1].value+'" name="uv_t"></select>');

                var len=data[4].option[1].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.uv_sub select[id="27"]').append('<option value="'+data[4].option[1].option[i].value+'">'+data[4].option[1].option[i].name+'</option>')
                }

                $('#uv_t').val('');
                break;
            case '28':

                break;
            default:
        }

    });

    $("#other_c").change([data],function (){

        var selectHorny =$("#other_c").find(':selected').val();
        if($('select[name="other_t"]').length !== 0){
            $('select[name="other_t"]').remove();
        }

        switch(selectHorny){
            case '29':

                $('.other_sub').append('<select id="'+data[5].option[1].value+'" name="other_t"></select>');

                var len=data[5].option[1].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.other_sub select[id="29"]').append('<option value="'+data[5].option[1].option[i].value+'">'+data[5].option[1].option[i].name+'</option>')
                }

                $('#other_t').val('');
                break;
            case '30':

                $('.other_sub').append('<select id="'+data[5].option[2].value+'" name="other_t"></select>');

                var len=data[5].option[2].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.other_sub select[id="30"]').append('<option value="'+data[5].option[2].option[i].value+'">'+data[5].option[2].option[i].name+'</option>')
                }

                $('#other_t').val('');
                break;
            case '31':

                $('.other_sub').append('<select id="'+data[5].option[3].value+'" name="other_t"></select>');

                var len=data[5].option[3].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.other_sub select[id="31"]').append('<option value="'+data[5].option[3].option[i].value+'">'+data[5].option[3].option[i].name+'</option>')
                }

                $('#other_t').val('');
                break;
            case '32':

                $('.other_sub').append('<select id="'+data[5].option[4].value+'" name="other_t"></select>');

                var len=data[5].option[4].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.other_sub select[id="32"]').append('<option value="'+data[5].option[4].option[i].value+'">'+data[5].option[4].option[i].name+'</option>')
                }

                $('#other_t').val('');
                break;
            case '33':

                $('.other_sub').append('<select id="'+data[5].option[5].value+'" name="other_t"></select>');

                var len=data[5].option[5].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.other_sub select[id="33"]').append('<option value="'+data[5].option[5].option[i].value+'">'+data[5].option[5].option[i].name+'</option>')
                }

                $('#other_t').val('');
                break;
            case '34':

                $('.other_sub').append('<select id="'+data[5].option[6].value+'" name="other_t"></select>');

                var len=data[5].option[6].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.other_sub select[id="34"]').append('<option value="'+data[5].option[6].option[i].value+'">'+data[5].option[6].option[i].name+'</option>')
                }

                $('#other_t').val('');
                break;
            case '35':

                $('.other_sub').append('<select id="'+data[5].option[7].value+'" name="other_t"></select>');

                var len=data[5].option[7].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.other_sub select[id="35"]').append('<option value="'+data[5].option[7].option[i].value+'">'+data[5].option[7].option[i].name+'</option>')
                }

                $('#other_t').val('');
                break;
            default:
        }

    });

    var remove = removeVal();
    var clean = cleanVal();
    var wet = wetVal();

	//basic list
	for(i=0,num=remove.length; i<num ; i++){
		$('.basc_remove').append('<option value="'+remove[i].value+'">'+remove[i].name+'</option>');
	}
	for(i=0,num=clean.length; i<num ; i++){
		$('.basc_clean').append('<option value="'+clean[i].value+'">'+clean[i].name+'</option>');
	}
	for(i=0,num=wet.length; i<num ; i++){
		$('.basc_wet').append('<option value="'+wet[i].value+'">'+wet[i].name+'</option>');
	}



	

	//check box
	$(document).on('click','label',function(){
		if($(this).siblings('input[type="checkbox"]').prop('checked')){
			$(this).siblings('.sub').fadeOut(500);
			
		}else{
			$(this).siblings('.sub').fadeIn(500);
			console.log($(this).siblings('.sub').children('select').find(":selected").text()+','+$(this).siblings('.sub').children('select').val());
		}
	});

	//select
	$(document).on('change','select',function(){
		val = $(this).val();
		$(this).siblings('span').fadeIn(500);
		
		if($(this).find(":selected").text() == '其他'){
			$(this).siblings('.third_sub').children('select').css('display','none');
			$(this).siblings('input[type="text"]').css('display','none');
			$(this).siblings('input[type="text"]').fadeIn(500);
		}else if(val=='0'){
			$(this).siblings('input[type="text"],span').fadeOut(500);
			$(this).siblings('.third_sub').children('select').fadeOut(500);
		}else{
			$(this).siblings('.third_sub').children('select').css('display','none');
			$(this).siblings('input[type="text"]').css('display','none');
			$(this).siblings('.third_sub').children('select[id="'+val+'"]').fadeIn(500);
		}
		// console.log($(this).find(":selected").text()+','+val);
	});

});






