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
    const team = [
        {
            id: 1,
            name: 'Robert Ross',
            desc: 'Как принято считать, активно развивающиеся страны третьего мира и по сей день остаются уделом либералов, которые жаждут быть описаны максимально подробно.'
        },
        {
            id: 2,
            name: 'Peter Barker',
            desc: 'А также сторонники тоталитаризма в науке, инициированные исключительно синтетически, объективно рассмотрены соответствующими инстанциями!'
        },
        {
            id: 3,
            name: 'Mark Ferguson',
            desc: 'Также как понимание сути ресурсосберегающих технологий, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для экспериментов, поражающих по своей масштабности и грандиозности.'
        },
        {
            id: 4,
            name: 'Brett Ramsey',
            desc: 'Как принято считать, акционеры крупнейших компаний рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.'
        }
    ];

    const slide = $('#slide-team');
    const name = $("#item-name");
    const desc = $("#item-desc");

    const changeText = (title='', description='') => {
        name.text(title);
        desc.text(description);
    };

    const setText = (slick) => {
        slick.$slides.each((index, item) => {
            let elem = $(item).find('.b-slide-team__item');
            let dataId = elem.data('id');

            if(elem.closest('.slick-slide').hasClass('slick-center')) {
                team.forEach((el) => {
                    if(el.id == dataId) {
                        changeText(el.name, el.desc)
                    }
                });
            }
        });
    };

    slide.on('init', function (event, slick) {
        setText(slick);
    });

    slide.slick({
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    });

    slide.on('afterChange', function (event, slick) {
        setText(slick);
    })

})();

(() => {
    const btn = $('#mobile');
    const blockMenu = $('#mobile-container');
    const wrapperMenu = $('#mobile-wrapper');
    if(btn) {
        btn.on('click', () => {
            blockMenu.toggleClass('open');
            document.body.classList.toggle('mobile-open');
        });

        wrapperMenu.on('click', function(e) {
            if(e.target === this) {
                blockMenu.toggleClass('open');
                document.body.classList.toggle('mobile-open');
            }
        })
    }
})();
  
  