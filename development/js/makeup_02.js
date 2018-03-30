$(document).ready(function(){
	var	//先天
		natural_c = [
			{ value:'1'         , name:'I'},
			{ value:'2'         , name:'II'},
			{ value:'3'         , name:'III'},
			{ value:'4'         , name:'IV'}
		],

		//後天
		acquired_c = [
			{ value:'1'         , name:'D1'},
			{ value:'2'         , name:'D2'},
			{ value:'3'         , name:'D3'},
			{ value:'4'         , name:'D4'}
		],

		//彈力	
		elasticity = [
			{ value:'1'         , name:'S'},
			{ value:'2'         , name:'G'}
		],
		//透明感
		transparency_c = [
			{ value:'1'         , name:'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp角層'},
			{ value:'2'         , name:'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp基底'},
			{ value:'3'         , name:'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp角層透明度'},
			{ value:'4'         , name:'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp黑色素量'},
			{ value:'5'         , name:'黑色素分布與均勻度'},
			{ value:'6'         , name:'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp氣血度'},
			{ value:'7'         , name:'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp黃色化'}
		],

		//美肌等級
		skin_level = [
			{ value:'1'         , name:'&nbsp&nbsp+3'},
			{ value:'2'         , name:'&nbsp&nbsp+2'},
			{ value:'3'         , name:'&nbsp&nbsp+1'},
			{ value:'4'         , name:'&nbsp&nbsp&nbsp-1'},
			{ value:'5'         , name:'&nbsp&nbsp&nbsp-2'},
			{ value:'6'         , name:'&nbsp&nbsp&nbsp-3'}
		],

		//原膚色
		skin_color_c = [
			{ value:'1'         , name:'100'},
			{ value:'2'         , name:'101'},
			{ value:'3'         , name:'102'},
			{ value:'4'         , name:'103'},
			{ value:'5'         , name:'201'}
		],

		//透光度
		skin_light_c = [
			{ value:'1'         , name:'B'},
			{ value:'2'         , name:'Y'},
			{ value:'3'         , name:'P'}
		];


	//先天膚質	下拉
	for(i=0 ; i<natural_c.length ; i++){
		$('select[name="NATURAL_C"]').append('<option value='+natural_c[i].value+'>'+natural_c[i].name+'</option');
	}

	//後天肌膚 下拉
	for(i=0 ; i<acquired_c.length ; i++){
		$('select[name="ACQUIRED_C"]').append('<option value='+acquired_c[i].value+'>'+acquired_c[i].name+'</option');
	}

	//彈力 下拉
	for(i=0 ; i<elasticity.length ; i++){
		$('select[name="ELASTICITY"]').append('<option value='+elasticity[i].value+'>'+elasticity[i].name+'</option');
	}

	//透明度 下拉
	for(i=0 ; i<transparency_c.length ; i++){
		$('select[name="TRANSPARENCY_C"]').append('<option value='+transparency_c[i].value+'>'+transparency_c[i].name+'</option');
	}

	//美肌等級 下拉
	for(i=0 ; i<skin_level.length ; i++){
		$('select[name="SKIN_LEVEL"]').append('<option value='+skin_level[i].value+'>'+skin_level[i].name+'</option');
	}

	//原膚色 下拉
	for(i=0 ; i<skin_color_c.length ; i++){
		$('select[name="SKIN_COLOR_C"]').append('<option value='+skin_color_c[i].value+'>'+skin_color_c[i].name+'</option');
	}

	//透光度 下拉
	for(i=0 ; i<skin_light_c.length ; i++){
		$('select[name="SKIN_LIGHT_C"]').append('<option value='+skin_light_c[i].value+'>'+skin_light_c[i].name+'</option');
	}
	
});