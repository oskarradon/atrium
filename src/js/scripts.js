// Use AJAX to load in content from links without changing pages
$(function(){
	$(document).on('click', 'a', function(e) {
		e.preventDefault();
		let href = this.getAttribute("href");
		console.log(href);
		$('main').fadeOut('slow', function() {
			$('main').load(href + ' main > *');
			console.log(href);
			$('main').fadeIn('slow');
		})
	})
})
