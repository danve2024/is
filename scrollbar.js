function updateProgressBar() {
  console.log("updateProgressBar called");
  var myBar = document.getElementById("myBar");
  if (!myBar) {
    console.log("myBar not found");
    return;
  }
  console.log("myBar found");

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  if (height <= 0) { scrolled = 100; }

  console.log("Scrolled:", scrolled, "%");
  document.getElementById("myBar").style.width = scrolled + "%";
  myBar.style.width = scrolled + "%";
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded event");
  window.onscroll = function() {
      updateProgressBar();
  };
  updateProgressBar();
});
