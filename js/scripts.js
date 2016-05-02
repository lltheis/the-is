// TWIITER
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


// WORK SECTION
$(document).ready(function(){
	for(var i = 0; i < works.length; ++i ) {
		$("#work").append("\
<<<<<<< HEAD
			<div class='col-xs-12 col-sm-4 col-md-3 col-lg-2 project'>\
=======
			<div class='col-xs-6 col-md-2 project'>\
>>>>>>> updated html & css for mobile
				<a target='_blank' href=" + works[i].URL + " class='work-img'>\
				<img class='img-responsive' src='" + works[i].pic + "'>\
				<span class='info'><p class='project-label'>Project:</p> " + works[i].title + "</span>\
				</a>\
			</div>\
	");
	};
});


// CLOSE NAV DROPDOWNS
$(document).ready(function() {
	$('.dropdown').dropit();
});


// STELLAR      
$('#contact-background').stellar();


// KEYUP
$(".message-box").on("keyup", function() {
	console.log("keyup happened");
	var comment = $(".message-box").val();
	var charCount = $(".message-box").val().length;
	console.log(charCount);
	$("#char-count").html(charCount);
	if(charCount > 50) {
		$("#char-count").css("color", "red");
	} else {
		$("#char-count").css("color", "black");
	};
});


// EVENT LISTENER SUBMIT BUTTON
$("#button").on("click", function(){
	var comment=$(".message-box").val();if(comment!="") {
		$("#visible-comment").html("Thank you for your message: '"+comment+"'<br>I will get back to you soon!");
		$("#visible-comment").css("color","black");
		$(".message-box").hide();
	} else {
		$(".message-box").css("border","2px solid red");
		$("#visible-comment").html("Please submit a message that is not empty!");
		$("#visible-comment").css("color","red");
	};
	return false;
});

// GOOGLE MAP
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.6807, lng: -114.3637},
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });
}

