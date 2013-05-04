  var engine = $.sammy(function() {

  this.use('Mustache', 'ms');
  this.element_selector = '#sammy';  
  
  this.get('#/sammy', function(context) {
	      this.title = "mustache";
		  this.link = "sepia/se-1.jpeg";
		  context.app.swap('');
		  context.$element().append('<h1>Sammy</h1>'			
			+ '<div class="item column grid_4"><a href="img/sepia/se-1.jpeg" rel="lightbox[images]" title="my caption"><img class="center" src="img/sepia/th_se-1.jpg"></a></div>'
			+ '<div class="item column grid_4"><a href="img/sepia/se-2.jpeg" rel="lightbox[images]" title="another image"><img class="center" src="img/sepia/th_se-2.jpg"></a></div>'
			+ '<div class="item column grid_4"><a href="img/sepia/se-3.jpeg" rel="lightbox[images]" title="some text"><img class="center" src="img/sepia/th_se-3.jpg"></a></div>'
			+ '<div class="item column grid_4"><a href="img/sepia/se-4.jpeg" rel="lightbox[images]" title="my caption"><img class="center" src="img/sepia/th_se-4.jpg"></a></div>'
			+ '<div class="item column grid_4"><a href="img/sepia/se-5.jpeg" rel="lightbox[images]" title="another image"><img class="center" src="img/sepia/th_se-5.jpg"></a></div>'
			+ '<div class="item column grid_4"><a href="img/sepia/se-6.jpeg" rel="lightbox[images]" title="some text"><img class="center" src="img/sepia/th_se-6.jpg"></a></div>');
			//this.partial('templates.ms')			
	  });        
});



function initHoverNav(){
	$('header nav span').hover(function(){
		$(this).next().fadeIn();
	}, function() {});
	$('header nav').hover(function(){}, function() {
		$('header ul').fadeOut();
	});
}

function initHoverBoxes(){
	$('.boxgrid').hover(function(){
		$('.boxcaption', this).stop().animate({top:'200px'},{queue:false,duration:300});
	}, function() {
		$('.boxcaption', this).stop().animate({top:'300px'},{queue:false,duration:300});
	});
}

function initSlider(){
 $('#myCarousel').carousel();
 //$('.item.active').cycle({ speed: 5000});
}

$(document).ready(function(){
	engine.run();	
	initSlider();
	initHoverNav();
	initHoverBoxes();
});
