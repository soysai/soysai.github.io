// TO MAKE THE PROMPT GENERATOR BOX APPEAR ON CLICK

// Get the box
var generatebox = document.getElementById("promptgenerator");

// Get the button that opens the modal
var btn = document.getElementById("clickbtn");

//get the dialogue popup
var popimage = document.getElementById("popup");

var toolpopup = document.getElementById("toolpopup");

// When the user clicks on the button, open the prompt generator
btn.onclick = function() {
  generatebox.style.display = "block";
  popimage.style.display = "block";
  toolpopup.style.display = "block";
  btn.style.color = "red";
  btn.style.animation = "pause";
}

// PROMPT GENERATOR

//creating an array of prompts
const prompts = [
    "Talk about your favorite childhood memory. Why is it so precious to you?",
    "Why are you interested in learning languages?",
    "Have you had any interesting encounters with a person or an object so far?",
    "Describe your dream vacation in detail.",
    "What is your fantasy?",
    "If you had to choose a superpower what would you choose and why?",
    "Describe your dream house. What do the interiors look like? Where is it located?", 
    "If you could have dinner with any historical figure, who would it be and why?",
    "Discuss your favorite book or movie and why it resonates with you.",
    "Discuss a goal or aspiration you have for the next year and your plan to achieve it.",
    "What is something you are excited about in the near future?",
    "If you could time travel to any era, past or future, when would it be and why?",
    "Discuss a recent accomplishment or something you're proud of achieving.",
    "Do you have a mantra you live by? What is it? Why has it had such a significant impact on your life?",
    "If you could live in any fictional world from a book or movie, where would it be?",
    "Talk about your favorite type of music and its influence on your mood.",
    "Talk about a skill or hobby you've always wanted to learn and why.",
    "Share a memorable travel experience and what you learned from it.",
    "Talk about a person who has had a significant impact on your life."    
];

//to randomize prompts
function generateRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomIndex];
    document.getElementById("prompt").innerText = randomPrompt;

    // look up Y position of desired element
    // store Y position
    
    window.scrollTo(0, 400);
}

//get randomized prompts by id 
document.getElementById("generate").addEventListener("click", generateRandomPrompt);

//TOOLS 
//to reveal tools 
//reveal microphone and notes after click
var voicerec = document.getElementById("voicerecorder"); 
var notes = document.getElementById("note");

toolpopup.onclick = function() {
   voicerec.style.display = "block";
   toolpopup.style.animation ="pause";
   notes.style.display = "block";
}


//screen should scroll to microphone and notes content 

function scrollDown() { 
    window.scrollTo(0, findPosition(document.getElementById("voicerecorder"))); 
    elem.scrollIntoView(); 
} 

//VOICE RECORDER

//getting all the elements
document
  .getElementById("startBtn")
  .addEventListener("click", initFunction);
let isRecording = document.getElementById("isRecording");

//MediaRecorder API - referenced from MDN and article from Medium column
function initFunction() {
    // Display recording
    async function getUserMedia(constraints) {
      if (window.navigator.mediaDevices) {
        return window.navigator.mediaDevices.getUserMedia(constraints);
      }
      let legacyApi =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;
      if (legacyApi) {
        return new Promise(function (resolve, reject) {
          legacyApi.bind(window.navigator)(constraints, resolve, reject);
        });
      } else {
        alert("user api not supported");
      }
    }
    //changing text content when audio is being recorded
    isRecording.textContent = "Recording...";
    //empty array to leave space for open input
    let audioChunks = [];
    let rec;
    function handlerFunction(stream) {
      rec = new MediaRecorder(stream);
      rec.start();
      rec.ondataavailable = (e) => {
        audioChunks.push(e.data);
        if (rec.state == "inactive") {
          let blob = new Blob(audioChunks, { type: "audio/mp3" });
          console.log(blob);
          document.getElementById("audioElement").src = URL.createObjectURL(blob);
        }
      };
    }
    function startusingBrowserMicrophone(boolean) {
      getUserMedia({ audio: boolean }).then((stream) => {
        handlerFunction(stream);
      });
    }
    startusingBrowserMicrophone(true);
    // Stopping handler
    document.getElementById("stopBtn").addEventListener("click", (e) => {
      rec.stop();
      isRecording.textContent = "Click play button to start listening";
    });
  }

// display voice recording after clicking on mic
var stopButton = document.getElementById("stopBtn"); 
var recordedaudio = document.getElementById("audioElement");

stopButton.onclick = function(){
    audioElement.style.display = "block";
}

//only display audioElement when the stop button is clicked 
var stopButton = document.getElementById("voicereccontainer"); 

voicerec.onclick = function(){
    voicereccontainer.style.display = "block";
    voicerec.style.animation ="pause";
}

//to scroll to the element when mic button is clicked 
function scrollDown() { 
    window.scrollTo(0, findPosition(document.getElementById("voicereccodntainer"))); 
    elem.scrollIntoView(); 
} 
//TO ADD NOTES 
const addbtn = document.querySelector(".btn_add");

//when add button is clicked, a note is created
addbtn.addEventListener('click', ()=> addNote());

function addNote(text =""){
    const addednote = document.createElement("noteapp");
    addednote.classList.add("note-wrapper");
    addednote.innerHTML = `<div class="operations">
    <button class="btn_edit">Edit</button>
    <button class="btn_delete">Delete</button>
  </div>
  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>`;

  const editBtn = addednote.querySelector(".btn_edit");
  const deleteBtn = addednote.querySelector(".btn_delete");
  const mainEl = addednote.querySelector(".main");
  const textAreaEl = addednote.querySelector("textarea");

  textAreaEl.value = text;
  mainEl.innerHTML = text;
  deleteBtn.addEventListener("click", () => {
    addednote.remove();
    updates();
  });

  editBtn.addEventListener("click", () => {
    textAreaEl.classList.toggle("hidden");
  });

  textAreaEl.addEventListener("input", (e) => {
    const { value } = e.target;
    mainEl.innerHTML = value;
    updates();
  });

  document.body.appendChild(addednote);
}

//to keep adding new notes 

function updates() {
    const noteText = document.querySelectorAll("textarea");
    const notebook = [];
    noteText.forEach((addednote) => notebook.push(addednote.value));
    localStorage.setItem("notebook", JSON.stringify(notebook));
  }

  // to make the "add notes" option appear after clicking on the noteicon

notes.onclick = function(){
    addbtn.style.display = "block";
    notes.style.animation ="pause";
}