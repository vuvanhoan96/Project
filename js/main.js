import './coutndown.js'
import './feedback.js'
import './menu.js'
import './scrollAnimation.js'
import './service.js'
import './slideExtension.js'
import './slideWork.js'
import './validator.js'

//menu
// const menu = document.querySelector(".navbar__links");
// const menuButton = document.querySelector(".navbar__icons");
// const overlay = document.querySelector("#overlay");

// menuButton.addEventListener('click', () => {
//     menu.classList.toggle("navbar__open");
//     menuButton.classList.toggle("open");
//     overlay.classList.toggle("show");
// });

// overlay.addEventListener('click', () => {
//     menu.classList.toggle("navbar__open");
//     menuButton.classList.toggle("open");
//     overlay.classList.toggle("show");
// })
// scroll animation

// const scrollElements = document.querySelectorAll(".js-scroll");

// const elementInView = (el, dividend = 1) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) / dividend
//   );
// };

// const elementOutofView = (el) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop > (window.innerHeight || document.documentElement.clientHeight)
//   );
// };

// const displayScrollElement = (element) => {
//   element.classList.add("scrolled");
// };

// const hideScrollElement = (element) => {
//   element.classList.remove("scrolled");
// };

// const handleScrollAnimation = () => {
//   scrollElements.forEach((el) => {
//     if (elementInView(el, 1.25)) {
//       displayScrollElement(el);
//     } else if (elementOutofView(el)) {
//       hideScrollElement(el)
//     }
//   })
// }

// window.addEventListener("scroll", () => { 
//   handleScrollAnimation();
// });
// // ===== #sign =====
// // === setInterval ===

// const countdown = () => {
//   const countDate = new Date("May 30, 2023 00:00:00").getTime();
//   const now = new Date().getTime();
//   const gap = countDate - now;

//   // How does the time work?
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Calculate the shit
//   const textDay = Math.floor(gap / day);
//   const textHour = Math.floor((gap % day) / hour);
//   const textMinute = Math.floor((gap % hour) / minute);
//   const textSecond = Math.floor((gap % minute) / second);

//   document.querySelector(".day").innerText = textDay;
//   document.querySelector(".hour").innerText = textHour;
//   document.querySelector(".minute").innerText = textMinute;
//   document.querySelector(".second").innerText = textSecond;

// };
// setInterval(countdown, 1000);
// // === form === 

// Đối tượng `Validator`
// function Validator(options){
// // Hàm thực hiện validate
//   function validate (inputElement, rule){
//     let errorElement = inputElement.parentElement.querySelector(options.errorSelector);
//     let errorMessage = rule.test(inputElement.value);
          
//           if(errorMessage){
//             errorElement.innerText = errorMessage;
//             inputElement.parentElement.classList.add('invalid');
//           }else{
//             errorElement.innerText = '';
//             inputElement.parentElement.classList.remove('invalid');
//           }
//   }
//   // Lấy element của form cần validate
//   let formElement = document.querySelector(options.form);
//   if(formElement){
//     options.rules.forEach(function(rule){
//       let inputElement = formElement.querySelector(rule.selector);
      

//       if(inputElement){
//         // Xử lý trường hợp blur khỏi input
//         inputElement.onblur = function () {
//           validate(inputElement, rule);
//         }
// //    Xử lý mỗi khi người dùng nhập vào input
//         inputElement.oninput = function () {
//     let errorElement = inputElement.parentElement.querySelector('.form__message');
//           errorElement.innerText = '';
//           inputElement.parentElement.classList.remove('invalid');
//         }
//       }
//     });
//   }
// }

// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra gì cả (undefined)
// Validator.isRequired = function(selector){
//   return {
//     selector: selector,
//     test: function(value){
//       return value.trim() ? undefined : 'Vui lòng nhập trường này';
//     }
//   };

// }

// Validator.isEmail = function(selector){
//   return {
//     selector: selector,
//     test: function(value){
//       let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//       return regex.test(value) ? undefined : 'Trường này phải là email';
//     }
//   };
// }

