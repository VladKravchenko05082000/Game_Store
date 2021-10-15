
new Swiper('.banner-swiper', {
  pagination: {
    el: '.swipper-pagination',
    clickable: true,
  },

  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
});