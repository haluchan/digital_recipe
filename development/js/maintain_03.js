$(document).ready(function(){
	var list_daily = [
			{ id:  'moisturizing'		,name:'保濕'},
			{ id:  'white'			 	,name:'美白'},
			{ id:  'anti_age'			,name:'抗老'},
			{ id:  'remover'			,name:'卸妝'},
			{ id:  'clean'				,name:'清潔'},
			{ id:  'ME'			 		,name:'ME'},
			{ id:  'lotion'				,name:'化妝水'},
			{ id:  'emulsion'			,name:'乳液'},
			{ id:  'beauty_fluid'		,name:'美容液'},
			{ id:  'cream'			    ,name:'乳霜'},
			{ id:  'cream_protects'   	,name:'防護乳'},
			{ id:  'cream_control'		,name:'控色乳'},
			{ id:  'other_m'			,name:'其他'}	
		],

		basic = [
			{id:'paste'		,name:'膏狀'},
			{id:'paste_c'	,name:'膏狀內容'},
			{id:'liquid'	,name:'液狀'},
			{id:'liquid_c'	,name:'液狀內容'},
			{id:'creamy'	,name:'霜狀'},
			{id:'creamy_c'	,name:'霜狀內容'},
			{id:'cake'		,name:'餅狀'},
			{id:'cake_c'	,name:'餅狀內容'},
			{id:'powder'	,name:'鬆粉狀'},
			{id:'powder_c'	,name:'鬆粉狀內容'},
			{id:'airb'		,name:'氣墊'},
			{id:'airb_c'	,name:'氣墊內容'},
			{id:'bb'		,name:'(BBCC)'},
			{id:'bb_c'		,name:'BB(CC)內容'}
		];

		//滿意度
		approve_c = [
			{ value:'1'         , name:'差'},
			{ value:'2'         , name:'尚可'},
			{ value:'3'         , name:'好'},
			{ value:'4'         , name:'滿意'}
		];

		
	for(i=0 ; i<list_daily.length-2 ; i++){
		$('.daily').append('<li><input type="checkbox" id="'+list_daily[i].id+'"><label for="'+list_daily[i].id+'"><span></span>'+list_daily[i].name+'</label></li>');
	}
	
	for(i=list_daily.length-2 ; i<list_daily.length ; i++){
		$('.daily_2').append('<li><input type="checkbox" id="'+list_daily[i].id+'"><label for="'+list_daily[i].id+'"><span></span>'+list_daily[i].name+'</label></li>');
	}

	for(i=0 ; i<basic.length ; i+=2){
		$('.basic').append('<li><input type="checkbox" id="'+basic[i].id+'"><label for="'+basic[i].id+'"><span></span>'+basic[i].name+'</label><input type="text" id="'+basic[i+1].id+'" name="'+basic[i+1].name+'" placeholder="請輸入備註" class="other"></li>');
	} 

	$('.daily_2 li:last-child()').append('<input type="text" id="other_mc" name="其他內容" placeholder="請輸入備註" class="other">');

	$(document).on('click','li',function(){
		if($(this).children('input[type="checkbox"]').prop('checked')){
			$(this).children('input[type="text"]').fadeIn(500);
		}else{
			$(this).children('input[type="text"]').fadeOut(500);
		}
	});

	//滿意度 下拉
	for(i=0 ; i<approve_c.length ; i++){
		$('select[name="approve_c"]').append('<option value='+approve_c[i].value+'>'+approve_c[i].name+'</option');
	}

});

















