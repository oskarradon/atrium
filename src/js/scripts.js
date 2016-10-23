// Use AJAX to load in content from links without changing pages

$('a').click(function(e){
	e.preventDefault();
	let href = this.getAttribute("href");
	$('main').fadeOut('slow', function(href) {
		console.log(href);
		$('main').load(href + ' main > *');
		$('main').fadeIn('slow');
	})
})
