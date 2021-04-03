const songs = [
  "bensound-acousticbreeze.mp3",
  "bensound-adaytoremember.mp3",
  "bensound-buddy.mp3",
  "bensound-happiness.mp3",
  "bensound-smile.mp3",
  "bensound-sunny.mp3",
  "bensound-tenderness.mp3",
  "bensound-ukulele.mp3",
];

const player = document.getElementById("player");

function createSongList() {
  const list = document.createElement('ol');
  for (var i = 0; i < songs.length; i++) {
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
  }
  return list;
}



var songList = document.getElementById("songList");
songList.appendChild(createSongList());

const links = document.querySelectorAll('li');
for (const link of links) {
  link.addEventListener("click", setSong);
}

function setSong(e) {
  document.querySelector("#headphones").classList.remove("pulse");
  const source = document.getElementById('source');
  source.src = "songs/" + e.target.innerText;

  document.querySelector("#currentSong").innerText = `Now Playing: ${e.target.innerText}`;


  player.load();
  player.play();
  document.querySelector("#headphones").classList.add("pulse");
}

function playAudio() {
  if (player.readyState) {
    player.play();
  }
}

function pauseAudio() {
  player.pause();
}

const slider = document.getElementById("volumeSlider");
slider.oninput = function(e) {
  const volume = e.target.value;
  player.volume = volume;
}

function updateProgress() {
  if (player.currentTime > 0) {
    const progressBar = document.getElementById("progress");
    progressBar.value = (player.currentTime / player.duration) * 100;
  }


}
