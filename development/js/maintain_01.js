$(document).ready(function(){
	var	list = [
			{ id:'dry'           , name:'乾燥'},
			{ id:'oil'           , name:'出油'},
			{ id:'pores'         , name:'毛孔粗大'},
			{ id: 'acen'         , name:'面皰'},
			{ id: 'dull'         , name:'暗沉'},
			{ id: 'spots'        , name:'色澤不均'},
			{ id: 'cb'           , name:'黑·雀斑'},
			{ id: 'dark_circles' , name:'黑眼圈'},
			{ id: 'te'           , name:'張力·彈力'},
			{ id: 'wrinkle'      , name:'細紋·鬆弛'},
			{ id: 'sensitive'    , name:'敏感'}
		];

		
	for(i=0 ; i<list.length ; i++){
		$('.maintain .L ul').append('<li><input type="checkbox" value="0" id="'+list[i].id+'"><label for="'+list[i].id+'"><span></span>'+list[i].name+'</label></li>');
	}
	
});