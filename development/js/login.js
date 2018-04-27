var state =1 , page = '';


$(document).ready(function(){

	$('.login').click(function(){

	});
		

	$('.next').click(function(){

	});

	$('.prev').click(function(){


	});

	$('.goto').click(function(){
		$(this).siblings().children().children().removeClass('active');
		$(this).children().children().addClass('active');
		page = $(this).attr('data');
		console.log(page);
	});

	$(document).on("input",'.date',function(){
	    if($(this).val().length>0){
	    $(this).addClass("full");
	}
	else{
	   $(this).removeClass("full");
	   }
	 });



});
