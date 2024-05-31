/*----------------------
---- RoW slider js -----
------------------------*/
let citrusRoyal_carousel = document.querySelector(".citrusRoyal_carousel");

let citrusRoyal_carouselInner = document.querySelector(
  ".citrusRoyal_carousel-inner"
);

let prev = document.querySelector(".citrusRoyal_carousel-controls .prev");

let next = document.querySelector(".citrusRoyal_carousel-controls .next");

let slides = document.querySelectorAll(
  ".citrusRoyal_carousel-inner .citrusRoyal_carousel-item"
);

let totalSlides = slides.length;

let step = 100 / totalSlides;

let activeSlide = 0;

let activeIndicator = 0;

let direction = -1;

let jump = 1;

let interval = 5000; /*5000*/

let time;

//Init citrusRoyal_carousel
citrusRoyal_carouselInner.style.minWidth = totalSlides * 100 + "%";
loadIndicators();
loop(true);

//citrusRoyal_carousel events

next.addEventListener("click", () => {
  slideToNext();
});

prev.addEventListener("click", () => {
  slideToPrev();
});

citrusRoyal_carouselInner.addEventListener("transitionend", () => {
  if (direction === -1) {
    if (jump > 1) {
      for (let i = 0; i < jump; i++) {
        activeSlide++;
        citrusRoyal_carouselInner.append(
          citrusRoyal_carouselInner.firstElementChild
        );
      }
    } else {
      activeSlide++;
      citrusRoyal_carouselInner.append(
        citrusRoyal_carouselInner.firstElementChild
      );
    }
  } else if (direction === 1) {
    if (jump > 1) {
      for (let i = 0; i < jump; i++) {
        activeSlide--;
        citrusRoyal_carouselInner.prepend(
          citrusRoyal_carouselInner.lastElementChild
        );
      }
    } else {
      activeSlide--;
      citrusRoyal_carouselInner.prepend(
        citrusRoyal_carouselInner.lastElementChild
      );
    }
  }

  citrusRoyal_carouselInner.style.transition = "none";
  citrusRoyal_carouselInner.style.transform = "translateX(0%)";
  setTimeout(() => {
    jump = 1;
    citrusRoyal_carouselInner.style.transition = "all ease .5s";
  });
  updateIndicators();
});

document
  .querySelectorAll(".citrusRoyal_carousel-indicators span")
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      let slideTo = parseInt(e.target.dataset.slideTo);
      let indicators = document.querySelectorAll(
        ".citrusRoyal_carousel-indicators span"
      );

      indicators.forEach((item, index) => {
        if (item.classList.contains("active")) {
          activeIndicator = index;
        }
      });
      if (slideTo - activeIndicator > 1) {
        jump = slideTo - activeIndicator;
        step = jump * step;
        slideToNext();
      } else if (slideTo - activeIndicator === 1) {
        slideToNext();
      } else if (slideTo - activeIndicator < 0) {
        if (Math.abs(slideTo - activeIndicator) > 1) {
          jump = Math.abs(slideTo - activeIndicator);
          step = jump * step;
          slideToPrev();
        }
        slideToPrev();
      }
      step = 100 / totalSlides;
    });
  });

citrusRoyal_carousel.addEventListener("mouseover", () => {
  loop(false);
});

citrusRoyal_carousel.addEventListener("mouseout", () => {
  loop(true);
});

//citrusRoyal_carousel functions

function loadIndicators() {
  slides.forEach((slide, index) => {
    if (index === 0) {
      document.querySelector(
        ".citrusRoyal_carousel-indicators"
      ).innerHTML += `<span data-slide-to="${index}" class="active"></span>`;
    } else {
      document.querySelector(
        ".citrusRoyal_carousel-indicators"
      ).innerHTML += `<span data-slide-to="${index}"></span>`;
    }
  });
}

function updateIndicators() {
  if (activeSlide > totalSlides - 1) {
    activeSlide = 0;
  } else if (activeSlide < 0) {
    activeSlide = totalSlides - 1;
  }
  document
    .querySelector(".citrusRoyal_carousel-indicators span.active")
    .classList.remove("active");
  document
    .querySelectorAll(".citrusRoyal_carousel-indicators span")
    [activeSlide].classList.add("active");
}

function slideToNext() {
  if (direction === 1) {
    direction = -1;
    citrusRoyal_carouselInner.prepend(
      citrusRoyal_carouselInner.lastElementChild
    );
  }

  citrusRoyal_carousel.style.justifyContent = "flex-start";
  citrusRoyal_carouselInner.style.transform = `translateX(-${step}%)`;
}

function slideToPrev() {
  if (direction === -1) {
    direction = 1;
    citrusRoyal_carouselInner.append(
      citrusRoyal_carouselInner.firstElementChild
    );
  }
  citrusRoyal_carousel.style.justifyContent = "flex-end";
  citrusRoyal_carouselInner.style.transform = `translateX(${step}%)`;
  loop(false);
}

function loop(status) {
  if (status === true) {
    time = setInterval(() => {
      slideToNext();
    }, interval);
  } else {
    clearInterval(time);
  }
}
// pov loader add. before full load js pov none.
document.addEventListener("DOMContentLoaded", function () {
  citrusRoyal_carousel.style.display = "flex";
});

/*-----------------------
--- End Row js Slider ----
------------------------*/

/**----------------------
 * product scroller js ---
 --------------------------*/
// tab carousal js
var splides = document.querySelectorAll(".citrusRoyal__Products");
if (splides.length) {
  for (var i = 0; i < splides.length; i++) {
    var splideElement = splides[i];
    var splideDefaultOptions = {
      rewind: true,
      arrows: false,
      type: "slide",
      perPage: 6,
      perMove: 1,
      start: 0,
      focus: 0,
      gap: "1rem",
      omitEnd: false,
      breakpoints: {
        375: {
          perPage: 1,
        },
        576: {
          perPage: 2,
        },
        991: {
          perPage: 3,
        },
        992: {
          perPage: 3,
        },
        1024: {
          perPage: 4,
        },
        1200: {
          perPage: 6,
        },
        1440: {
          perPage: 6,
        },
      },
    };

    new Splide(splideElement, splideDefaultOptions).mount();
  }
}
/* ************************************************************************************** */
//for tab sweater & loader added
document.addEventListener("DOMContentLoaded", function () {
  filterProduct("royal-dog-breed");
});
// for dog filter function
function filterProduct(c) {
  var x, i;
  x = document.getElementsByClassName("citrusRoyal__Product");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "citrusTabShow");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], " citrusTabShow");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
document.addEventListener("DOMContentLoaded", function () {
  // for dog active class filter
  var dogBtnContainer = document.getElementById("citrusRoyalTabId");
  var dogBtns = dogBtnContainer.getElementsByClassName("citrusRoyal__tab_item");

  addActiveClass(dogBtns, "citrusRoyal__active_tab");
});
function addActiveClass(element, activeClass) {
  for (var i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function () {
      var current = document.getElementsByClassName(activeClass);
      current[0].className = current[0].className.replace(
        " " + activeClass,
        ""
      );
      this.className += " " + activeClass;
    });
  }
}
//for Dog best seller tab switcher
