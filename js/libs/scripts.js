$(document).ready(function() {

	particlesJS.load('particles-js', '/js/libs/particles.json');

	$(".count-down").ccountdown(2015,9,20,'9:00');

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInDown');
	}, {
		offset: '90%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});

	/***************** Fancybox ******************/

	$(".youtube-media").on("click", function(e) {
		var jWindow = $(window).width();
		if (jWindow <= 768) {
			return;
		}
		$.fancybox({
			href: this.href,
			padding: 4,
			type: "iframe",
			'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		});
		return false;
	});

});

$(document).ready(function() {
	$("a.single_image").fancybox({
		padding: 4,
	});
});

/***************** Smooth Scrolling ******************/

$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 2000);
			return false;
		}
	}
});
