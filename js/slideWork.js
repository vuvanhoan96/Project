// === #work ===
// === slide ===
let cardBlock = document.querySelector('.card__block');
let cards = document.querySelectorAll('.card__step');
let $preBtn = document.querySelector('.pre-1');
let $nextBtn = document.querySelector('.next-1');

let index = 0;

let slideCardStep = () => {
  index = index === cards.length ? 0: index<0 ? index.length-1 : index;
  cardBlock.style.transform = `translate(-${index * 105}%)`;
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