//const inputs = document.querySelectorAll('.controls input');

  //  function handleUpdate() {
    //  const suffix = this.dataset.sizing || '';
      //document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    //}

    //inputs.forEach(input => input.addEventListener('change', handleUpdate));
   // inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
const video = document.querySelector('video');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');

// play / pause toggle
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// update play/pause button icon
function updateButton() {
  const icon = video.paused ? '►' : '❚❚';
  this.textContent = icon;
}

// progress bar update
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  document.querySelector('.progress__filled').style.flexBasis = `${percent}%`;
}

// rewind / forward
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// volume & playback speed
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// speed scrubber
function handleSpeed(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const playbackRate = percent * (max - min) + min;
  speedBar.textContent = playbackRate.toFixed(1) + 'x';
  speedBar.style.height = `${percent * 100}%`;
  video.playbackRate = playbackRate;
}

// selectors
const toggle = document.querySelector('.player__button');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

// event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(btn => btn.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

speed.addEventListener('mousemove', handleSpeed);
