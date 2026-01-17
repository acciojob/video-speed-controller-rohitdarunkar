const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const rewind = document.querySelector('.rewind');
const skip = document.querySelector('.skip');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const sliders = document.querySelectorAll('.player__slider');

// Play / Pause
function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚❚';
}

// Progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Scrub
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Volume & Speed
function handleSliderUpdate() {
  video[this.name] = this.value;
}

// Skip
function skipTime() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
rewind.addEventListener('click', skipTime);
skip.addEventListener('click', skipTime);

sliders.forEach(slider => slider.addEventListener('input', handleSliderUpdate));

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
