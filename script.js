const overlay = document.getElementById("overlay");
const declineButton = document.getElementById("decline-button");
const acceptButton = document.getElementById("accept-button");
const video = document.querySelector(".video#video");

video.addEventListener("pause", function (event) {
  event.preventDefault();
  video.play();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" || event.keyCode === 27) {
    event.preventDefault();
    enterFullScreen();
  }
});

document.addEventListener("fullscreenchange", handleFullScreenChange);
document.addEventListener("mozfullscreenchange", handleFullScreenChange);
document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
document.addEventListener("msfullscreenchange", handleFullScreenChange);

function isFullScreen() {
  return (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  );
}

function handleFullScreenChange() {
  if (isFullScreen()) {
    video.classList.add("fullscreen");
  } else {
    video.classList.remove("fullscreen");
    video.play();
  }
}

function enterFullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}

function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function acceptButtonClick(event) {
  event.preventDefault();

  video
    .play()
    .then(() => {
      enterFullScreen();
    })
    .catch((error) => {
      console.error("Video play error:", error);
    });

  setTimeout(() => {
    console.log("Redirecting...");
    window.location.href = "/";
  }, 4000);
}

function declineButtonClick(event) {
  event.preventDefault();
  window.location.href = "https://www.youtube.com/watch?v=uPX2bKvX4LA";
}

acceptButton.addEventListener("click", acceptButtonClick);
declineButton.addEventListener("click", declineButtonClick);


// var coll = document.getElementsByClassName("collapse-text");

// for (var i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }