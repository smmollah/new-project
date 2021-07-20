
(function ($) {
	"use strict";
	const gradient = document.querySelector(".gradient");

	function onMouseMove(event) {
	gradient.style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, rgba(70,120,70,.7) 0, rgba(0,0,0,.9) 70%)';
	}
	document.addEventListener("mousemove", onMouseMove);
})(jQuery);



  