const header = document.querySelector('header'), 
heroSection = document.querySelector('#hero')

   heroSection.style.paddingTop = `${header.offsetHeight + heroSection.style.paddingTop}px`


let spaceBtwn , slidesPerView

if (screen.width > 1200) {
   spaceBtwn = 64
   slidesPerView = 3
} else if (screen.width > 1000 && screen.width < 1200) {
   spaceBtwn = 30
   slidesPerView = 3
}else if (screen.width > 650 && screen.width < 1000) {
   spaceBtwn = 20
   slidesPerView = 2
}
else if (screen.width < 650 ) {
   spaceBtwn = 15
   slidesPerView = 1
}

const menuToggle = document.querySelector('.menuToggle')
const menuClose = document.querySelector('.menuClose')
const nav = document.querySelector('.nav')

const plustox1 = document.querySelector('.plusToX1')
const plustox2 = document.querySelector('.plusToX2')

lottie.loadAnimation({
   container: menuToggle, 
   renderer: 'svg',
   path: './menu/menu.json' ,
   name:'menuToggleAnim',
   autoplay:false,
   loop:false,
 });
 lottie.loadAnimation({
   container: menuClose, 
   renderer: 'svg',
   path: './menu/menu.json' ,
   name:'menuCloseAnim',
   autoplay:false,
   loop:false,
 });

   lottie.loadAnimation({
   container: plustox1, 
   renderer: 'svg',
   path: './Plus to X/plusToX.json' ,
   name:'plustox1',
   autoplay:false,
   loop:false,
 });

 lottie.loadAnimation({
   container: plustox2, 
   renderer: 'svg',
   path: './Plus to X/plusToX.json' ,
   name:'plustox2',
   autoplay:false,
   loop:false,
 });






let animDir = 1

 menuToggle.onclick= () => {
   MenuToggleAnim()
 }

function MenuToggleAnim() {
   lottie.setDirection(animDir , 'menuToggleAnim')
   lottie.play('menuToggleAnim')

  

   lottie.setDirection(animDir , 'menuCloseAnim')
   lottie.play('menuCloseAnim')

   if (animDir == 1) {
      animDir =-1
   } else {
      animDir = 1
   }
   navToggle()
}
function menuCloseAnim(){
   lottie.setDirection(animDir , 'menuCloseAnim')
   lottie.play('menuCloseAnim')

 

   lottie.setDirection(animDir , 'menuToggleAnim')
   lottie.play('menuToggleAnim')

   if (animDir == 1) {
      animDir =-1
   } else {
      animDir = 1
   }
   navToggle()
}

 menuClose.onclick= () => {
   menuCloseAnim()
 }

 addEventListener('click', (e)=> {
    const outsideClick = !nav.contains(e.target);
      if(nav.classList.contains('active')){

   //   console.log(nav.classList.contains('active'));
     if (!outsideClick) {
          menuCloseAnim()
      }
      }
   });


 console.log(';');



 function navToggle() {
   nav.classList.toggle('active')
   
 }
let swiper = new Swiper(".testimonialsSwiper", {
   slidesPerView: slidesPerView,
   spaceBetween: spaceBtwn,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   loop: true,
   navigation: {
      nextEl: '.next',
      prevEl: '.previous',
    },
   });

   


function openFaq(el , siblingEl) {
   let elHeight = siblingEl.querySelector('p').offsetHeight
   const index = Array.from(
      el.parentElement.parentElement.children
    ).indexOf(el.parentElement) + 1;

    console.log(index);
   // el.classList.toggle('active')

   if ( siblingEl.style.height == 0 || siblingEl.style.height == '0px' ) {
      siblingEl.style.height = `${elHeight}px`
      // arrow.style.rotate = '180deg'
      lottie.setDirection(1 , `plustox${index}`)
      lottie.play(`plustox${index}`)
   } else {
      siblingEl.style.height = `0`
      // arrow.style.rotate = '0deg'
      lottie.setDirection(-1 , `plustox${index}`)
      lottie.play(`plustox${index}`)
   }
}



