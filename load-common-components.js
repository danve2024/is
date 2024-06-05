addMetaTags();
addStylesheets();

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

function addMetaTags() {
    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    document.head.appendChild(metaCharset);
  
    const metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    document.head.appendChild(metaViewport);
  
    // Favicon for most browsers
    const linkFavicon = document.createElement('link');
    linkFavicon.rel = 'icon';
    linkFavicon.href = '/favicons/favicon.ico';
    document.head.appendChild(linkFavicon);

    // PNG Favicon sizes
    const favicon16 = document.createElement('link');
    favicon16.rel = 'icon';
    favicon16.type = 'image/png';
    favicon16.sizes = '16x16';
    favicon16.href = '/favicons/favicon-16x16.png';
    document.head.appendChild(favicon16);

    const favicon32 = document.createElement('link');
    favicon32.rel = 'icon';
    favicon32.type = 'image/png';
    favicon32.sizes = '32x32';
    favicon32.href = '/favicons/favicon-32x32.png';
    document.head.appendChild(favicon32);

    // Apple touch icon
    const linkAppleTouchIcon = document.createElement('link');
    linkAppleTouchIcon.rel = 'apple-touch-icon';
    linkAppleTouchIcon.sizes = '180x180';
    linkAppleTouchIcon.href = '/favicons/apple-touch-icon.png';
    document.head.appendChild(linkAppleTouchIcon);

    // Android Chrome icons
    const linkAndroid192 = document.createElement('link');
    linkAndroid192.rel = 'icon';
    linkAndroid192.sizes = '192x192';
    linkAndroid192.href = '/favicons/android-chrome-192x192.png';
    document.head.appendChild(linkAndroid192);

    const linkAndroid512 = document.createElement('link');
    linkAndroid512.rel = 'icon';
    linkAndroid512.sizes = '512x512';
    linkAndroid512.href = '/favicons/android-chrome-512x512.png';
    document.head.appendChild(linkAndroid512);

    // Manifest file for Progressive Web Apps
    const linkManifest = document.createElement('link');
    linkManifest.rel = 'manifest';
    linkManifest.href = '/site.webmanifest';
    document.head.appendChild(linkManifest);
}

function addStylesheets() {
    const linkStylesheet = document.createElement('link');
    linkStylesheet.rel = 'stylesheet';
    linkStylesheet.type = 'text/css';
    linkStylesheet.href = '/styles.css';
    document.head.appendChild(linkStylesheet);
}

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