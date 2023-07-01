const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const body = document.querySelector(".body");
const slider = document.querySelector(".hero__swiper");
const slider1 = document.querySelector(".gallery__swiper");
const slider2 = document.querySelector(".events__swiper");
const slider3 = document.querySelector(".partners__swiper");
const searchOpen = document.querySelector(".header__search");
const search = document.querySelector(".search");
const searchClose = document.querySelector(".search__close");
const navItems = document.querySelectorAll(".header__link");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";
const select = document.querySelector(".gallery__select");
const accordion = document.querySelector(".catalog__list");
const tooltip = document.querySelectorAll(".tooltip");
const tooltipClose = document.querySelectorAll(".close-tooltip");


burger.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger.classList.toggle("burger__active");
  menu.classList.toggle("header__menu--visible");
});

navItems.forEach((el) => {
  el.addEventListener("click", () => {
    body.classList.remove("stop-scroll");
    burger.classList.remove("burger__active");
    menu.classList.remove("header__menu--visible");
  });
});

const params = {
  btnClassName: "submenu__btn",
  dropClassName: "submenu__dropdown",
  activeClassName: "is-active",
  disabledClassName: "is-disabled",
};

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
      params.disabledClassName,
      params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
      `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );

    if (
      activeElements.length &&
      !evt.target.closest(`.${params.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
      );

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();

searchOpen.addEventListener("click", () => {
  search.classList.add("search--open");
});

searchClose.addEventListener("click", () => {
  search.classList.remove("search--open");
});

let mySwiper = new Swiper(slider, {
  speed: 2000,
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  allowTouchMove: false,
  autoplay: {
    delay: 6000,
  },
});

let mySwiper1 = new Swiper(slider1, {
  speed: 800,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".gallery__button-next",
    prevEl: ".gallery__button-prev",
  },

  pagination: {
    el: ".gallery__pagination",
    type: "fraction",
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    768: {
      spaceBetween: 38,
    },

    992: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    1400: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

let mySwiper2 = new Swiper(slider2, {
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".events__button-next",
    prevEl: ".events__button-prev",
  },

  pagination: {
    el: ".events__pagination",
    type: "bullets",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    992: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 27,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

let mySwiper3 = new Swiper(slider3, {
  speed: 900,
  slidesPerView: 1,
  navigation: {
    nextEl: ".partners__button-next",
    prevEl: ".partners__button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 23,
    },
  },
});

const choices = new Choices(select, {
  searchEnabled: false,
});

(() => {
  new Accordion(".accordion", {
    openOnInit: [0],
  });
})();

document.querySelectorAll(".artists__btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll(".artists__btn").forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    document.querySelectorAll(".tabs__item").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("active");
    });

    document.querySelector(`[data-target="${path}"]`).classList.add("active");
  });
});

// (() => {
// 	const MOBILE_WIDTH = 580;

// 	function getWindowWidth () {
// 	  return Math.max(
// 	    document.body.scrollWidth,
// 	    document.documentElement.scrollWidth,
// 	    document.body.offsetWidth,
// 	    document.documentElement.offsetWidth,
// 	    document.body.clientWidth,
// 	    document.documentElement.clientWidth
// 	  );
// 	}

// 	function scrollToContent (link, isMobile) {
// 		if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
// 			return;
// 		}

// 	  const href = link.getAttribute('href').substring(1);
// 	  const scrollTarget = document.getElementById(href);
// 	  const elementPosition = scrollTarget.getBoundingClientRect().top;

// 	  window.scrollBy({
// 	      top: elementPosition,
// 	      behavior: 'smooth'
// 	  });
// 	}

// 	document.querySelectorAll('.js-scroll-link').forEach(link => {
// 	  link.addEventListener('click', function(e) {
// 	      e.preventDefault();

// 	      scrollToContent(this, true);
// 	  });
// 	});
// })();

(() => {})();

tippy(".projects__tooltip-btn", {
  arrow: true,
  trigger: "click",
  maxWidth: 240,
});


let tooltipbtns = document.querySelectorAll('.tooltip');
tooltipbtns.forEach(tooltip => {
  tooltip.addEventListener('click', function () {
    tooltipbtns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active')
   });
});

// var btn = document.getElementsByClassName("btn");
// var actives = document.getElementsByClassName('active');
// for (i = 0; btn.length > i; i++) {
//   btn[i].onclick = function() {
//     var currentActive = actives[0];
//     if (currentActive)
//       currentActive.classList.remove("active");

//     if (currentActive !== this)
//       this.classList.add("active");
//   };
// }

let validation = new JustValidate("#form");
let selector = document.querySelector("#phone");
let im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

validation
  .addField("#name", [
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Минимум 2 символа",
    },
    {
      rule: "maxLength",
      value: 25,
      errorMessage: "Максимум 25 символов",
    },
    {
      rule: "required",
      errorMessage: "Вы не ввели имя",
    },
  ])
  .addField("#phone", [
    {
      rule: "required",
      errorMessage: "Вы не ввели телефон",
    },
    {
      rule: "function",
      validator: function () {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: "Введите 10 символов",
    },
  ]);

// .onSuccess((event) => {
//   console.log("Validation passes and form submitted");
//   let formData = new FormData(event.target);
//   console.log(...formData);
//   let xhr = new XMLHttpRequest();

//   xml.onreadystatechange = function () {
//     if (xhl.readyState === 4) {
//       if (xhr.status === 200) {
//         console.log("Отправлено");
//       }
//     }
//   };
//   xhr.open("POST", "mail.php", true);
//   xhr.send(formData);

//   event.target.reset();

//   formData.reset();
// });

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76245755138266, 37.61470697677171],
    zoom: 13,
  });

  var myPlacemark = new ymaps.Placemark(
    [55.76245755138266, 37.61470697677171],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/svg/pin.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -10],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable("scrollZoom");
  myMap.controls.remove("searchControl");
  myMap.controls.remove("trafficControl");
  myMap.controls.remove("typeSelector");
  myMap.controls.remove("fullscreenControl");
  myMap.controls.remove("rulerControl");
}

document.querySelectorAll(".dropdown__simplebar").forEach((dropdowns) => {
  new SimpleBar(dropdowns, {
    autoHide: false,
    scrollbarMaxSize: 25,
  });
});
