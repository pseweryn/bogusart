$(document).ready(function(){
	$('.cycle').cycle({
			random: 1,
			fit: 0,
			width: '300px'
		});
	$('.boxgrid').hover(function(){
		$('.boxcaption', this).stop().animate({top:'200px'},{queue:false,duration:300});
	}, function() {
		$('.boxcaption', this).stop().animate({top:'300px'},{queue:false,duration:300});
	});
});
