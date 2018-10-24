window.onload = function(){

	// Register a Service Worker
//	if('serviceWorker' in navigator) {
//	  navigator.serviceWorker
//	           .register('sw.js')
//	           .then(function() { console.log("%cService Worker Registered!", "background:#222222; color:#BADA55;"); });
//	}

	// Load Header
	$("#header").load("header.html");

	// Load Footer
	$("#footer").load("footer.html");

}
