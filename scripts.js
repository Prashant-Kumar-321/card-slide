// Initialization of Swipper  object

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 10, // px
    grabCursor: true,
    speed: 850,

    // autoplay: {
    //     delay: 3000,
    // },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // For responsive Slide show
    breakpoints: {
        // Window Size >= 0px
        0:{
            slidesPerView: 1
        }, 
        // Window Size >= 625px 
        625:{
            slidesPerView: 2
        },

        // Window Size >= 1024px
        1024:{
            slidesPerView: 3
        }
    }
});