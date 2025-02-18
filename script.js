const navDialog = document.getElementById('nav-dialog')

function handleMenu(){
  navDialog.classList.toggle("hidden")
}


const initialTranslateLTR =-48*4
const initialTranslateRTL =36*4

function setupIntersectionObserver (element,isLTR,speed){
  const intersectionCallback=(entries)=>{
    const isIntersecting = entries[0].isIntersecting;
    if(isIntersecting){
      document.addEventListener("scroll",scrollHandler)
    }
  }
  const intersectionObserver = new IntersectionObserver(intersectionCallback)

  intersectionObserver.observe(element);

  function scrollHandler (){
    let totalTranslate =0;
    const translateX = (window.innerHeight- element.getBoundingClientRect().top)*speed
    if(isLTR){
       totalTranslate =translateX + initialTranslateLTR;
    }else{
      totalTranslate = -(translateX + initialTranslateRTL)
    }
    element.style.transform = `translate(${totalTranslate}px)`
  }
}

const line1 =document.getElementById('line1')
const line2 =document.getElementById('line2')
const line3 =document.getElementById('line3')
const line4 =document.getElementById('line-4')

setupIntersectionObserver(line1,true,0.15)
setupIntersectionObserver(line2,false,0.15)
setupIntersectionObserver(line3,true,0.15)
setupIntersectionObserver(line4,true,0.80)

const dtElement = document.querySelectorAll('dt')
dtElement.forEach(element=>{
  element.addEventListener('click',()=>{
    const ddid = element.getAttribute('aria-controls');
    const ddElement = document.getElementById(ddid);
    const ddArrowIcon = element.querySelectorAll('i')[0];

    ddElement.classList.toggle('hidden')
    ddArrowIcon.classList.toggle('-rotate-180')
  })
})