$(document).ready(function(){
	var list_outside = [
			{ id:'air_dry'  , name:'空氣乾燥'},
			{ id:'dust'     , name:'灰塵花粉'},
			{ id:'air'      , name:'空氣污染'},
			{ id: 'uv_lux'  , name:'紫外線'}			
		],

		list_inside = [
			{ id:'age'		 , name:'增齡'},
			{ id:'food'		 , name:'飲食不正常'},
			{ id:'sleep_l'	 , name:'疲勞/睡眠不足'},
			{ id:'pressure'	 , name:'壓力'}
		];

		
	for(i=0 ; i<list_outside.length ; i++){
		$('.outside').append('<li><input type="checkbox" id="'+list_outside[i].id+'"><label for="'+list_outside[i].id+'"><span></span>'+list_outside[i].name+'</label></li>');
	}

	for(i=0 ; i<list_inside.length ; i++){
		$('.inside').append('<li><input type="checkbox" id="'+list_inside[i].id+'"><label for="'+list_inside[i].id+'"><span></span>'+list_inside[i].name+'</label></li>');
	}


	
	
});










