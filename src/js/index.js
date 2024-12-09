const swiper = new Swiper('.swiper', {
    // Optional parameters
    //direction: 'vertical',
    slidesPerView: 3,
    slidesPerGroup: 4,
    spaseBetween:10,
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

new Accordion('.accordion');


