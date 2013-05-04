$(document).ready(function(){
	$('.boxgrid').hover(function(){
		$('.boxcaption', this).stop().animate({top:'200px'},{queue:false,duration:300});
	}, function() {
		$('.boxcaption', this).stop().animate({top:'300px'},{queue:false,duration:300});
	});
});
