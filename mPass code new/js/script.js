$(document).ready(function(){
	
	
	
$(".bymail").click( function() { 
	$(".contactchat, .parleravec,  , #choix a, .methodepai").fadeOut(300, function() {
			$(".formu, ").fadeIn("slow");
});
});

$(".bymailb").click( function() { 
	$(".contactchat, .parleravec,  .tel, #choix a, .faq, .methodepai, .bymail ").fadeOut(300, function() {
			$(".formu,  #choix, .mini, .form").fadeIn("slow");
});
});

$(".bytel").click( function() { 
	$("#choix, .contactchat,  .bytel, .methodepai, .aide p").fadeOut(300, function() {
			$(".tel, #text ").fadeIn("slow");
});
});


$(".bytelbis").click( function() { 
	$("#choix, .contactchat,  .bytel, .formu, .faq, .methodepai").fadeOut(300, function() {
			$(".tel, .parleravec, .mini, .form,  #text, #tel").fadeIn("slow");
});
});
$(".choisir").click( function() { 
	$(".formu, .parleravec,  , #choix a, #choix, .methodepai ,.choisir").fadeOut(300, function() {
			$(" .faq, .tout").fadeIn("slow");
});
});

$(".bychat").click( function() { 
	$(".formu, .parleravec,   #choix a, #choix, .form , .mini, .methodepai, #text, #tel").fadeOut(300, function() {
			$(", .faq, .tout, .contactchat, .minibis").fadeIn("slow");
			
});
});

 
    });




