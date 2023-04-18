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