$(document).ready(function() {
	const distanceToNextImage = -30; //must be negative
	let currentImageNumber = 1;

	//initialize the carousel controls
	$("#left").css('display', 'none');
	$("#right").css('display', 'inline');

	$("#right").click(function() {
		if (currentImageNumber >= 3) {
			// currentImageNumber = 1;	
			// $("#carousel-strip").css("left", distanceToNextImage*(currentImageNumber-1) + "vw");
			// rightMoves = 2;
			// leftMoves = 0;
			$("#right").css('display', 'none');
			$("#left").css('display', 'inline');
			return;
		}
		$("#right, #left").css('display', 'inline');
		currentImageNumber+=1;
		$("#carousel-strip").css("left", distanceToNextImage*(currentImageNumber-1) + "vw");
	})

	$("#left").click(function() {
		if (currentImageNumber <= 1) {
			// currentImageNumber = 3;	
			// $("#carousel-strip").css("left", distanceToNextImage*(currentImageNumber-1) + "vw");
			$("#left").css('display', 'none');
			$("#right").css('display', 'inline');
			return;
		}
		$("#right, #left").css('display', 'inline');
		currentImageNumber-=1;
		$("#carousel-strip").css("left", distanceToNextImage*(currentImageNumber-1) + "vw");
	})
});