function getSVG(tag) {
	var icon = {
		src: tag.getAttribute('src'),
		classes: tag.getAttribute('class')
	}

	function loadSVG() {
		tag.innerHTML = this.responseText
		var svg = tag.querySelector('svg')
		svg.setAttribute('class', svg.getAttribute('class') + ' ' + tag.getAttribute('class'))
		tag.removeAttribute('class')
	}

	var oReq = new XMLHttpRequest()
	oReq.addEventListener('load', loadSVG)
	oReq.open('GET', icon.src)
	oReq.send()
}

function ezSVG() {
	var tags = document.querySelectorAll('ez-svg'), i

	for (i = 0; i < tags.length; ++i) {
		if (!tags[i].firstChild) getSVG(tags[i])
	}
}
