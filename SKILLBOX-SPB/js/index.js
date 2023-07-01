
const swiper = new Swiper('.about-city__swiper', {
  speed: 1500,
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  autoplay: {
    delay: 6000,
  },

    navigation: {
      nextEl: ".about-city__swiper-button-next",
      prevEl: ".about-city__swiper-button-prev",
    }
  });

  ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.9388,30.29],
    zoom: 12.27,
  });

  var myPlacemark = new ymaps.Placemark(
    [59.94336596006021,30.319516332397395],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/placemark.svg",
      iconImageSize: [30, 65],
      iconImageOffset: [0, -60],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  // myMap.behaviors.disable("scrollZoom");
  myMap.controls.remove("searchControl");
  myMap.controls.remove("trafficControl");
  myMap.controls.remove("typeSelector");
  myMap.controls.remove("fullscreenControl");
  myMap.controls.remove("rulerControl");
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('geolocationControl');

}

new WOW().init();


