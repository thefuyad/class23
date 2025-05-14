  var containerEl = document.querySelector('.alamin');

            var mixer = mixitup(containerEl, {
                multifilter: {
                    enable: true
                },
                animation: {
                    effects: 'fade translateZ(-100px)'
                }
            });

$('.sliders').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fa-solid fa-chevron-left prev"></i>',
  nextArrow:'<i class="fa-solid fa-chevron-right next"></i>',
  dots: true,
});