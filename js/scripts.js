// TWIITER
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


// WORK SECTION
$(document).ready(function(){
	for(var i = 0; i < works.length; ++i ) {
		$("#work").append("\
<<<<<<< HEAD
			<div class='col-xs-12 col-sm-4 col-md-3 col-lg-2 project work-img'>\
				<div class='work-img'>\
=======
<<<<<<< HEAD
			<div class='col-xs-12 col-sm-4 col-md-3 col-lg-2 project'>\
=======
			<div class='col-xs-6 col-md-2 project'>\
>>>>>>> updated html & css for mobile
				<a target='_blank' href=" + works[i].URL + " class='work-img'>\
>>>>>>> updated html & css for mobile
				<img class='img-responsive' src='" + works[i].pic + "'>\
				<span class='info'><p class='project-label'>Project:</p> " + works[i].title + "</span>\
				</div>\
			</div>\
	");
		$("#work a").click(function(event) {
			event.preventDefault(); 
			//BUTTON HTML TO TRIGGER MODAL
			<div class='lg-col-2 col-md-3 col-sm-4 col-xs-6 project'><a href='#myModal' role='button' class='btn btn-link' data-toggle='modal'><img src='img/lupine.jpg' alt='Project1' class='img-responsive'></a>
						</div>
				// MODAL HTML
						<div id='myModal' class='modal fade'>
						    <div class='modal-dialog'>
						        <div class='modal-content'>
						            <div class='modal-header'>
						                <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>
						                <h4 class='modal-title'>" + works[i].title + "</h4>
						            </div>
						            <div class='modal-body'>
						                <p>" + works[i].desc + "</p>
						            </div>
						        </div>
						    </div>
						</div>
			});
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

