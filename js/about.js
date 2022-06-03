const menubtn = document.querySelector('.menu-btn2');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');
menubtn.onclick = function (){
  menu.classList.toggle('menu_active')
  content.classList.toggle('content_active')
}


