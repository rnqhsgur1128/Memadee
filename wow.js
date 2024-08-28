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

const side = document.getElementById("SIDE");
const slieMenu = document.getElementById("side-menu");
const exit = document.getElementById("exit");

function sideClick() {
  slieMenu.style.display = `block`;
}

function exitClick() {
  console.log("bye!");
}

////사이드 ID로 toggle 이용해보기 ////

side.addEventListener("click", sideClick);
exit.addEventListener("click", exitClick);
