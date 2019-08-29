

//     PARALLAX
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('.jumbo-subtext').css({
      transform: 'translateX(-50%) translate(0px, -'+ scroll /2 +'%)'
	});
	
	// speed up scroll for favorites trio too?
  });


$(function(){

	$('nav.navbar').on('mouseenter', function(){
		$('nav.navbar, .social-media').addClass('fatnav');
		$('nav.navbar, .social-media').addClass('fatsocial');
	}).on('mouseleave', function(){
		$('nav.navbar, .social-media').removeClass('fatnav');
		$('nav.navbar, .social-media').removeClass('fatsocial');
	});
	



	// services

	// $('.custom-massage').addClass('active');

	$('.menu-list li').click(function(){
		var target = $(this).data('qstring');
		$('.menu-item').removeClass('active');
		$('.menu-deets').find('.' + target).addClass('active');
	});



	function reviewSliderTop() {
		for (var i=0; i<reviews.length;) {
			setTimeout(function(){
				$('.top-review .review-body').html(reviews[i])
				console.log(i)
			}, 2000)
			if(i === reviews.length){i=0} else {i++}
		}
	}

	function reviewSliderBottom() {
		for (var i=8; i<reviews.length; i++) {
			$('.bottom-review .review-body').html(reviews[i])
			setTimeout(function(){
			}, 2000)
			if(i === reviews.length){i=0} else {i++}
		}
	}

	reviewSliderTop()
	reviewSliderBottom()


	
	$('.review-body').html(reviews[14])


});




	// reviews
	var reviews = [
		"<p class='review-text'>My complete experience from booking to post massage was wonderful! Chelsey is kind and personable and so knowledgeable! I loved my 60 minute massage and was so pleased with my results afterwards. I will be booking again!</p><p class='review-author'>Whitney C. - 2018</p>", 
		
		"<p class='review-text'>I went for my first ever massage it was AMAZING! It was very clean and calming!</p><p class='review-author'>Janelle S. - 2018</p>",
		
		"<p class='review-text'>Chelsey is so good! Got a massage from her for my birthday && she did an amazing job!</p><p class='review-author'>Nikka L. - 2018</p>",
		
		"<p class='review-text'>The first massage I received was a 2-hour hot stone. The BEST stone massage I have ever received. She started the massage with a hot towel feet wrap, AMAZING, which set the bar for the massage to come. Her pressure throughout was perfect. She also performed some hip work, which let me move my legs into positions I haven't been able to attain in years. I feel revived and renewed</p><p class='review-author'>E.J. L. - 2018</p>",
		
		"<p class='review-text'>What a great experience! Chelsey is wonderful. My 50-minute massage with her will definitely be the highlight of my week. Very happy customer!</p><p class='review-author'>Claire S. - 2018</p>",
		
		"<p class='review-text'>I had the postnatal massage and it was amazing! Chelsey really took the time to get to know me and my needs before we got started. I will definitely be going back. I walked out of there feeling fantastic!</p><p class='review-author'>Lindsay R. - 2018</p>",
		
		"<p class='review-text'>Chelsey is an excellent massage therapist! Highly recommend Ideal Massage</p><p class='review-author'>Cassandra B. - 2018</p>",
		
		"<p class='review-text'>I've always had a great experience here, whether with hair or massage it has been beyond expectations. Chelsey was very attentive and addressed some issues in my hips, glutes, and lower back. Afterwards she coached me on stretching techniques and gave me a sample of pain relief cream. Really great service!</p><p class='review-author'>Anna S. - 2018</p>",
		
		"<p class='review-text'>I already have another appointment.</p><p class='review-author'>Sandy G. - 2018</p>",
		
		"<p class='review-text'>I was seriously in need of help with my lower back. Chelsey listened to me and took great care that I was comfortable. It felt nice that someone was not just giving me a massage, but really taking the time to listen and provide feedback about what my body was saying. Will definitely be coming back soon!</p><p class='review-author'>Pedro E. - 2018</p>",
		
		"<p class='review-text'>The most detailed and thorough massage you can imagine. Deep tissue with breathing techniques. Aromatherapy. Full body stretching. It's not just a massage, is full body care for muscles and joints. Chelsey is beyond knowledgeable with years of experience. Her home is welcoming and peaceful.</p><p class='review-author'>Tiffany H. - 2018</p>",
		
		"<p class='review-text'>Chelsey is awesome and made room for me when I tweaked my back. Thank you so much.</p><p class='review-author'>Heather M	. - 2018</p>",
		
		"<p class='review-text'>Highly recommend Chelsey at Ideal Massage. I went for help with serious shoulder/neck pain. She identified the best treatment and customized massage sessions. She's amazing!</p><p class='review-author'>Brittany W. - 2018</p>",
		
		"<p class='review-text'>Chelsey is amazing!! She is extremely professional and friendly. The environment is very relaxing</p><p class='review-author'>Marty P. - 2018</p>",
		
		"<p class='review-text'>I had Chelsey and she was so awesome. I am trying to get to her every week now! She really knows how to get rid of my soreness from working out. Thank you Chelsey.</p><p class='review-author'>Brook H. - 2018</p>",
		
		"<p class='review-text'>Amazing experience! Overall it was a wonderful massage and I felt great afterwards. Thank you Chelsey!!</p><p class='review-author'>Kateland C. - 2018</p>",
		
		"<p class='review-text'>I received the therapeutic massage and hot oil scalp treatment from Chelsey and it was amazing! I've never felt more relaxed. She was professional and courteous, as well as being skilled. Would definitely return!</p><p class='review-author'>Nicole W. - 2018</p>",
		
		"<p class='review-text'>I absolutely recommend Ideal Massage! The atmosphere created in this space is peaceful and relaxing, clean and professional. Chelsey is attentive and knowledgeable, finds the roots of discomfort and stress and works her magic to release it all! She offers a variety of options and add-ons, and does incredible work. Give yourself a treat and book with Chelsey!</p><p class='review-author'>Amber M. - 2018</p>",
	];
