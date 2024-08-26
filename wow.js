var Swiper = new Swiper(".swiper-container", {
  slidesPreView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
    /// disableOnInteraction은 기본값은 true로 사용자가
    ///상호작용(예를 들어 마우스로 슬라이드를 수동 전환하는 등) 하게 될 경우 자동 재생이 멈추게 된다.///
  },
  loop: true,
  loopAdditionalSlides: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

Swiper;
