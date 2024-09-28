const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween: 10,
    grabCursor: true,

    autoplay: {
        delay: 3000,
    },
  
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
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

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