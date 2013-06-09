  
var engine = $.sammy(function() {
	
	var $this = this;
	var routes = ['#/' + categories[0], '#/' + categories[1], '#/' + categories[2], '#/' + categories[3], '#/' + categories[4], '#/' + categories[5]];
		
	$this.use('Mustache', 'ms');
	$this.element_selector = '#portofolio';  

	$this.get('#/portofolio', function(context) {
	initFader();
	$('footer').show();
		context.app.swap('');
		var c = 0;
		while (c < portofolio.length){
			context.renderEach('templates/box.ms', [{link: routes[c], img: portofolio[c], title: categories[c]}]).appendTo(context.$element());
			c++;
		}	
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
});

function initFader(){
	if(!isMobile()){
		$('.fader').append(renderFader(fader));
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

function renderImages(context, f, images){
	toggleFaderAndFooter(true);
	context.app.swap('');
	context.$element().append('<h1>' + categories[f] +'</h1>');
	for(var i = 0; i < images.length; i++){
		context.renderEach('templates/image.ms', [{link: categories[f] + '/' + images[i]}]).appendTo(context.$element());	
	}
}

function renderFader(images){
	var result = '<div class="fader-inner">';
	for(var i = 0; i < images.length; i++){
		result += '<img src="img/slider/' + images[i] + '" alt="">';	
	}
	return result += '</div>';
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
