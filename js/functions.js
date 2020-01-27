

//     SCROLL
$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	var win = $(window).width();

	if (win > 575) {
		if (scroll >= 140) {
			$('#sticky-nav').css('transform', 'translateY(0)');
		} else {
			$('#sticky-nav').css('transform', 'translateY(-300px)');
		}
	} else {
		if (scroll >= 300) {
			$('#sticky-nav').css('background-color', '#f6f6f6');
			$('.schedule-btn').css({
				opacity: 1
			});
		} else {
			$('#sticky-nav').css('background-color', 'transparent');
			$('.schedule-btn').css({
				opacity: 0
			});
		}
	}
     


  });


//  	RESIZE
$(window).resize(function(){
	var scroll = $(window).scrollTop();
	var win = $(window).width();
	// console.log(win);

	if (win < 980) {
		$('.nav-link.schedule-btn').text('BOOK NOW');
	} else {
		$('.nav-link.schedule-btn').text('SCHEDULE YOUR MASSAGE');
	}

	if (win < 575) {
		$('#sticky-nav').css('transform', 'translateY(0)');
	} else {
		if (scroll >= 140) {
			$('#sticky-nav').css('transform', 'translateY(0)');
		} else {
			$('#sticky-nav').css('transform', 'translateY(-300px)');
		}
	}
	

});




	//    READY
$(function(){
	
	var scroll = $(window).scrollTop();
	var win = $(window).width();

	if (win < 980) {
		$('.nav-link.schedule-btn').text('BOOK NOW');
	} else {
		$('.nav-link.schedule-btn').text('SCHEDULE YOUR MASSAGE');
	}

	// if (win < 558) {
	// 	// $('#sticky-nav').css('translateY(0)');
	// } else {

	// }


	// Staff

	$('.michael-image').click(function(){
		if (!$(this).hasClass('active')) {
			$('.pic-row img, .text-row div').removeClass('active');
			$(this).addClass('active');
			$('.michael').addClass('active');
		}
	});
	$('.violet-image').click(function(){
		if (!$(this).hasClass('active')) {
			$('.pic-row img, .text-row div').removeClass('active');
			$(this).addClass('active');
			$('.violet').addClass('active');
		}
	});
	$('.chelsey-image').click(function(){
		if (!$(this).hasClass('active')) {
			$('.pic-row img, .text-row div').removeClass('active');
			$(this).addClass('active');
			$('.chelsey').addClass('active');
		}
	});

	$('.lang').click(function(){
		if($(this).hasClass('esp')) {
			$(this).text('Bilingual Booking Option!');
			$(this).removeClass('esp').addClass('eng');
			$('.lang-txt').text("Con su experiencia en el servicio de masajes, Michael se dedica especialmente a la prestación de masajes para que sus clientes logren una sensación de bienestar tanto física como mental, que les permita crear un equilibrio vital, desarrollar un mejor desempeño laboral y enfrentar de mejor manera el quehacer diario. Mike esta dedicado a ser un curador que usa su intuición y atención para ayudar a lograr sus metas.");
		} else {
			$(this).text('Se Habla Español!').removeClass('eng').addClass('esp');
			$('.lang-txt').text("The focus of my massage practice is on therapeutic bodywork with a highly relaxing quality within a holistic, mind-body-spirit perspective. My healing work varies greatly, intuitively drawing upon many different healing traditions to meet the specific conditions that arise. My practice centers around listening to your body's messages and you, because you are the expert of your own body. Although I am a total massage geek, I still feel that caring, listening, intuition and tuning into energy are my best tools as a healer. I look forward to getting to know you and the miraculous ecosystem of your unique body.")
		}
	});



});