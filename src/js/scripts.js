// Use AJAX to load in content from links without changing pages
$(function(){
	$('a').click(function(e){
		// e.preventDefault();
		let href = this.getAttribute("href");
		$('main').fadeOut('slow', function() {
			$('main').load(href + ' main > *');
			$('main').fadeIn('slow');
		})
		return false;
	})
})
