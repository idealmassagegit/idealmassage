

//     PARALLAX
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('.jumbo-subtext').css({
      transform: 'translateX(-50%) translate(0px, -'+ scroll /2 +'%)'
    });
  });


$(function(){

	$('nav.navbar').on('mouseenter', function(){
		$('nav.navbar, .social-media').addClass('fatnav');
		$('nav.navbar, .social-media').addClass('fatsocial');
	}).on('mouseleave', function(){
		$('nav.navbar, .social-media').removeClass('fatnav');
		$('nav.navbar, .social-media').removeClass('fatsocial');
	});

	// setInterval(function(){
	// 	$('.nav-link.schedule-btn').css('color', '#EE6352');
	// }, 1000)
	// setInterval(function(){
	// 	$('.nav-link.schedule-btn').css('color', 'black');
	// }, 2000)



	// social media

	// $('.social-media div').mouseenter(function(){
	// 	$(this).find('.hidden-text').css({
	// 		width: '200px'
	// 	});
	// }).mouseleave(function(){
	// 	$(this).find('.hidden-text').css({
	// 		width: 0
	// 	})
	// });


	// services

	// $('.custom-massage').addClass('active');

	$('.menu-list li').click(function(){
		var target = $(this).data('qstring');
		$('.menu-item').removeClass('active');
		$('.menu-deets').find('.' + target).addClass('active');
	});


});