let duration = 800;

$(function(){
	$(document).on('click', 'a', function(e) {
		e.preventDefault();
		let href = this.getAttribute("href");
		$('main').fadeOut(duration, function() {
			$('main').load(href + ' main > *');
			$('main').fadeIn(duration + 800);
		})
	})
})
