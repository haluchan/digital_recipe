$(document).ready(function(){
var special =	[
        {id:'horny_', name:'角層' , option :[
                {value:'0'  , name:'請選取', option:[]},
                {value:'14' , name:'去除老廢角質', option:[
                        {value:"0", name:"無選取"},
                        {value:"1401", name:"泥狀角質按摩霜e"},
                        {value:"1402", name:"逆齡再生修復精露"},
                        {value:"1403", name:"角質發光液EX 1"},
                        {value:"1404", name:"角質發光液EX 2"}]},
                {value:'15' , name:'提升角層濕潤度', option:[
                        {value:"0", name:"無選取"},
                        {value:"1501", name:"泥狀角質按摩霜e"},
                        {value:"1502", name:"逆齡再生修復精露"},
                        {value:"1503", name:"角質發光液EX 1"},
                        {value:"1504", name:"角質發光液EX 2"}]},
                {value:'16' , name:'其他'}]
        },
        {id:'drying_' ,name:'乾燥' , option :[
                {value:'0'  , name:'請選取', option:[]},
                {value:'17' , name:'補充水分,深層鎖水造水', option:[
                        {value:"0", name:"無選取"},
                        {value:"1701", name:"美膚膜力保濕露"},
                        {value:"1702", name:"美膚保水菁華棒"},
                        {value:"1703", name:"美膚溫感眼部精華"},
                        {value:"1704", name:"膜力護唇抗UV精華 "},
                        {value:"1705", name:"美膚微整機能液"},
                        {value:"1706", name:"美膚微整精華凝凍"}]},
                {value:'18' , name:'給予肌膚滋潤,防止養分流失', option:[
                        {value:"0", name:"無選取"},
                        {value:"1801", name:"美膚膜力保濕露"},
                        {value:"1802", name:"美膚保水菁華棒"},
                        {value:"1803", name:"美膚溫感眼部精華"},
                        {value:"1804", name:"膜力護唇抗UV精華 "},
                        {value:"1805", name:"美膚微整機能液"},
                        {value:"1806", name:"美膚微整精華凝凍"}]},
                {value:'19' , name:'其他'}]
        },

        {id:'whitening_' , name:'美白' , option : [
                {value:'0'  , name:'請選取', option:[]},
                {value:'20' , name:'排出,抑制黑色素', option:[
                        {value:"0", name:"無選取"},
                        {value:"2001", name:"肌淨白精萃OP"},
                        {value:"2002", name:"肌淨白面膜"}]},
                {value:'21' , name:'改善真皮層「黃色化」', option:[
                        {value:"0", name:"無選取"},
                        {value:"2101", name:"肌淨白精萃OP"},
                        {value:"2102", name:"肌淨白面膜"}]},
                {value:'22' , name:'促進血液循環正常,提高血液含氧量', option:[
                        {value:"0", name:"無選取"},
                        {value:"2201", name:"肌淨白精萃OP"},
                        {value:"2202", name:"肌淨白面膜"}]},
                {value:'23' , name:'其他'}]
        },

        {id:'elasticity_' , name:'張力．彈力' , option : [
                {value:'0'  , name:'請選取', option:[]},
                {value:'24' , name:'活絡真皮細胞活力', option:[
                        {value:"0", name:"無選取"},
                        {value:"2401", name:"逆齡再生無痕乳霜"},
                        {value:"2402", name:"逆齡再生無痕眼膜霜"},
                        {value:"2403", name:"肌能膜力緊緻精華"},
                        {value:"2404", name:"肌能補充膠囊"},
                        {value:"2405", name:"緊緻集效霜"},
                        {value:"2406", name:"抗皺集效霜"}]},
                {value:'25' , name:'促進膠原,彈力蛋白纖維生成', option:[
                        {value:"0", name:"無選取"},
                        {value:"2501", name:"逆齡再生無痕乳霜"},
                        {value:"2502", name:"逆齡再生無痕眼膜霜"},
                        {value:"2503", name:"肌能膜力緊緻精華"},
                        {value:"2504", name:"肌能補充膠囊"},
                        {value:"2505", name:"緊緻集效霜"},
                        {value:"2506", name:"抗皺集效霜"}]},
                {value:'26' , name:'其他'}]
        },

        {id:'uv_' ,name:'紫外線' , option : [
                {value:'0'  , name:'請選取', option:[]},
                {value:'27' , name:'白天做好防護', option:[
                        {value:"0", name:"無選取"},
                        {value:"2701", name:"舒緩隔光霜EX"},
                        {value:"2702", name:"臉部抗痕防護乳EX"},
                        {value:"2703", name:"全身抗痕防護乳"}]},
                {value:'28' , name:'其他'}]
        },

        {id:'other_' ,name:'其他困擾' , option : [
                {value:'0'  , name:'請選取', option:[]},
                {value:'29' , name:'控油,抑制多餘油分', option:[
                        {value:"0", name:"無選取"},
                        {value:"2901", name:"粉刺敷面組合N"},
                        {value:"2902", name:"急效抗壓馴荳精華"},
                        {value:"2903", name:"2步驟粉刺組"},
                        {value:"2904", name:"身體馴荳噴霧EX"},
                        {value:"2905", name:"按摩水凝露N "}]},
                {value:'30' , name:'收斂毛孔', option:[
                        {value:"0", name:"無選取"},
                        {value:"3001", name:"粉刺敷面組合N"},
                        {value:"3002", name:"急效抗壓馴荳精華"},
                        {value:"3003", name:"2步驟粉刺組"},
                        {value:"3004", name:"身體馴荳噴霧EX"},
                        {value:"3005", name:"按摩水凝露N "}]},
                {value:'31' , name:'去除粉刺', option:[
                        {value:"0", name:"無選取"},
                        {value:"3101", name:"粉刺敷面組合N"},
                        {value:"3102", name:"急效抗壓馴荳精華"},
                        {value:"3103", name:"2步驟粉刺組"},
                        {value:"3104", name:"身體馴荳噴霧EX"},
                        {value:"3105", name:"按摩水凝露N "}]},
                {value:'32' , name:'消炎治痘', option:[
                        {value:"0", name:"無選取"},
                        {value:"3201", name:"粉刺敷面組合N"},
                        {value:"3202", name:"急效抗壓馴荳精華"},
                        {value:"3203", name:"2步驟粉刺組"},
                        {value:"3204", name:"身體馴荳噴霧EX"},
                        {value:"3205", name:"按摩水凝露N "}]},
                {value:'33' , name:'促進血液循環順暢', option:[
                        {value:"0", name:"無選取"},
                        {value:"3301", name:"粉刺敷面組合N"},
                        {value:"3302", name:"急效抗壓馴荳精華"},
                        {value:"3303", name:"2步驟粉刺組"},
                        {value:"3304", name:"身體馴荳噴霧EX"},
                        {value:"3305", name:"按摩水凝露N "}]},
                {value:'34' , name:'黑眼圈:促進眼週血液循環順暢', option:[
                        {value:"0", name:"無選取"},
                        {value:"3401", name:"粉刺敷面組合N"},
                        {value:"3402", name:"急效抗壓馴荳精華"},
                        {value:"3403", name:"2步驟粉刺組"},
                        {value:"3404", name:"身體馴荳噴霧EX"},
                        {value:"3405", name:"按摩水凝露N "}]},
                {value:'35' , name:'敏感:提升肌膚防禦力', option:[
                        {value:"0", name:"無選取"},
                        {value:"3501", name:"粉刺敷面組合N"},
                        {value:"3502", name:"急效抗壓馴荳精華"},
                        {value:"3503", name:"2步驟粉刺組"},
                        {value:"3504", name:"身體馴荳噴霧EX"},
                        {value:"3505", name:"按摩水凝露N "}]},
                {value:'36' , name:'其他'}]
        },
    ],

    remove = [
        {value:"1" , name:"瞬卸潔膚油EX"},
        {value:"2" , name:"瞬卸潔膚蜜EX"},
        {value:"3" , name:"瞬卸潔膚霜EX"},
        {value:"4" , name:"逆齡再生溫感卸妝凝露"},
        {value:"5" , name:"眼唇卸妝液"}
    ],

    clean = [
        {value:"1" , name:"舒緩潔膚乳"},
        {value:"2" , name:"海洋礦物皂"},
        {value:"3" , name:"透明潔膚乳e"},
        {value:"4" , name:"柔潤潔膚乳N"}
    ],

    balance = [
        {value:"1" , name:"基礎1"},
        {value:"2" , name:"基礎2"},
        {value:"3" , name:"基礎3"},
        {value:"4" , name:"基礎4"},
        {value:"5" , name:"強化1"},
        {value:"6" , name:"強化2"},
        {value:"7" , name:"強化3"},
        {value:"8" , name:"強化4"},
        {value:"9" , name:"超強化1"},
        {value:"10" , name:"超強化2"},
        {value:"11" , name:"超強化3"},
        {value:"12" , name:"超強化4"},
        {value:"13" , name:"舒緩1"},
        {value:"14" , name:"舒緩2"},
        {value:"15" , name:"極致1"},
        {value:"16" , name:"極致2"},
        {value:"17" , name:"極致3"}
    ];



	//special list
	for(i=0 ; i<special.length ; i++){
		$('.special').append('<li><input type="checkbox" id="'+i+'"><label for="'+i+'"><span></span>'+special[i].name+'保養</label><div class="sub"><select id="'+special[i].id+'c" name="'+special[i].name + '內容"></select><span></span><div class="'+special[i].id+'sub third_sub"></div><input type="text" id="'+special[i].id+'t" name="'+special[i].name+'文字" placeholder="請輸入備註" class="other"></sub></li>');

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
        if($('select[data="horny_t"]').length !== 0){
            $('select[data="horny_t"]').remove();
        }

        switch(selectHorny){
            case '14':

                $('.horny_sub').append('<select id="'+data[0].option[1].value+'" data="horny_t"></select>');

                var len=data[0].option[1].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.horny_sub select[id="14"]').append('<option value="'+data[0].option[1].option[i].value+'">'+data[0].option[1].option[i].name+'</option>')///
                }

                break;
            case '15':

                $('.horny_sub').append('<select id="'+data[0].option[2].value+'" data="horny_t"></select>');

                var len=data[0].option[2].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.horny_sub select[id="15"]').append('<option value="'+data[0].option[2].option[i].value+'">'+data[0].option[2].option[i].name+'</option>')///
                }

                break;
            case '16':

                break;
                default:
        }

    });

    $("#drying_c").change([data],function (){

        var selectHorny =$("#drying_c").find(':selected').val();
        if($('select[data="drying_t"]').length !== 0){
            $('select[data="drying_t"]').remove();
        }

        switch(selectHorny){
            case '17':

                $('.drying_sub').append('<select id="'+data[1].option[1].value+'" data="drying_t"></select>');

                var len=data[1].option[1].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.drying_sub select[id="17"]').append('<option value="'+data[1].option[1].option[i].value+'">'+data[1].option[1].option[i].name+'</option>')///
                }

                break;
            case '18':

                $('.drying_sub').append('<select id="'+data[1].option[2].value+'" data="drying_t"></select>');

                var len=data[1].option[2].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.drying_sub select[id="18"]').append('<option value="'+data[1].option[2].option[i].value+'">'+data[1].option[2].option[i].name+'</option>')///
                }

                break;
            case '19':

                break;
                default:
        }

    });

    $("#whitening_c").change([data],function (){

        var selectHorny =$("#whitening_c").find(':selected').val();
        if($('select[data="whitening_t"]').length !== 0){
            $('select[data="whitening_t"]').remove();
        }

        switch(selectHorny){
            case '20':

                $('.whitening_sub').append('<select id="'+data[2].option[1].value+'" data="whitening_t"></select>');

                var len=data[2].option[1].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.whitening_sub select[id="20"]').append('<option value="'+data[2].option[1].option[i].value+'">'+data[2].option[1].option[i].name+'</option>')///
                }

                break;
            case '21':

                $('.whitening_sub').append('<select id="'+data[2].option[2].value+'" data="whitening_t"></select>');

                var len=data[2].option[2].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.whitening_sub select[id="21"]').append('<option value="'+data[2].option[2].option[i].value+'">'+data[2].option[2].option[i].name+'</option>')///
                }

                break;
            case '22':

                $('.whitening_sub').append('<select id="'+data[2].option[3].value+'" data="whitening_t"></select>');

                var len=data[2].option[3].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.whitening_sub select[id="22"]').append('<option value="'+data[2].option[3].option[i].value+'">'+data[2].option[3].option[i].name+'</option>')///
                }
                break;
            case '23':

                break;
            default:
        }

    });


    $("#elasticity_c").change([data],function (){

        var selectHorny =$("#elasticity_c").find(':selected').val();
        if($('select[data="elasticity_t"]').length !== 0){
            $('select[data="elasticity_t"]').remove();
        }

        switch(selectHorny){
            case '24':

                $('.elasticity_sub').append('<select id="'+data[3].option[1].value+'" data="elasticity_t"></select>');

                var len=data[3].option[1].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.elasticity_sub select[id="24"]').append('<option value="'+data[3].option[1].option[i].value+'">'+data[3].option[1].option[i].name+'</option>')///
                }

                break;
            case '25':

                $('.elasticity_sub').append('<select id="'+data[3].option[2].value+'" data="elasticity_t"></select>');

                var len=data[3].option[2].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.elasticity_sub select[id="25"]').append('<option value="'+data[3].option[2].option[i].value+'">'+data[3].option[2].option[i].name+'</option>')///
                }

                break;
            case '26':

                break;
            default:
        }

    });

    $("#uv_c").change([data],function (){

        var selectHorny =$("#uv_c").find(':selected').val();
        if($('select[data="uv_t"]').length !== 0){
            $('select[data="uv_t"]').remove();
        }

        switch(selectHorny){
            case '27':

                $('.uv_sub').append('<select id="'+data[4].option[1].value+'" data="uv_t"></select>');

                var len=data[4].option[1].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.uv_sub select[id="27"]').append('<option value="'+data[4].option[1].option[i].value+'">'+data[4].option[1].option[i].name+'</option>')///
                }

                break;
            case '28':

                break;
            default:
        }

    });

    $("#other_c").change([data],function (){

        var selectHorny =$("#other_c").find(':selected').val();
        if($('select[data="other_t"]').length !== 0){
            $('select[data="other_t"]').remove();
        }

        switch(selectHorny){
            case '29':

                $('.other_sub').append('<select id="'+data[5].option[1].value+'" data="other_t"></select>');

                var len=data[5].option[1].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.other_sub select[id="29"]').append('<option value="'+data[5].option[1].option[i].value+'">'+data[5].option[1].option[i].name+'</option>')///
                }

                break;
            case '30':

                $('.other_sub').append('<select id="'+data[5].option[2].value+'" data="other_t"></select>');

                var len=data[5].option[2].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.other_sub select[id="30"]').append('<option value="'+data[5].option[2].option[i].value+'">'+data[5].option[2].option[i].name+'</option>')///
                }

                break;
            case '31':

                $('.other_sub').append('<select id="'+data[5].option[3].value+'" data="other_t"></select>');

                var len=data[5].option[3].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.other_sub select[id="31"]').append('<option value="'+data[5].option[3].option[i].value+'">'+data[5].option[3].option[i].name+'</option>')///
                }
                break;
            case '32':

                $('.other_sub').append('<select id="'+data[5].option[4].value+'" data="other_t"></select>');

                var len=data[5].option[4].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.other_sub select[id="32"]').append('<option value="'+data[5].option[4].option[i].value+'">'+data[5].option[4].option[i].name+'</option>')///
                }

                break;
            case '33':

                $('.other_sub').append('<select id="'+data[5].option[5].value+'" data="other_t"></select>');

                var len=data[5].option[5].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.other_sub select[id="33"]').append('<option value="'+data[5].option[5].option[i].value+'">'+data[5].option[5].option[i].name+'</option>')///
                }

                break;
            case '34':

                $('.other_sub').append('<select id="'+data[5].option[6].value+'" data="other_t"></select>');

                var len=data[5].option[6].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.other_sub select[id="34"]').append('<option value="'+data[5].option[6].option[i].value+'">'+data[5].option[6].option[i].name+'</option>')///
                }
                break;
            case '35':

                $('.other_sub').append('<select id="'+data[5].option[7].value+'" data="other_t"></select>');

                var len=data[5].option[7].option.length;

                for (i=0 ; i<len ; i++) {

                    $('.other_sub select[id="35"]').append('<option value="'+data[5].option[7].option[i].value+'">'+data[5].option[7].option[i].name+'</option>')///
                }
                break;
            default:
        }

    });

	//basic list
	for(i=0,num=remove.length; i<num ; i++){
		$('.remove').append('<option value="'+remove[i].value+'" data="remove">'+remove[i].name+'</option>');
	}
	for(i=0,num=clean.length; i<num ; i++){
		$('.clean').append('<option value="'+clean[i].value+'" data="clean">'+clean[i].name+'</option>');
	}
	for(i=0,num=balance.length; i<num ; i++){
		$('.balance').append('<option value="'+balance[i].value+'" data="balance">'+balance[i].name+'</option>');
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






