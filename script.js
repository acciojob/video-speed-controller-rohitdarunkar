//const inputs = document.querySelectorAll('.controls input');

  //  function handleUpdate() {
    //  const suffix = this.dataset.sizing || '';
      //document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    //}

    //inputs.forEach(input => input.addEventListener('change', handleUpdate));
   // inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const rewind = document.querySelector('.rewind');
const forward = document.querySelector('.forward');
const volume = document.querySelector('input[name="volume"]');
const playbackRate = document.querySelector('input[name="playbackRate"]');
const progressFilled = document.querySelector('.progress__filled');

/* ---------- PLAY / PAUSE ---------- */
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚❚';
}

/* ---------- PROGRESS ---------- */
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

/* ---------- SKIP ---------- */
function rewindVideo() {
  video.currentTime -= 10;
}

function forwardVideo() {
  video.currentTime += 25;
}

/* ---------- RANGE CONTROLS ---------- */
function handleRangeUpdate() {
  video[this.name] = this.value;
}

/* ---------- EVENT LISTENERS ---------- */
if (video && toggle) {
  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  video.addEventListener('timeupdate', handleProgress);

  toggle.addEventListener('click', togglePlay);
}

if (rewind) rewind.addEventListener('click', rewindVideo);
if (forward) forward.addEventListener('click', forwardVideo);

if (volume) {
  volume.addEventListener('change', handleRangeUpdate);
  volume.addEventListener('mousemove', handleRangeUpdate);
}

if (playbackRate) {
  playbackRate.addEventListener('change', handleRangeUpdate);
  playbackRate.addEventListener('mousemove', handleRangeUpdate);
}
