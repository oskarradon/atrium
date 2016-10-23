let duration = 2000;

$(function(){
	$(document).on('click', 'a', function(e) {
		e.preventDefault();
		let href = this.getAttribute("href");
		$.ajax({url: href});
		if (window.location.pathname === href) {
			return;
		} else {
			$('main').fadeOut(duration, function() {
				$('main').load(href + ' main > *');
				$('main').fadeIn(duration);
			});
		}	
	});
});
