// Get the modal
var modal = document.getElementById("window");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("popupwindow-close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//to make modal box draggable
dragElement(document.getElementByClass("popupwindow"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementByClass("window")) {
    // if present, the header is where you move the DIV from:
    document.getElementByClass("window-bar").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//I am having trouble actually making the element draggable. It seems to always shut down every time I try to drag it :(
//referencing https://www.youtube.com/watch?v=3KvvouXK0m0&list=PLQfqQHJBFM1-58ouvTLQgrBKCEV67o0ow&index=10
//for the music
const play = document.querySelector(".play"),
  previous = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  //
  trackImage = document.querySelector(".track-image"),
  title = document.querySelector(".music-title"),
  //
  trackCurrentTime = document.querySelector(".current-time"),
  trackDuration = document.querySelector(".duration-time"),
  slider = document.querySelector(".duration-slider"),
  //
  showVolume = document.querySelector("#show-volume"),
  volumeIcon = document.querySelector("#volume-icon"),
  currentVolume = document.querySelector("#volume"),
  //
  autoPlayBtn = document.querySelector(".play-all");

let timer;
let autoplay = 0;
let indexTrack = 0;
let songIsPlaying = false;
let track = document.createElement("audio");

//Event Listeners
play.addEventListener("click", playSong);
next.addEventListener("click", nextSong);
previous.addEventListener("click", prevSong);
autoPlayBtn.addEventListener("click", autoPlayToggle);
volumeIcon.addEventListener("click", muteSound);
currentVolume.addEventListener("change", changeVolume);
slider.addEventListener("change", changeDuration);
track.addEventListener("timeupdate", songTimeUpdate);

//to load the track
function loadTrack(indexTrack) {
    //defining properties
    clearInterval(timer);
    resetSlider();
    track.src = tracklist[indexTrack].path;
    trackImage.src = trackList[indexTrack].img;
    title.innerHTML = trackList[indexTrack].name;
    track.load();
    timer = setInterval(updateSlider, 1000);
}
loadTrack(indexTrack);

// Play song or Pause song
function justPlay() {
    if (songIsPlaying == false) {
      playSong();
    } else {
      pauseSong();
    }
  }
  
// to play the track
function playSong() {
    track.play();
    songIsPlaying = true;
    play.innerHTML = '<i class="fas fa-pause"></i>';
}
// Pause Song
function pauseSong() {
    track.pause();
    songIsPlaying = false;
    play.innerHTML = '<i class="fas fa-play"></i>';
  }
// Next song
function nextSong() {
    if (indexTrack < trackList.length - 1) {
      indexTrack++;
      loadTrack(indexTrack);
      playSong();
    } else {
      indexTrack = 0;
      loadTrack(indexTrack);
      playSong();
    }
  }
  
  // prev song
  function prevSong() {
    if (indexTrack > 0) {
      indexTrack--;
      loadTrack(indexTrack);
      playSong();
    } else {
      indexTrack = trackList.length - 1;
      loadTrack(indexTrack);
      playSong();
    }
  }
  // Mute Sound
function muteSound() {
    track.volume = 0;
    showVolume.innerHTML = 0;
    currentVolume.value = 0;
  }
  
  // Change Volume
  function changeVolume() {
    showVolume.value = currentVolume.value;
    track.volume = currentVolume.value / 100;
  }
  
  // Change Duration
  function changeDuration() {
    let sliderPosition = track.duration * (slider.value / 100);
    track.currentTime = sliderPosition;
  }
  
  // Auto Play
  function autoPlayToggle() {
    if (autoplay == 0) {
      autoplay = 1;
      autoPlayBtn.style.background = "#db6400";
    } else {
      autoplay = 0;
      autoPlayBtn.style.background = "#ccc";
    }
  }
  
  // Reset Slider
  function resetSlider() {
    slider.value = 0;
  }
  
  // Update Slider
  function updateSlider() {
    let position = 0;
  
    if (!isNaN(track.duration)) {
      position = track.currentTime * (100 / track.duration);
      slider.value = position;
    }
  
    if (track.ended) {
      play.innerHTML = '<i class="fas fa-play"></i>';
      if (autoplay == 1 && indexTrack < trackList.length - 1) {
        indexTrack++;
        loadTrack(indexTrack);
        playSong();
      } else if (autoplay == 1 && indexTrack == trackList.length - 1) {
        indexTrack = 0;
        loadTrack(indexTrack);
        playSong();
      }
    }
  }
  
  // Update Current song time
  function songTimeUpdate() {
    if (track.duration) {
      let curmins = Math.floor(track.currentTime / 60);
      let cursecs = Math.floor(track.currentTime - curmins * 60);
      let durmins = Math.floor(track.duration / 60);
      let dursecs = Math.floor(track.duration - durmins * 60);
  
      if (dursecs < 10) {
        dursecs = "0" + dursecs;
      }
      if (durmins < 10) {
        durmins = "0" + durmins;
      }
      if (curmins < 10) {
        curmins = "0" + curmins;
      }
      if (cursecs < 10) {
        cursecs = "0" + cursecs;
      }
      trackCurrentTime.innerHTML = curmins + ":" + cursecs;
      trackDuration.innerHTML = durmins + ":" + dursecs;
    } else {
      trackCurrentTime.innerHTML = "00" + ":" + "00";
      trackDuration.innerHTML = "00" + ":" + "00";
    }
  }

  //redone slider

  let progress= document.getElementById("duration-slider");
  let song= document.getElementById("song");
  let ctrlIcon= document.getElementById("ctrlIcon");

  song.onloadmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
  }

  function playPause(){
    if(ctrlIcon.classList.contains("pause")){
        song.pause();

    } else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
  }
  //notes

  const notesContainer = document.querySelector(".notes-container");
  const createbutton = document.querySelector(".noteicon");
  let notes = document.querySelectorAll(".input-box");

 // createbutton.addEventListener("click", ()=>{
 //   let inputBox = document.createElement("p");
 ///   let img = document.createElement("img");
 //   inputBox.className = "input-box";
 //   inputBox.setAttribute("contenteditable","true");
 //   img.src="images/delete.png";
//  notesContainer.appendChild(inputBox).appendChild(img);
//});
