var links = document.querySelectorAll('a');

Array.prototype.forEach.call(links, function(el){
	el.onclick=function(e) {
		e.preventDefault();
		let href = this.getAttribute("href");
		ajax(href);
	}
});

function ajax(url) {
	let request = new XMLHttpRequest();
	request.open('GET', url, true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			let resp = request.responseText;
			console.log(resp);
		} else {
			// We reached our target server, but it returned an error

		}
	};

	request.onerror = function() {
		// There was a connection error of some sort
	};

	request.send();
}
