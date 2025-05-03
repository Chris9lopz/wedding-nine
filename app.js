// Set the date we're counting down to
let countDownDate = new Date("Jun 21, 2025 11:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Music Script
const audio = new Audio("audio/perfect.mp3");
const musicIcon = document.getElementById("music-icon");

const audioBackground = function () {
  if (audio.paused) {
    audio.currentTime = 0; // Reinicia el audio al principio
    audio.play().catch((error) => {
      console.log("Error al reproducir audio:", error);
    });
    musicIcon.src = "img/pause_me2.png"; // Cambia la imagen a "pausar"
  } else {
    audio.pause(); // Pausa el audio
    musicIcon.src = "img/play_me.png"; // Cambia la imagen a "reproducir"
  }
};
