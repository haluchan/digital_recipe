$(document).ready(function(){
	var status = [
			{id:'dry'	, name:'乾燥' , option :[
				{value:'0'  , name:'請選取'},
				{value:'55' , name:'補充水分,深層鎖水造水'},
				{value:'56' , name:'給予肌膚滋潤,防止養分流失'}]
			},

			{id:'oil'	, name:'出油' , option :[
				{value:'0'  , name:'請選取'},
				{value:'57' , name:'控油,抑制多餘油分'}]
			},

			{id:'pores'	, name:'毛孔明顯' , option :[
				{value:'0'  , name:'請選取'},
				{value:'58' , name:'收斂毛孔'},
				{value:'59' , name:'抑制多餘油分'}]
			},

			{id:'acen'	, name:'面皰' , option :[
				{value:'0'  , name:'請選取'},
				{value:'60' , name:'消炎治痘'}]
			},


			{id:'dull'	, name:'暗沈' , option :[
				{value:'0'  , name:'請選取'},
				{value:'61' , name:'排出,抑制黑色素'},
				{value:'62' , name:'促進血液循環順暢'}]
			},


			{id:'cb'	, name:'色澤不均' , option:[]
			},

			{id:'spots'	, name:'黑/雀斑' , option :[
				{value:'0'  , name:'請選取'},
				{value:'63' , name:'排出,抑制黑色素'}]
			},


			{id:'dark_circles'	, name:'黑眼圈' , option :[
				{value:'0'  , name:'請選取'},
				{value:'64' , name:'促進眼週血液循環順暢'}]
			},


			{id:'te'	, name:'張力/彈力' , option :[]
			},

			{id:'wrinkle'	, name:'細紋/鬆弛' , option :[
				{value:'0'  , name:'請選取'},
				{value:'65' , name:'活絡真皮細胞活力'},
				{value:'66' , name:'促進膠原,彈力蛋白纖維生成'}]
			},


			{id:'sensitive'	, name:'敏感' , option :[
				{value:'0'  , name:'請選取'},
				{value:'67' , name:'提升肌膚防禦力,創造健全皮脂膜'}]
			},


			{id:'eye_edema'	, name:'眼皮浮腫'	},

			{id:'eye_dull'	, name:'眼部暗沈'	},

			{id:'lip_dull'	, name:'唇部暗沈'	},

			{id:'mellow'	, name:'下顎線圓潤'	},

			{id:'dimension'	, name:'臉部缺乏立體感'	}
		];
	
		

	for(i=0 ; i<status.length-5 ; i++){

			$('.status').append('<li><input type="checkbox" id="'+i+'" class = "LDemand" name="'+status[i].id+'"><label for="'+i+'"><span></span>'+status[i].name+'</label></li>');

		console.log(typeof(status[i].option));
	} 	

	for(i=status.length-5 ; i<status.length ; i++){
		$('.r_status').append('<li><input type="checkbox" id="'+i+'" name="'+status[i].id+'"><label for="'+i+'"><span></span>'+status[i].name+'</label></li>');
	}


});

				
				
		
				
			
				
			
				
			
				

		















