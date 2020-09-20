const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const pause = document.getElementById('pause');
const progress = document.getElementById('progress');

//Play Pause video and update play pause icon
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

//Update progress and timestamp, set up video to progress
function updateProgress() {
  return true;
}

function setVideoProgress() {
  return true;
}

//stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
