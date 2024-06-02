// Выбор из меню
function change() {
  var e = document.getElementById("list");
  var text = e.options[e.selectedIndex].text;
  var cards = document.getElementsByClassName('content-card');
  for (let i of cards) {
    i.style.display = "none";
  }

  var classes = {
    'IT': 'IT',
    'Экономика': 'economics',
    'Маркетинг': 'marketing',
    'Биология': 'biology',
    'Медицина': 'medicine',
    'Химия': 'chemistry',
    'Физика': 'physics',
    'Проектный менеджмент': 'leadership',
    'PR': 'PR',
    'Право': 'rights',
    'Лингвистика': 'linguistics',
    'История': 'history',
    'Литература': 'literature',
    'Социология': 'sociology',
    'Журналистика': 'journalism',
    'Техника': 'tech',
    'Направление': 'content-card',
    'Science': 'science',
    'Соц-Гум': 'hum',
    'Soft Skills': 'soft'
  };
  
  var a = document.getElementsByClassName(classes[text]);

  for (let i of a) {
    i.style.display = "flex";
  }
}

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
  const currentState = computedStyle.backgroundImage;

  if (currentState.includes('bg.jpg')) {
      body.style.backgroundImage = 'url("images/bg_dark.jpg")';
      body.style.color = 'white';
      
  } else {
      body.style.backgroundImage = 'url("images/bg.jpg")';
      body.style.color = 'rgb(0, 0, 50)';
  }
}