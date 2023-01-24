const header = document.querySelector('header'), 
heroSection = document.querySelector('#hero')

   heroSection.style.paddingTop = `${header.offsetHeight + heroSection.style.paddingTop}px`





let swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 64,
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

   