// Validator.isPhone = function(selector, min){
//   return {
//     selector: selector,
//     test: function(value){
//       return value.length === min ? undefined : 'Vui lòng nhập đủ số';
//     }
//   };
// }
// // === #extension === 
// // === slide === 

// let slideContainer = document.querySelector('.slide__container');
// let cardContainer = document.querySelector('.card__container');
// let cardWrapper = document.querySelectorAll('.card__wrapper');
// let preBtn = document.querySelector('.pre');
// let nextBtn = document.querySelector('.next');

// let cardIndex = 0;

// const slideCard = () => {
//   cardIndex = cardIndex === cardWrapper.length ? 0 : cardIndex < 0 ? cardIndex.length -1 : cardIndex; 

//   cardContainer.style.transform = `translate(-${cardIndex * 100}%)`;
// };

// preBtn.addEventListener('click', e=> {
//   if(cardIndex === 0){
//     cardIndex = cardContainer.length - 1;
//   }else {
//     cardIndex--;
//   }
//   slideCard();
// });

// nextBtn.addEventListener('click', e=> {
//   if(cardIndex == cardContainer.length-1){
//     cardIndex = 0;
//   }else {
//     cardIndex++;
//   }
//   slideCard();
// });

// // === #work ===
// // === slide ===
// let cardBlock = document.querySelector('.card__block');
// let cards = document.querySelectorAll('.card__step');
// let $preBtn = document.querySelector('.pre-1');
// let $nextBtn = document.querySelector('.next-1');

// let index = 0;

// let slideCardStep = () => {
//   index = index === cards.length ? 0: index<0 ? index.length-1 : index;
//   cardBlock.style.transform = `translate(-${index * 105}%)`;
// };

// $preBtn.addEventListener('click', e=> {
//   if(index === 0){
//     index = cardBlock.length-1;
//   }else {
//     index--;
//   }
//   slideCardStep();
// });

// $nextBtn.addEventListener('click', e=> {
//   if(index === cardBlock.length-1){
//     index = 0;
//   }else{
//     index++;
//   }
//   slideCardStep();
// });

// // === #feedback === 
// // slide 

// const slides = document.querySelector('.feedback__wrapper');
// let slideList = document.querySelectorAll('.feedback__card');
// let btnPre = document.querySelector('.pre-2');
// let btnNext = document.querySelector('.next-2');

// let indexCard = 0;

// let slideCardFeedback = () => {
//   indexCard = indexCard === slideList.length ? 0 : indexCard++;
//   slides.style.transform = `translate(calc(${indexCard} * (-100% - 15px)))`;
// };

// btnPre.addEventListener('click', e=> {
//   if(indexCard === 0){
//     indexCard = slides.length-1;
//   }else{
//     indexCard--;
//   }
//   slideCardFeedback();
// });
// btnNext.addEventListener('click', e=>{
//   if(indexCard == slides.length-1){
//     indexCard = 0;
//   }else{
//     indexCard++;
//   }
//   slideCardFeedback();
// });

// // === #service === //
// // slide

// const slideService = document.querySelector('.services__wrapper');
// const  serviceList = document.querySelectorAll('.service');
// const  arrowPre    = document.querySelector('.pre-3');
// const  arrowNext   = document.querySelector('.next-3');

// let indexService = 0;

// let slideCardService = () => {
//   indexService = indexService === serviceList.length ? 0 : indexService++;
//   slideService.style.transform =`translate(calc(${indexService} * (-100% - 15px)))`;
// };

// arrowPre.addEventListener('click', e=>{
//   if(indexService === 0){
//     indexService = slideService.length - 1;
//   }else{
//     indexService--;
//   }
//   slideCardService();
// });
// arrowNext.addEventListener('click', e=>{
//   if(indexService === slideService.length-1){
//     indexService = 0;
//   }else{
//     indexService++;
//   }
//   slideCardService();
// });