let speach = new SpeechSynthesisUtterance();

let voices = [];

let selectvoice = document.getElementById("select");
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speach.voice = voices[0];

  voices.forEach((voice, i) => {
    selectvoice.options[i] = new Option(voice.name, i);
  });

  selectvoice.addEventListener("change", () => {
    speach.voice = voices[selectvoice.value];
  });
};

document.getElementById("btn").addEventListener("click", () => {
  speach.text = document.getElementById("textarea").value;
  window.speechSynthesis.speak(speach);
});

let btn = document.getElementById("btn").addEventListener("click", function () {
 let play = document.getElementById("playIcon");

  if (play.src.includes("play")) {
    play.src = "./pause_icon-removebg-preview.png";
  } else {
    play.src = "./play_icon-removebg-preview.png";
  }
});



