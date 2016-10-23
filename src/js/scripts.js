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
			let replacement = grabTag(resp, 'main');
			replacer('main', 4000, replacement);
		}
	};
	request.send();
}

// get main div from AJAX response
function grabTag (response, tag) {
	let el = document.createElement('html'); // creates dummy DOM element
	el.innerHTML = response;
	// console.log(el.getElementsByTagName(tag)[0]);
	return el.getElementsByTagName(tag)[0];
}

	
function replacer(tagName, dur, el) {
	// fade out current main div
	anime({
		targets: tagName,
		opacity: 0,
		duration: dur
	});
	setTimeout(function(){ 
		// replace main div content
		let body = document.getElementsByTagName('body')[0];
		let tag = document.getElementsByTagName(tagName)[0];
		tag.style.opacity = 0;
		body.replaceChild(el, tag);
	}, dur);

	// fade in 
		// anime({
		// 	targets: tagName,
		// 	opacity: 1,
		// 	duration: dur,
		// 	delay: dur * 2
		// });
	
}
