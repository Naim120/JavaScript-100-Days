const clock = document.getElementById('clock');

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  hours = hours % 12; // converts in 12 Hr Format
  hours = hours ? hours : 12; // hours 0 should be 12
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  // Update the UI
  const timeString = `${hours}:${minutes}:${seconds}`;
  clock.innerHTML = timeString;
  clock.dataset.text = timeString;
}

setInterval(updateTime, 1000);
