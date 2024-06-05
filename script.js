// Выпадающее меню
function toggleMenu() {
    const menu = document.getElementById('menu');
    const currentState = getComputedStyle(menu).left;

    if (currentState === '0px') {
      menu.style.left = '-300px';
    } else {
      menu.style.left = '0';
    }
}
// Светлая/тёмная тема
function changeTheme() {
  const body = document.getElementById('body');
  const computedStyle = getComputedStyle(body);
  const footer = document.getElementById('footer-p');
  const link = document.getElementById('footer-link');
  const currentState = computedStyle.backgroundImage;

  if (currentState.includes('bg.jpg')) {
      body.style.backgroundImage = 'url("images/bg_dark.jpg")';
      body.style.color = 'white';
      footer.style.color = 'white';
      link.style.color = 'white';
      
  } else {
      body.style.backgroundImage = 'url("images/bg.jpg")';
      body.style.color = 'rgb(0, 0, 50)';
  }
}