

//     PARALLAX
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('.jumbo-subtext').css({
      transform: 'translateX(-50%) translate(0px, -'+ scroll /2 +'%)'
    });
  });


$(function(){

	$('.social-media div').mouseenter(function(){
		$(this).find('.hidden-text').css({
			width: '200px'
		})
	}).mouseleave(function(){
		$(this).find('.hidden-text').css({
			width: 0
		})
	})



});