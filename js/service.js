// === #service === //
// slide

const slideService = document.querySelector('.services__wrapper');
const  serviceList = document.querySelectorAll('.service');
const  arrowPre    = document.querySelector('.pre-3');
const  arrowNext   = document.querySelector('.next-3');

let indexService = 0;

let slideCardService = () => {
  indexService = indexService === serviceList.length ? 0 : indexService++;
  slideService.style.transform =`translate(calc(${indexService} * (-100% - 15px)))`;
};

arrowPre.addEventListener('click', e=>{
  if(indexService === 0){
    indexService = slideService.length - 1;
  }else{
    indexService--;
  }
  slideCardService();
});
arrowNext.addEventListener('click', e=>{
  if(indexService === slideService.length-1){
    indexService = 0;
  }else{
    indexService++;
  }
  slideCardService();
});