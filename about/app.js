let counters = [...document.querySelectorAll('.counters span')]
let countersSection = document.querySelector('#ourMembers')
let counterStarted =false


// counters.forEach(el => {
//    counter(el)
// });



window.onscroll = () => {
   if (!counterStarted && scrollY >= countersSection.offsetTop || !counterStarted &&  scrollY+ screen.height >= countersSection.offsetTop + countersSection.offsetHeight) {
      counters.forEach(el => {
         counter(el)
      });
      counterStarted = true
   }
}

function counter(el) {

   let limit = el.dataset.max
   // let interval = Math.floor()
   let counterInterval = setInterval(() => {
      el.innerText++

      if (el.innerText == limit) {
         clearInterval(counterInterval)
      }
   }, 5000/limit);
}

// counter(counters[0])







const menuToggle = document.querySelector('.menuToggle')
const menuClose = document.querySelector('.menuClose')
const nav = document.querySelector('.nav')

const plustox1 = document.querySelector('.plusToX1')
const plustox2 = document.querySelector('.plusToX2')

lottie.loadAnimation({
   container: menuToggle, 
   renderer: 'svg',
   path: '../menu/menu.json' ,
   name:'menuToggleAnim',
   autoplay:false,
   loop:false,
 });
 lottie.loadAnimation({
   container: menuClose, 
   renderer: 'svg',
   path: '../menu/menu.json' ,
   name:'menuCloseAnim',
   autoplay:false,
   loop:false,
 });

   lottie.loadAnimation({
   container: plustox1, 
   renderer: 'svg',
   path: '../Plus to X/plusToX.json' ,
   name:'plustox1',
   autoplay:false,
   loop:false,
 });

 lottie.loadAnimation({
   container: plustox2, 
   renderer: 'svg',
   path: '../Plus to X/plusToX.json' ,
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