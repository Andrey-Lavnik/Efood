var d = document,
    itemBox = d.querySelectorAll('.item_box'), // блок каждого товара
    cartCont = d.getElementById('cart_content'); // блок вывода данных корзины
// Функция кроссбраузерной установка обработчика событий
function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, function(){ handler.call( elem ); });
  }
  return false;
}
// Получаем данные из LocalStorage
function getCartData(){
  return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o){
  localStorage.setItem('cart', JSON.stringify(o));
  return false;
}
// Добавляем товар в корзину
function addToCart(e){
  this.disabled = true; // блокируем кнопку на время операции с корзиной
  var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
      parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
      itemId = this.getAttribute('data-id'), // ID товара
      itemTitle = parentBox.querySelector('.item_title').innerHTML, // название товара
      itemPrice = parentBox.querySelector('.item_price').innerHTML; // стоимость товара
  if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
    cartData[itemId][2] += 1;
  } else { // если товара в корзине еще нет, то добавляем в объект
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }
  if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
    this.disabled = false; // разблокируем кнопку после обновления LS
  }
 return false;
}
// Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
for(var i = 0; i < itemBox.length; i++){
  addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}
// Открываем корзину со списком добавленных товаров
function openCart(e){
  var cartData = getCartData(), // вытаскиваем все данные корзины
      totalItems = '';
  // если что-то в корзине уже есть, начинаем формировать данные для вывода
  if(cartData !== null){
    totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
    for(var items in cartData){
      totalItems += '<tr>';
      for(var i = 0; i < cartData[items].length; i++){
        totalItems += '<td>' + cartData[items][i] + '</td>';
      }
      totalItems += '</tr>';
    }
    totalItems += '</table>';
    cartCont.innerHTML = totalItems;
  } else {
    // если в корзине пусто, то сигнализируем об этом
    cartCont.innerHTML = 'В корзине пусто!';
  }
  return false;
}
/* Открыть корзину */
addEvent(d.getElementById('checkout'), 'click', openCart);
/* Очистить корзину */
addEvent(d.getElementById('clear_cart'), 'click', function(e){
  localStorage.removeItem('cart');
  cartCont.innerHTML = 'Корзина очишена.';
});


const buttonchik = document.querySelectorAll('.corsina');
buttonchik.forEach((item,id)=>{
  item.addEventListener('click',()=>{
    if (modalBasket.classList.contains('none')){
      modalBasket.classList.remove('none')
    }
  })
})  

const modalBasket = document.querySelector('.modal_basket');






const closer = document.querySelectorAll('.closes_modal');

closer.forEach((item,id)=>{
  item.addEventListener('click',()=>{
    modal.style.display = "none";
  })
})

closer.forEach((item,id)=>{
  item.addEventListener('click',()=>{
    modalBasket.classList.add("none")
  })
})

const closevhod = document.querySelector(".closes_vhod");
closevhod.addEventListener('click',()=>{
  vhodmod.style.display = "none";
})



  const dedline = "2022-08-31";

  function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()); //мы получаем разницу в милесекундах
    const days = Math.floor(t / (1000 * 60 * 60 * 24)); //округляем и считаем сколько милисекунд в сутках и делим на нашу разницу
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);//получаем остаток от деления так как сутки мы уже вывели осталось вывести остаток часов который не вошел в целые сутки
    const minutes = Math.floor((t/ 1000/ 60)% 60)
    const seconds = Math.floor((t / 1000) %60)

    return {
        total: t,
        days: days,
        hours:hours,
        minutes:minutes,
        seconds:seconds
    }
  }

 function setClock(selector, endtime){
     const timer = document.querySelector(selector)

     const days = timer.querySelector('#days')
     const hours = timer.querySelector('#hours')
     const minutes = timer.querySelector('#minutes')
     const seconds = timer.querySelector('#seconds')
     const timInterval = setInterval(updateCLock,1000)
updateCLock()

function addZero(num) {
  if (num>0 && num <10) {
    return `0${num}`
  }else {
    return num
  }
}

     function updateCLock(){
        const t =  getTimeRemaining(endtime)
        days.innerHTML = addZero(t.days)
        hours.innerHTML = addZero(t.hours)
        minutes.innerHTML = addZero(t.minutes)
        seconds.innerHTML = addZero(t.seconds)


        if(t.total <= 0){ 
            clearInterval(timInterval)
        }
     }
 }

 setClock('.timer',dedline)

 // Получить модальный
const modal = document.querySelector(".modal");

// Получить кнопку, которая открывает модальный
const btn = document.querySelectorAll(".register");
// btn.forEach((item,id)=>{
//   item.addEventListener('click',()=>{
    
//     modal.style.display = "block";
//   })
// })

// const vhodmod = document.querySelector(".modal_vhod")

const vhod = document.querySelector(".vhod");

// vhod.addEventListener('click',()=>{
//     vhodmod.style.display = "block"
// })


// Получить элемент <span>, который закрывает модальный



// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
  modal.style.display = "block";
}


// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const chapckaburger = document.querySelector('.chapcka__burger');
const chapckamenu = document.querySelector('.chapcka__menu');

chapckaburger.addEventListener("click" , () =>{
  chapckamenu.classList.toggle('active')
  chapckaburger.classList.toggle('active')
})

const getSign = document.querySelector('#myBtn')



getSign.addEventListener('mouseover',()=>{
  vhod.style.display = "block";
})

getSign.addEventListener('mouseout',()=>{
  vhod.style.display = "none";
})

function cambiar_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
document.querySelector('.cont_form_login').style.display = "block";
document.querySelector('.cont_form_sign_up').style.opacity = "0";               

setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
  
setTimeout(function(){    
document.querySelector('.cont_form_sign_up').style.display = "none";
},200);  
  }

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";
  
setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},100);  

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},400);  


}    



function ocultar_login_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";  
document.querySelector('.cont_form_sign_up').style.opacity = "0";               
document.querySelector('.cont_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},500);  
  
  }






