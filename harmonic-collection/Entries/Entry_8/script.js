document.getElementById("dropdown").onclick = function() {
    var iframe = document.getElementById("video");
    var image = document.getElementById("thumbnail");
    iframe.src = "https://www.youtube.com/embed/IFD62bLaMtI?si=48XuuXkmH9o19YNg";
    iframe.style.display = "";
    image.style.display = "";
  }

  //sourced from w3 schools - I tried using this source code for the pop up video, but I cant really figure out the code

/*   dragElement(document.getElementById("popup1"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

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
} */