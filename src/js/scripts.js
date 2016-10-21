// Use AJAX to load in content from links without changing pages

let links = document.querySelectorAll('a');

// Prevent links from opening pages and get the URL they point to
Array.prototype.forEach.call(links, function(el){
	el.onclick=function(e) {
		e.preventDefault();
		let href = this.getAttribute("href");
		ajax(href);
	}
});

// Make an AJAX call to that URL
function ajax(url) {
	let request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			let resp = request.responseText;
			console.log(typeof(resp));
		}
	};
	request.send();
}

// fade out current main div
// clear main div content
// get main div from response
function grabTag (response, tag) {
	// create dummy DOM element
	let el = document.createElement('html');
	el.innerHTML = response;
	el.getElementsByTagName(tag)[1];
}
// append to main
// fade in 