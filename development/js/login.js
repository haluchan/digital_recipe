var state=1, page = '';


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


function step(){
	switch(state){
		case 1:
			$('.border>div,.prev,.next').hide();
			$('.step_1,.login').fadeIn(300);
			break;

		case 2:
			$('.border>div,.login').hide();
			$('.step_2,.prev,.next').fadeIn(300);
			break;

		case 3:
			$('.border>div').hide();
			$('.step_3').fadeIn(300);
			break;

		case 4:
			$('.border>div').hide();
			$('.step_4').fadeIn(300);
			break;

		case 5:
			$('.border>div').hide();
			$('.step_5').fadeIn(300);
			break;

		default:

			$('.border>div,.prev,.next').hide();
			$('.step_1,.login').fadeIn(300);
            state=1;
	}
	console.log(state);
}

