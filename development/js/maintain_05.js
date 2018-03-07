$(document).ready(function(){
	var special =	[
				{id:'horny_', name:'角層' , option :[
					{value:'0'  , name:'請選取'},
					{value:'14' , name:'去除老廢角質'},
					{value:'15' , name:'提升角層濕潤度'},
					{value:'16' , name:'其他'}]
				},
				{id:'drying_' ,name:'乾燥' , option :[
					{value:'0'  , name:'請選取'},
					{value:'17' , name:'補充水分,深層鎖水造水'},
					{value:'18' , name:'給予肌膚滋潤,防止養分流失'},
					{value:'19' , name:'其他'}]
				},

				{id:'whitening_' , name:'美白' , option : [
					{value:'0'  , name:'請選取'},
					{value:'20' , name:'排出,抑制黑色素'},
					{value:'21' , name:'改善真皮層「黃色化」'},
					{value:'22' , name:'促進血液循環正常,提高血液含氧量'},
					{value:'23' , name:'其他'}]
				},

				{id:'elasticity_' , name:'張力/彈力' , option : [
					{value:'0'  , name:'請選取'},
					{value:'24' , name:'活絡真皮細胞活力'},
					{value:'25' , name:'促進膠原,彈力蛋白纖維生成'},
					{value:'26' , name:'其他'}]
				},

				{id:'uv_' ,name:'紫外線' , option : [
					{value:'0'  , name:'請選取'},
					{value:'27' , name:'白天做好防護'},
					{value:'28' , name:'其他'}]
				},

				{id:'other_' ,name:'其他困擾' , option : [
					{value:'0'  , name:'請選取'},
					{value:'29' , name:'控油,抑制多餘油分'},
					{value:'30' , name:'收斂毛孔'},
					{value:'31' , name:'去除粉刺'},
					{value:'32' , name:'消炎治痘'},
					{value:'33' , name:'促進血液循環順暢'},
					{value:'34' , name:'黑眼圈:促進眼週血液循環順暢'},
					{value:'35' , name:'敏感:提升肌膚防禦力'},
					{value:'36' , name:'其他'}]
				},
		];
	
		

	for(i=0 ; i<special.length ; i++){
		
		$('.special').append('<li><input type="checkbox" id="'+i+'" data-view="0"><label for="'+i+'"><span></span>'+special[i].name+'保養</label><div class="sub"><select id="'+special[i].id+'c" name="'+special[i].name+'內容"></select><input type="text" id="'+special[i].id+'t" name="'+special[i].name+'文字" placeholder="請輸入備註" class="other" maxlength="15"></sub></li>');

		for(s=0 ; s<special[i].option.length ; s++){
			$('#'+special[i].id+'c').append('<option value="'+special[i].option[s].value+'">'+special[i].option[s].name+'</option>');
		}
	} 	
	

	$(document).on('click','label',function(){
		if($(this).siblings('input[type="checkbox"]').prop('checked')){
			$(this).siblings('.sub').fadeOut(500);
			
		}else{
			$(this).siblings('.sub').fadeIn(500);
			console.log($(this).siblings('.sub').children('select').find(":selected").text()+','+$(this).siblings('.sub').children('select').val());
		}
	});


	$(document).on('change','select',function(){
		if($(this).find(":selected").text() == '其他'){
			$(this).siblings('input[type="text"]').fadeIn(500);
		}else{
			$(this).siblings('input[type="text"]').fadeOut(500);
		}
		console.log($(this).find(":selected").text()+','+$(this).val());
	});

});

				
				
		
				
			
				
			
				
			
				

		















