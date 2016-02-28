module.exports = "<p>app</p>"

require(['./ternary.js'], function(ternary) {
	document.body.appendChild(ternary[0])
	console.log(ternary)
})