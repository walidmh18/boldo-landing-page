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
else if (screen.width > 650 && screen.width < 1000) {
   spaceBtwn = 0
   slidesPerView = 1
}

const menuToggle = document.querySelector('.menuToggle')
const menuClose = document.querySelector('.menuClose')
const nav = document.querySelector('.nav')
lottie.loadAnimation({
   container: menuToggle, // the dom element that will contain the animation
   renderer: 'svg',
   path: './menu/menu.json' ,
   name:'menuToggleAnim',
   autoplay:false,
   loop:false,
 });
 lottie.loadAnimation({
   container: menuClose, // the dom element that will contain the animation
   renderer: 'svg',
   path: './menu/menu.json' ,
   name:'menuCloseAnim',
   autoplay:false,
   loop:false,
 });
let animDir = 1

 menuToggle.onclick= () => {
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

 
 menuClose.onclick= () => {
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


 addEventListener('click', (e)=> {
   const outsideClick = !nav.contains(e.target);
 });

 console.log(';');



 function navToggle() {
   console.log('object');
   nav.classList.toggle('active')
 }
// let swiper = new Swiper(".mySwiper", {
//    slidesPerView: slidesPerView,
//    spaceBetween: spaceBtwn,
//    pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//    },
//    loop: true,
//    navigation: {
//       nextEl: '.next',
//       prevEl: '.previous',
//     },
//    });

   


function openFaq(el) {
   let elHeight = el.querySelector('p').offsetHeight
   // el.classList.toggle('active')

   if ( el.style.height == 0 || el.style.height == '0px' ) {
      el.style.height = `${elHeight}px`
      
   } else {
      el.style.height = `0`
      
   }
}



