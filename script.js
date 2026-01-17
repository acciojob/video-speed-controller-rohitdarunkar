const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
  const y = e.offsetY;
  const height = this.offsetHeight;

  const min = 0.4;
  const max = 4;

  const percent = y / height;
  const playbackRate = percent * (max - min) + min;

  bar.style.height = `${Math.round(percent * 100)}%`;
  bar.textContent = `${playbackRate.toFixed(2)}×`;
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
   inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
