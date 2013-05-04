  var engine = $.sammy(function() {
	
	var folders = ['illustrations', 'drawings', 'graphics', 'photo', 'painting', 'other'];
	var routes = ['#/' + folders[0], '#/' + folders[1], '#/' + folders[2], '#/' + folders[3], '#/' + folders[4], '#/' + folders[5]];
	this.use('Mustache', 'ms');
	this.element_selector = '#portofolio';  

	this.get('#/portofolio', function(context) {
	$('#myCarousel').fadeIn();
	$('footer').show();
		  context.app.swap('');
		  this.renderEach('templates/box.ms', [{link: routes[0], img:'illustr.jpg', title: 'Illustrations'}, 
											  {link: routes[1], img:'draw.jpg', title: 'Drawings'},
											  {link: routes[2], img:'gfx.jpg', title: 'Graphics'},
											  {link: routes[3], img:'photo2.jpg', title: 'Photography'},
											  {link: routes[4], img:'paint2.jpg', title: 'Painting'},
											  {link: routes[5], img:'XXX', title: 'Other'}])
											  .appendTo(context.$element());	
	  });  
  
  	this.get(routes[0], function(context) {
	$('#myCarousel').fadeOut();
	$('footer').show();
		  context.app.swap('');
		  context.$element().append('<h1>Illustrations</h1>');
		  this.renderEach('templates/image.ms', [{link: folders[0] + '/00clearcutfull.jpg'}, {link: folders[0] + '/00CoverFullCleaned.jpg'}, 
												{link: folders[0] + '/00PosterFullcleaned.jpg'}, {link: folders[0] + '/01atomictree.jpg'}, {link: folders[0] + '/01farwellSmaller.jpg'}, {link: folders[0] + '/01healingFire.jpg'},
												{link: folders[0] + '/01regrowthAndFrame.jpg'}, {link: folders[0] + '/chmurkosluz.jpg'}, {link: folders[0] + '/czachopismoBabcia.jpg'}, 
												{link: folders[0] + '/czachopismoPotworek.jpg'}, {link: folders[0] + '/dwiewiorki.jpg'}, {link: folders[0] + '/HHAAcopy.jpg'}, {link: folders[0] + '/horror2.jpg'}, 
												{link: folders[0] + '/img063.jpg'}, {link: folders[0] + '/img067.jpg'}, {link: folders[0] + '/krzakowykonkret.jpg'}, {link: folders[0] + '/Misio.jpg'}, 
												{link: folders[0] + '/N-AM_I_Ideas_and_Concepts.jpg'}, {link: folders[0] + '/N-AM_II_Theory_and_Practice.jpg'}, {link: folders[0] + '/N-AM_III_Methodology.jpg'}, 
												{link: folders[0] + '/Odkrywcy-AugustePiccard.jpg'}, {link: folders[0] + '/Odkrywcy-RichardBurton-forweb.jpg'}, {link: folders[0] + '/Odkrywcy-Statek.jpg'}, 
												{link: folders[0] + '/prapramiasto.jpg'}, {link: folders[0] + '/sharpmind.jpg'}, {link: folders[0] + '/stforki.jpg'}, {link: folders[0] + '/wsz.jpg'}, 
												{link: folders[0] + '/XVXhands.jpg'}])
												.appendTo(context.$element());		
	  });

  	this.get(routes[1], function(context) {
	$('#myCarousel').fadeOut();
	$('footer').show();
		  context.app.swap('');
		  context.$element().append('<h1>Drawings</h1>');
		  this.renderEach('templates/image.ms', [{link: folders[1] + '/IMG_6939.jpg'}, {link: folders[1] + '/IMG_6niou937.jpg'}, 
												{link: folders[1] + '/img038.jpg'}, {link: folders[1] + '/img040.jpg'}, {link: folders[1] + '/img042.jpg'}, {link: folders[1] + '/img083.jpg'},
												{link: folders[1] + '/img085.jpg'}, {link: folders[1] + '/IMG2_7009.jpg'}, {link: folders[1] + '/ink_sketch.jpg'}, 
												{link: folders[1] + '/Jess1.jpg'}, {link: folders[1] + '/Jess2.jpg'}, {link: folders[1] + '/Jess3.jpg'}, {link: folders[1] + '/judoSitting.jpg'}, 
												{link: folders[1] + '/sittingSquatter.jpg'}, {link: folders[1] + '/sketchJudo.jpg'}, {link: folders[1] + '/squattingSquatter.jpg'}, {link: folders[1] + '/szkicforweb.jpg'}, 
												{link: folders[1] + '/Untitled_Panorama1.jpg'}, {link: folders[1] + '/wrrr.jpg'}])
												.appendTo(context.$element());		
	  });
	  
  	this.get(routes[2], function(context) {
	$('#myCarousel').fadeOut();
	$('footer').show();
		  context.app.swap('');
		  context.$element().append('<h1>Graphics</h1>');
		  this.renderEach('templates/image.ms', [{link: folders[2] + '/06.jpg'}, {link: folders[2] + '/autoportret.jpg'}, 
												{link: folders[2] + '/budzaSie.jpg'}, {link: folders[2] + '/Dyplom1.jpg'}, {link: folders[2] + '/Dyplom2.jpg'}, {link: folders[2] + '/Dyplom3.jpg'},
												{link: folders[2] + '/Dyplom4.jpg'}, {link: folders[2] + '/Dyplom5.jpg'}, {link: folders[2] + '/Dyplom6.jpg'}, 
												{link: folders[2] + '/kloszard.jpg'}, {link: folders[2] + '/LinorytPostPlener.jpg'}, {link: folders[2] + '/newspaperscream.jpg'}, {link: folders[2] + '/Reqiem.jpg'}, 
												{link: folders[2] + '/testing1.jpg'}, {link: folders[2] + '/testing3.jpg'}, {link: folders[2] + '/testing8.jpg'}, {link: folders[2] + '/testing9.jpg'}])
												.appendTo(context.$element());		
	  });
	  
  	this.get(routes[3], function(context) {
	$('#myCarousel').fadeOut();
	$('footer').show();
		  context.app.swap('');
		  context.$element().append('<h1>Photography</h1>');
		  this.renderEach('templates/image.ms', [{link: folders[3] + '/105_0592.JPG'}, {link: folders[3] + '/DSC02263.JPG'}, 
												{link: folders[3] + '/DSC02418.JPG'}, {link: folders[3] + '/DSC03009.JPG'}, {link: folders[3] + '/DSC03032.JPG'}, {link: folders[3] + '/DSC05579.JPG'},
												{link: folders[3] + '/foto010.jpg'}, {link: folders[3] + '/foto022.jpg'}, {link: folders[3] + '/foto048.jpg'}, 
												{link: folders[3] + '/foto070.jpg'}, {link: folders[3] + '/foto071.jpg'}, {link: folders[3] + '/foto119a.jpg'}, {link: folders[3] + '/image005.jpg'}, 
												{link: folders[3] + '/image023.jpg'}, {link: folders[3] + '/IMG_0367.JPG'}, {link: folders[3] + '/img370a.jpg'}, {link: folders[3] + '/img465.jpg'}, 
												{link: folders[3] + '/img503.jpg'}, {link: folders[3] + '/img504.jpg'}, {link: folders[3] + '/pix002.jpg'}, 
												{link: folders[3] + '/random096.jpg'}, {link: folders[3] + '/random099.jpg'}, {link: folders[3] + '/random207.jpg'}, 
												{link: folders[3] + '/SN8507102.JPG'}, {link: folders[3] + '/szaruga.jpg'}])
												.appendTo(context.$element());		
	  });
	  
	this.get(routes[4], function(context) {
	$('#myCarousel').fadeOut();
	$('footer').show();
		  context.app.swap('');
		  context.$element().append('<h1>Painting</h1>');
		  this.renderEach('templates/image.ms', [{link: folders[4] + '/20.jpg'}, {link: folders[4] + '/21.jpg'}, {link: folders[4] + '/chata.jpg'}, {link: folders[4] + '/domek1.jpg'}, {link: folders[4] + '/karyn.jpg'}])
		  .appendTo(context.$element());		
	  });
	  
	this.get(routes[5], function(context) {
	$('#myCarousel').fadeOut();
	$('footer').show();
		  context.app.swap('');
		  context.$element().append('<h1>Other</h1>');
		  this.renderEach('templates/image.ms', [{link: folders[5] + '/poster_smaller.jpg'}, {link: folders[5] + '/vasXe_jotpeg.jpg'}])
		  .appendTo(context.$element());		
	  });
	  
	this.get('#/about', function(context) {
	$('#myCarousel').fadeOut();
	$('footer').hide();
		  context.app.swap('');
		  this.render('templates/about.ms')
		  .appendTo(context.$element());		  
	  });   	  
});


function initHoverBoxes(){
	$(document).on({
		mouseenter: function() {
			$('.boxcaption', this).stop().animate({top:'200px'},{queue:false,duration:300});
		},
		mouseleave: function() {
			$('.boxcaption', this).stop().animate({top:'300px'},{queue:false,duration:300});
		},
	}, '.boxgrid');
}

function initSlider(){
	if($(document.documentElement).hasClass('no-touch')){
		$('#myCarousel').carousel();
		//$('.carousel-control').css('display', 'none');
	}
	else{ 
		$('#myCarousel').carousel();
	} 
}

$(document).ready(function(){
	engine.run('#/portofolio');	
	initSlider();
	//initHoverBoxes();
});
