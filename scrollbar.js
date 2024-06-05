function updateProgressBar() {
  console.log("updateProgressBar called");
  var myBar = document.getElementById("myBar");
  if (!myBar) {
    return; // Если элемента нет, выходим из функции
  }
  
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  if (height <= 0) { scrolled = 100; }

  document.getElementById("myBar").style.width = scrolled + "%";
}

document.addEventListener("DOMContentLoaded", function() {
  window.onscroll = function() {
      updateProgressBar();
  };
  updateProgressBar();
});
