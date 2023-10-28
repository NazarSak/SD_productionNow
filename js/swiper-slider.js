const swiper = new Swiper('.mySwiper', {
  loop: true,
  allowTouchMove: false,
  enabled: true,
  spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  autoHeight: true,
  slidesPerView: 4,
});

const swiperBox = new Swiper('.mySwiperBox', {
  loop: true,
  allowTouchMove: false,
  enabled: true,
  spaceBetween: 100,
  speed: 300,
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  autoHeight: true,
  slidesPerView: 1,
  effect: "fade",
});
// swiper.controller.control = swiperBox;
// swiperBox.controller.control = swiper;