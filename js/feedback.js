// === #feedback === 
// slide 

const slides = document.querySelector('.feedback__wrapper');
let slideList = document.querySelectorAll('.feedback__card');
let btnPre = document.querySelector('.pre-2');
let btnNext = document.querySelector('.next-2');

let indexCard = 0;

let slideCardFeedback = () => {
  indexCard = indexCard === slideList.length ? 0 : indexCard++;
  slides.style.transform = `translate(calc(${indexCard} * (-100% - 15px)))`;
};

btnPre.addEventListener('click', e=> {
  if(indexCard === 0){
    indexCard = slides.length-1;
  }else{
    indexCard--;
  }
  slideCardFeedback();
});
btnNext.addEventListener('click', e=>{
  if(indexCard == slides.length-1){
    indexCard = 0;
  }else{
    indexCard++;
  }
  slideCardFeedback();
});