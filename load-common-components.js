document.addEventListener("DOMContentLoaded", function() {
    Promise.all([
      fetch('header.html').then(response => response.text()),
      fetch('menu.html').then(response => response.text()),
      fetch('footer.html').then(response => response.text())
    ]).then(([headerData, menuData, footerData]) => {
      document.querySelector('header').innerHTML = headerData;
      document.querySelector('#menu').innerHTML = menuData;
      document.querySelector('footer').innerHTML = footerData;

      document.body.style.visibility = 'visible';

      loadBodyScript('scrollbar.js');
      loadBodyScript('script.js');
    }).catch(error => {
      console.error("Error in Promise.all:", error);
    });
});

function loadBodyScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);
}

function loadHeadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.head.appendChild(script);
}