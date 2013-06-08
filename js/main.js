  
var engine = $.sammy(function() {
	
	var $this = this;
	var folders = ['illustrations', 'drawings', 'graphics', 'photos', 'paintings', 'other'];
	var routes = ['#/' + folders[0], '#/' + folders[1], '#/' + folders[2], '#/' + folders[3], '#/' + folders[4], '#/' + folders[5]];
	
	var illustrations = ['/00clearcutfull.jpg', '/00CoverFullCleaned.jpg', '/00PosterFullcleaned.jpg', '/01atomictree.jpg', '/01farwellSmaller.jpg', '/01healingFire.jpg', '/01regrowthAndFrame.jpg', '/chmurkosluz.jpg', '/czachopismoBabcia.jpg', '/czachopismoPotworek.jpg', '/dwiewiorki.jpg', '/HHAAcopy.jpg', '/horror2.jpg', '/img063.jpg', '/img067.jpg', '/krzakowykonkret.jpg', '/Misio.jpg', '/N-AM_I_Ideas_and_Concepts.jpg', '/N-AM_II_Theory_and_Practice.jpg', '/N-AM_III_Methodology.jpg', '/Odkrywcy-AugustePiccard.jpg', '/Odkrywcy-RichardBurton-forweb.jpg', '/Odkrywcy-Statek.jpg', '/prapramiasto.jpg', '/sharpmind.jpg', '/stforki.jpg', '/wsz.jpg', '/XVXhands.jpg'];
	var drawings = ['/IMG2_7009.jpg', '/ink_sketch.jpg', '/img040.jpg', '/sittingSquatter.jpg', '/wrrr.jpg', '/img083.jpg', '/Jess1.jpg', '/Jess2.jpg', '/Jess3.jpg', '/squattingSquatter.jpg', '/img042.jpg', '/judoSitting.jpg', '/sketchJudo.jpg', '/Untitled_Panorama1.jpg', '/szkicforweb.jpg', '/img038.jpg', '/IMG_6niou937.jpg', '/IMG_6939.jpg'];
	var graphics = ['/Dyplom1.jpg', '/Dyplom2.jpg', '/Dyplom3.jpg', '/Dyplom4.jpg', '/Dyplom5.jpg', '/Dyplom6.jpg', '/LinorytPostPlener.jpg', '/Reqiem.jpg', '/06.jpg', '/autoportret.jpg', '/newspaperscream.jpg', '/kloszard.jpg', '/budzaSie.jpg', '/testing8.jpg', '/testing9.jpg', '/testing3.jpg'];
	var photos = ['/image023.jpg', '/img503.jpg', '/img504.jpg', '/random096.jpg', '/random099.jpg', '/image005.jpg', '/DSC05579.JPG', '/DSC02263.JPG', '/105_0592.JPG', '/DSC03032.JPG', '/DSC02418.JPG', '/foto119a.jpg', '/DSC03009.JPG', '/foto010.jpg', '/foto022.jpg', '/img370a.jpg', '/img465.jpg', '/pix002.jpg', '/random207.jpg', '/foto071.jpg', '/foto070.jpg', '/foto048.jpg', '/IMG_0367.JPG', '/SN8507102.JPG', '/szaruga.jpg'];
	var paintings = ['/20.jpg', '/21.jpg', '/chata.jpg', '/domek1.jpg', '/karyn.jpg'];
	var other = ['/poster_smaller.jpg', '/vasXe_jotpeg.jpg'];
	
	$this.use('Mustache', 'ms');
	$this.element_selector = '#portofolio';  

	$this.get('#/portofolio', function(context) {
	initFader();
	$('footer').show();
		  context.app.swap('');
		  context.renderEach('templates/box.ms', [{link: routes[0], img:'illustr.jpg', title: folders[0]}, 
											  {link: routes[1], img:'draw.jpg', title: folders[1]},
											  {link: routes[2], img:'gfx.jpg', title: folders[2]},
											  {link: routes[3], img:'photo2.jpg', title: folders[3]},
											  {link: routes[4], img:'paint2.jpg', title: folders[4]},
											  {link: routes[5], img:'other.jpg', title: folders[5]}])
											  .appendTo(context.$element());	
	  });  
  
  	$this.get(routes[0], function(context) {
		renderImages(context, 0, illustrations);	
	  });

  	$this.get(routes[1], function(context) {
		renderImages(context, 1, drawings);		
	  });
	  
  	$this.get(routes[2], function(context) {
		renderImages(context, 2, graphics);	
	  });
	  
  	$this.get(routes[3], function(context) {
		renderImages(context, 3, photos);				  		
	  });
	  
	$this.get(routes[4], function(context) {
		renderImages(context, 4, paintings);		
	  });
	  
	$this.get(routes[5], function(context) {
		renderImages(context, 5, other);
	  });
	  
	$this.get('#/about', function(context) {
		toggleFaderAndFooter();
		context.app.swap('');
		context.render('templates/about.ms').appendTo(context.$element());		  
	  });
		  
	function renderImages(context, f, images){
		toggleFaderAndFooter(true);
		context.app.swap('');
		context.$element().append('<h1>' + folders[f] +'</h1>');
		for(var i = 0; i < images.length; i++){
			context.renderEach('templates/image.ms', [{link: folders[f] + images[i]}]).appendTo(context.$element());	
		}
	}	  
});

function initFader(){
	if(!isMobile()){
		$('.fader').append('<div class="fader-inner"><img src="img/slider/1-clearcutfull.jpg" alt=""><img src="img/slider/Cover-Full-JPG-cleaned.jpg" alt=""><img src="img/slider/farwell-smaller.jpg" alt=""><img src="img/slider/ff-Poster-Full-cleaned.jpg" alt=""><img src="img/slider/k-N-AM-III-RGBb-cover.jpg" alt=""><img src="img/slider/n-krzakowykonkret.jpg" alt=""><img src="img/slider/regrowth.jpg" alt=""><img src="img/slider/Reqiem.jpg" alt=""><img src="img/slider/sharpmindXlarge.jpg" alt=""><img src="img/slider/stokenewington9.jpg" alt=""></div>');
		$('.fader-inner').innerfade({
			speed: 3000,
			timeout: 5500,
			containerheight: 500,
			type: 'random'
		  });
	}
}

function isMobile(){
	return document.body.clientWidth <= 640;
}

function toggleFaderAndFooter(showFooter){
	$('.fader-inner').remove();
	if(showFooter){
		$('footer').show();
	}
	else {
		$('footer').hide();
	}
}

$(function() {
	engine.run('#/portofolio');
}); 
