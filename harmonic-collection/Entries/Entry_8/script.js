document.getElementById("dropdown").onclick = function() {
    var iframe = document.getElementById("video");
    var image = document.getElementById("thumbnail");
    iframe.src = "https://www.youtube.com/embed/IFD62bLaMtI?si=48XuuXkmH9o19YNg";
    iframe.style.display = "";
    image.style.display = "";
  }
