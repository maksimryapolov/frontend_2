import 'slick-carousel';
import "./import/modules";
import "./import/components";
import "./import/accardion";

// This script solve the popular problem when 100vh doesn’t fit the mobile browser screen (work with PostCSS plugin)
function setViewportProperty(doc) {
    let prevClientHeight;
    function handleResize() {
      let clientHeight = doc.clientHeight;
      if (clientHeight === prevClientHeight) return;
      requestAnimationFrame(function updateViewportHeight() {
        doc.style.setProperty('--vh', clientHeight * 0.01 + 'px');
        prevClientHeight = clientHeight;
      });
    }
    handleResize();
    return handleResize;
}
  
window.addEventListener('resize', setViewportProperty(document.documentElement));

// Place your jQuery code here.
$(function () {
    // Load SVG-sprite on IE
    // svg4everybody();
  
    // Micromodal example init
    // MicroModal.init({
    //   disableScroll: true,
    //   awaitOpenAnimation: true,
    //   awaitCloseAnimation: true,
    // });
  
    console.log('DOM loaded');
  
});

(() => {
    $('.js-slick').slick({
        vertical: true,
        slidesToShow: 2,
        appendArrows: $('.b-slider__buttons-wrapper'),
        prevArrow: '<div id="prev" type="button" class="b-slider__up"></div>',
        nextArrow: '<div id="next" type="button" class="b-slider__down"></div>'
    });
})();
  
(() => {
    let slide = $('#slide-team');
    let desName = 'desabled';

    slide.slick({
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
    });

    slide.find('.b-slide-team__item').each(function(index, item) {
        let elem = $(item).closest('.slick-slide');
        if(!$(item).hasClass(desName) && $(elem).hasClass('slick-cloned')) {
        $(item).addClass(desName);
        }
    });

    slide.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(`div.slick-slide[data-slick-index='${currentSlide + 1}']`).find('.b-slide-team__item').toggleClass(desName);
        $(`div.slick-slide[data-slick-index='${currentSlide + 2}']`).find('.b-slide-team__item').toggleClass(desName);
    })
})();
  
  