// BOOTSTRAP MODALS
$( document ).ready(function() {
    $('#myModal').on('hidden.bs.modal', '.modal', function () {
          $(this).removeData('bs.modal');
    });
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

