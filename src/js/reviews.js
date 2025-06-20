import Swiper from 'swiper';
import 'swiper/css/bundle';

const reviewsLeftArrow = document.getElementById('reviewsLeftArrow');
const reviewsRightArrow = document.getElementById('reviewsRightArrow');

let reviewsSwiper;

reviewsSwiper = new Swiper('.reviews-swiper-container', {
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
      document.querySelector('.reviews-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateReviewsArrows(this);
    },
  },
});

updateReviewsArrows(reviewsSwiper);

function updateReviewsArrows(swiper) {
  reviewsLeftArrow.disabled = swiper.isBeginning;
  reviewsRightArrow.disabled = swiper.isEnd;
}

reviewsLeftArrow.addEventListener('click', () => {
  reviewsSwiper.slidePrev();
});

reviewsRightArrow.addEventListener('click', () => {
  reviewsSwiper.slideNext();
});
