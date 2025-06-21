import Swiper from 'swiper';
import 'swiper/css/bundle';

const highlightsLeftArrow = document.getElementById('highlightsLeftArrow');
const highlightsRightArrow = document.getElementById('highlightsRightArrow');

let highlightsSwiper;

highlightsSwiper = new Swiper('.highlights-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 20,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 4,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.highlights-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateHighlightsArrows(this);
    },
  },
});

updateHighlightsArrows(highlightsSwiper);

function updateHighlightsArrows(swiper) {
  highlightsLeftArrow.disabled = swiper.isBeginning;
  highlightsRightArrow.disabled = swiper.isEnd;
}

highlightsLeftArrow.addEventListener('click', () => {
  highlightsSwiper.slidePrev();
});

highlightsRightArrow.addEventListener('click', () => {
  highlightsSwiper.slideNext();
});
