const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const audio = document.getElementById("ses"); 

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
    audio.pause();

  } else {
    btn.classList.remove("slide");
    video.play();
    audio.play();
  }
});
