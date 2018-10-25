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

	// Set focus
	document.getElementById("appPin").focus();

	// Handle PIN authentication
	$("#appPin").keyup(signIn);

	// Handle certificate type
	$(".with-gap").change(changeCertType);

	// Generate Certificate
	$("#generateCertificateButton").click(generateCertificate);

}

// Handle sign in
function signIn(){
	if(document.getElementById("appPin").value === "2772"){
		// Sign in is legal, do post-sign in stuff
		document.getElementById("signInCard").style.display = "none";
		document.getElementById("certgenCard").style.display = "block";
		document.getElementById("name").focus();
	}
}

// Handle UI changes based on certificate type
function changeCertType(){
	if(document.getElementById("participationCert").checked == true){
		document.getElementById("emailCertificate").style.display = "block";
		document.getElementById("generateCertificate").classList.remove("s6");
		document.getElementById("generateCertificate").classList.remove("offset-s3");
		document.getElementById("generateCertificate").classList.add("offset-s1");
		document.getElementById("generateCertificate").classList.add("s5");
	}
	else{
		document.getElementById("emailCertificate").style.display = "none";
		document.getElementById("generateCertificate").classList.remove("offset-s1");
		document.getElementById("generateCertificate").classList.remove("s5");
		document.getElementById("generateCertificate").classList.add("offset-s3");
		document.getElementById("generateCertificate").classList.add("s6");
	}
}

// Handle Certificate Generation
function generateCertificate(){
	if(document.getElementById("appreciationCert").checked==true) window.location.href = "generateACert.html#" + document.getElementById("name").value;
	else window.location.href = "generatePCert.html#" + document.getElementById("name").value;
}
