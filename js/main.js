$(document).ready(function(){
	$('.boxgrid').hover(function(){
		$('.boxcaption', this).stop().animate({top:'200px'},{queue:false,duration:300});
	}, function() {
		$('.boxcaption', this).stop().animate({top:'300px'},{queue:false,duration:300});
	});
	$('footer .row').hover(function(){
		$('footer ul').slideDown();
		$("html, body").animate({ scrollTop: $(document).height() }, 1000);
	}, function() {
		$('footer ul').slideUp();
	});
	$('header nav span').hover(function(){
		$(this).next().slideDown();
	}, function() {});
	$('header nav').hover(function(){}, function() {
		$('header ul').slideUp();
	});
});
