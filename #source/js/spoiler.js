$(document).ready(function() {
	$('.spoiler').click(function(event){
		$(this).toggleClass('active').next().slideToggle(800);
	})	
})

$(document).ready(function() {
	$('.spoiler2').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(800);
	})
})