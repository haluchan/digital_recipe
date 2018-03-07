/*var pageName = (window.location.pathname.split("/").pop() === '') ? 'index' : window.location.pathname.split("/").pop().split(".").shift();
$('body').attr('page', pageName);
*/

$(document).ready(function() {
	$('img').parent().css('font-size',0);

	var winW = window.screen.width,
	    winH = window.screen.height,
	    winw = $(window).width(),
	    winh = $(window).height();

    var pageName = (window.location.pathname.split("/").pop() === '') ? 'index' : window.location.pathname.split("/").pop().split(".").shift();


	
	$('#mo-size').text('螢幕尺寸：寬度'+winW+' px, 高度：'+winH+' px');
	$('#browser-size').text('Browser：'+winw+' px * '+winh+' px');




	//Menu	
	$('#menu .btn').click(function(){
		if($('#menu').hasClass('menu-open')){
			$('#menu').removeClass('menu-open');
			$('#menu').animate({'margin-left': "-200px"}, 300);
			$('#content').animate({'margin-right': "100px"}, 300);
		}else{
			$('#menu').addClass('menu-open');
			$('#menu').animate({'margin-left': "0px"}, 300);
			$('#content').animate({'margin-right': "0px"}, 300);
		}
	});


	//曾減圖片說明欄位
	var n=0, 
		num=10;	
		
	$(document).on("click touchstart",".new",function(){  
		
		if(n < (num-1)){
			$(this).removeClass('new').addClass('remove').text('-');
    		$('.note').append('<div><input type="text" placeholder="請填寫圖片說明"/><div class="new">+</div></div>');
    		n++;
    		if(n==(num-1)){
    			$(".note").children().children('.new').css('display','none');
    		}
    	}
  	});

  	$(document).on("click touchstart",".remove",function(){
  		$(this).parent().remove();
  		n--;
  		if(n==(num-2)){
    			$(".note").children().children('.new').css('display','inline-block');
    		}
  	});



  	//眉型選擇
  	$("select[name='brow']").change(function(){
  		$('.brow-dis img').attr('src','img/makeup/03/brow/a'+$(this).val()+'.png');
  	});


  	//眼彩
  	
  	$("select[name='eye']").change(function(){
  		$('.popmenu.eye .menu').hide();
  		$('.popmenu.eye .menu.'+$(this).val()).fadeIn(500);
  	});
	
	for( i=1 ; i<=26 ; i++ ){
		
		if(i<=6){
			data = 'b30'+i;
			bt_num = '0'+i;
			$('.b3 .list ul').append('<li data="'+data+'"><div><img src="img/makeup/03/eye_b3/'+data+'.png"></div><div class="bt_num">'+bt_num+'</div></li>');
		}else if(i>10 && i<=16 ){
			data = 'b3'+i;
			bt_num = i;
			$('.b3 .list ul').append('<li data="'+data+'"><div><img src="img/makeup/03/eye_b3/'+data+'.png"></div><div class="bt_num">'+bt_num+'</div></li>');
		}else if (i>20 && i<=26){
			data = 'b3'+i;
			bt_num = i;
			$('.b3 .list ul').append('<li data="'+data+'"><div><img src="img/makeup/03/eye_b3/'+data+'.png"></div><div class="bt_num">'+bt_num+'</div></li>');
		}
	}
	
	for( i=1 ; i<=4 ; i++ ){		
		
			data = 'b20'+i;
			bt_num = i;
			$('.b2 .list ul').append('<li data="'+data+'"><div><img src="img/makeup/03/eye_b2/'+data+'.png"></div><div class="bt_num">'+bt_num+'</div></li>');
		
	}

	$('.eye .list li').click(function(){
		doc=$(this).closest('.menu').attr('data');
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$(this).closest('.menu').find('.img img').attr('src','img/makeup/03/'+doc+'/eye-img-'+$(this).attr('data')+'.png');
	});
	
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


	//唇彩
	$("select[name='lips']").change(function(){
  		$('.popmenu.lips .menu').hide();
  		$('.popmenu.lips .menu.'+$(this).val()).fadeIn(500);
  	});

	var lips_a = ["NC04","NC06","NC07","NC08","NC10","NC11","NC12","NC13","NC14"];
	for(i=0 ; i<lips_a.length ; i++){
		$('.lips .menu.a ul').append('<li data="'+lips_a[i]+'"><div><img src="img/makeup/03/lips_a/'+lips_a[i]+'.png"></div><div class="bt_num">'+lips_a[i]+'</div></li>');
	}
	var lips_b = ["01","02","03","04","05","06"];
	for(i=0 ; i<lips_b.length ; i++){
		$('.lips .menu.b ul').append('<li data="'+lips_b[i]+'"><div><img src="img/makeup/03/lips_b/'+lips_b[i]+'.png"></div><div class="bt_num">'+lips_b[i]+'</div></li>');
	}
	var lips_c = ["C01","C02","C03","C04","C05","C06","C07","C08","C09","C10","S01","S02","S03","S04","S05","M01","M02","M03"];
	for(i=0 ; i<lips_c.length ; i++){
		$('.lips .menu.c ul').append('<li data="'+lips_c[i]+'"><div><img src="img/makeup/03/lips_c/'+lips_c[i]+'.png"></div><div class="bt_num">'+lips_c[i]+'</div></li>');
	}

	$('.lips .list li').click(function(){
		doc=$(this).closest('.menu').attr('data');
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$(this).closest('.menu').find('.img img').attr('src','img/makeup/03/'+doc+'/img/'+$(this).attr('data')+'.png');
	});



	//common
	$('.list li:first-child').addClass('active');

	$('.btn').click(function(){
		var menu = $(this).attr('data');
		$('.popmenu.'+menu).siblings('.popmenu').css('z-index','999').stop().fadeOut(200);
		$('.popmenu.'+menu).css('z-index','998').show();
	});

	$('.close').click(function(){
		$('.popmenu').fadeOut(200);
		$('.note').fadeIn(200);
	});

});
	


   

  
