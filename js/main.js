//menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");

menuButton.addEventListener('click', () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
});

// scroll animation

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

// Email

// let checkEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

// const emailButton = document.querySelector('button');
// const emailInput = document.querySelector('input');
// emailButton.addEventListener('click', () => {
//   let $email = emailInput.value;
//   if(checkEmail($email)){
//     alert('Thank you for your submit. We will shortly contact you.')
//   }else {
    
//   }
// });

// ===== #sign =====
// === setInterval ===

const countdown = () => {
  const countDate = new Date("May 30, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // How does the time work?
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate the shit
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;

};
setInterval(countdown, 1000);
// === form === 

// Đối tượng `Validator`
function Validator(options){
  let formElement = document.querySelector(options.form);
  
  if(formElement){
    options.rules.forEach(function(rule){
      let inputElement = formElement.querySelector(rule.selector);
      console.log(inputElement);
    })
  }
}

// Định nghĩa rules
Validator.isRequired = function(selector){
  return {
    selector: selector,
    test: function(){

    }
  };

}

Validator.isEmail = function(selector){
  return {
    selector: selector,
    test: function(){

    }
  };
}
// === #extension === 
// === slide === 

let slideContainer = document.querySelector('.slide__container');
let cardContainer = document.querySelector('.card__container');
let cardWrapper = document.querySelectorAll('.card__wrapper');
let preBtn = document.querySelector('.pre');
let nextBtn = document.querySelector('.next');

let cardIndex = 0;

const slideCard = () => {
  cardIndex = cardIndex === cardWrapper.length ? 0 : cardIndex < 0 ? cardIndex.length -1 : cardIndex; 

  cardContainer.style.transform = `translate(-${cardIndex * 100}%)`;
};

preBtn.addEventListener('click', e=> {
  if(cardIndex === 0){
    cardIndex = cardContainer.length - 1;
  }else {
    cardIndex--;
  }
  slideCard();
});

nextBtn.addEventListener('click', e=> {
  if(cardIndex == cardContainer.length-1){
    cardIndex = 0;
  }else {
    cardIndex++;
  }
  slideCard();
});

// === #work ===
// === slide ===
let slide = document.querySelector('.slide__card');
let cardBlock = document.querySelector('.card__block');
let cards = document.querySelectorAll('.card__step');
let $preBtn = document.querySelector('.pre-1');
let $nextBtn = document.querySelector('.next-1');

let index = 0;

let slideCardStep = () => {
  index = index === cards.length ? 0: index<0 ? index.length-1 : index;
  cardBlock.style.transform = `translate(-${index * 100}%)`;
};

$preBtn.addEventListener('click', e=> {
  if(index === 0){
    index = cardBlock.length-1;
  }else {
    index--;
  }
  slideCardStep();
});

$nextBtn.addEventListener('click', e=> {
  if(index === cardBlock.length-1){
    index = 0;
  }else{
    index++;
  }
  slideCardStep();
});