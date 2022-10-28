import './about/_';

// Swiper
import { Autoplay, Pagination, Navigation } from "swiper";

const options = {
  modules: [Autoplay, Pagination, Navigation],
  direction: 'horizontal',
  loop: false,
  slidesPerView: "auto",
  speed: 700,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  wrapperClass: "js-carousel-wrapper",
  slideClass: "js-carousel-slide",
  slideActiveClass: "carousel-slide-active",
  slideNextClass: "carousel-slide-next",
  slidePrevClass: "carousel-slide-prev",
  pagination: {
    el: ".carousel__pagination",
    clickable: true,
    bulletActiveClass: "carousel__pagination-bullet--state--active",
    bulletClass: "carousel__pagination-bullet",
    bulletElement: "li",
  },
}; 

// Utils
// import initInView from './!common/utils/initInView/_';

// document.querySelectorAll( '.js-carousel' ).forEach( $el => {
//   if (document.querySelectorAll( '.js-carousel' )) {
//     initInView( $el, () => {
//       import(
//         './carousel/_.js' /* webpackChunkName: "/js/carousel" */
//       ).then( module => {
//         const initCarousel = module.default;
//         initCarousel( $el, {
//           ...options, 
//         } )
//       });
//     });
//   }
// });

const optionsObserver = {
  rootMargin: '50px 0px 0px',
}

const carouselObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      import(
        './carousel/_.js' /* webpackChunkName: "/js/carousel" */
      ).then( module => {
        const initCarousel = module.default;
        initCarousel( entry.target, {
          ...options, 
        } )
      });
      observer.unobserve(entry.target);
    }
  })
}, optionsObserver);

document
  .querySelectorAll( '.js-carousel' )
  .forEach( $el => {
    carouselObserver.observe($el)
})