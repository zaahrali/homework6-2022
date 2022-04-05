var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});

//play video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.currentTime);
	document.querySelector("#volume").innerHTML=video.volume *100 +"%"
});

//pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

//slow the video
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate *= .95;
	console.log("New video speed is " + video.playbackRate);
});

//speed up the video
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= .95;
	console.log("New speed is " + video.playbackRate)
});

//skip 15 seconds
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current location is " + video.currentTime)

	if (video.currentTime < video.duration - 15){
		video.currentTime += 15
	}

	else {
		video.currentTime = 0
		console.log("Starting at beginning")
	}

});

//mute video
document.querySelector("#mute").addEventListener("click", function() {

	if (video.muted){
		this.innerHTML = "Mute"
		video.muted = false
		console.log("Muted")
	}

	else{
		this.innerHTML = "Unmute"
		video.muted = true
		console.log("Unmuted")
	}

});

//volume slider
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing Volume")
	console.log(this.value)
	video.volume = this.value /100
	document.querySelector("#volume").innerHTML=video.volume *100 +"%"
});

//add oldSchool class
document.querySelector("#vintage").addEventListener
("click", function() {
	console.log("Adding class");
	video.classList.add("oldSchool")
});

//remove oldSchool class
document.querySelector("#orig").addEventListener
("click", function() {
	console.log("Removing class");
	video.classList.remove("oldSchool")
});
