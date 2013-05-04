$(document).ready(function(){
	$('.boxgrid.slidedown').hover(function(){
		$(".cover", this).stop().animate({top:'200px'},{queue:false,duration:300});
	}, function() {
		$(".cover", this).stop().animate({top:'300px'},{queue:false,duration:300});
	});
});
