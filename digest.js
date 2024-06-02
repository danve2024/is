// Выбор из меню
function change() {
  var e = document.getElementById("list");
  var text = e.options[e.selectedIndex].text;
  var cards = document.getElementsByClassName('content-card');
  for (let i of cards) {
    i.style.display = "none";
  }

  if (text === 'IT') {
    var a = document.getElementsByClassName('IT');
  } else if (text === "Экономика") {
    var a = document.getElementsByClassName('economics');
  } else if (text === "Маркетинг") {
    var a = document.getElementsByClassName('marketing');
  } else if (text === "Биология") {
    var a = document.getElementsByClassName('biology');
  } else if (text === "Медицина") {
    var a = document.getElementsByClassName('medicine');
  } else if (text === "Химия") {
    var a = document.getElementsByClassName('chemistry');
  } else if (text === "Физика") {
    var a = document.getElementsByClassName('physics');
  } else if (text === "Проектный менеджмент") {
    var a = document.getElementsByClassName('leadership');
  } else if (text === "PR") {
    var a = document.getElementsByClassName('PR');
  } else if (text === "Право") {
    var a = document.getElementsByClassName('rights');
  } else if (text === "Лингвистика") {
    var a = document.getElementsByClassName('linguistics');
  } else if (text === "История") {
    var a = document.getElementsByClassName('history');
  } else if (text === "Литература") {
    var a = document.getElementsByClassName('literature');
  } else if (text === "Социология") {
    var a = document.getElementsByClassName('sociology');
  } else if (text === "Журналистика") {
    var a = document.getElementsByClassName('journalism');
  } else if (text === "Техника") {
    var a = document.getElementsByClassName('tech');
  } else if (text === "Направление") {
    var a = document.getElementsByClassName('content-card');
  } else if (text === "Science") {
    var a = document.getElementsByClassName('science');
  } else if (text === "Соц-Гум") {
    var a = document.getElementsByClassName('hum');
  } else if (text === "Soft Skills") {
    var a = document.getElementsByClassName('soft');
  }
  
  

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