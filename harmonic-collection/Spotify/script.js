// Get the modal
var modal = document.getElementById("window");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("popupwindow-close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }