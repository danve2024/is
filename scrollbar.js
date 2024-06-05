function updateProgressBar() {
  var myBar = document.getElementById("myBar");
  if (!myBar) {
    console.log("myBar not found");
    return;
  }
  
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  if (height <= 0) { scrolled = 100; }

  document.getElementById("myBar").style.width = scrolled + "%";
  myBar.style.width = scrolled + "%";
}

// Проверяем, полностью ли загружен DOM
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', updateProgressBar);
    updateProgressBar();
  });
} else {
  window.addEventListener('scroll', updateProgressBar);
  updateProgressBar();
}