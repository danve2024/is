window.onscroll = function() {updateProgressBar()};

function updateProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  if (height <= 0) {
    scrolled = 100; // Если нет прокрутки, прогресс-бар заполнен на 100%
  }

  document.getElementById("myBar").style.width = scrolled + "%";
}

document.addEventListener("DOMContentLoaded", updateProgressBar);
