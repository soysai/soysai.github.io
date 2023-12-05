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
dragElement(document.getElementById("window"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("window")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("windowbar").onmousedown = dragMouseDown;
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
  window.scrollTo(0, 700);
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