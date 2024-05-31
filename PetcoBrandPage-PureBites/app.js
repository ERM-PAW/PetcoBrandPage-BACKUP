// start parent tab cat & dog js //
document.addEventListener("DOMContentLoaded", function () {
  filterBestCat("citrus_purebites_cat_all_recipes");
});
function filterBestCat(c) {
  var x, i;
  x = document.getElementsByClassName("filterBestCatDiv_citrus_purebites");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClassBestCat(x[i], "citrusPurebite21_show");
    if (x[i].className.indexOf(c) > -1)
      AddClassCatBest(x[i], "citrusPurebite21_show");
  }
  // change tab image call default tab category
  if (c == "citrus_purebitescat_dry_citrus22") {
    filterTabProduct("all_cats_citrus21_purebites");
  } else if (c == "citrus_purebites_cat_all_recipes") {
    filterTabProduct("citrus_purebites_frozen_raw_meals");
  }
}

function AddClassCatBest(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClassBestCat(element, name) {
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
var catBtnContainer = document.getElementById(
  "catBestBtnContainer_citrus22_purebites"
);
var catBestBtns = catBtnContainer.getElementsByClassName(
  "MiCS_cat_best_tab_item_citrus_purebites"
);
for (var i = 0; i < catBestBtns.length; i++) {
  catBestBtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName(
      "MiCS_cat_best_tab_item_active_citrus_purebites"
    );
    current[0].className = current[0].className.replace(
      " MiCS_cat_best_tab_item_active_citrus_purebites",
      ""
    );
    this.className += " MiCS_cat_best_tab_item_active_citrus_purebites";
  });
}
// End parent tab cat & dog js //

// tab carocel js
var splides = document.querySelectorAll(".cirtus__tabs");
if (splides.length) {
  for (var i = 0; i < splides.length; i++) {
    var splideElement = splides[i];
    var splideDefaultOptions = {
      arrows: true,
      type: "slide",
      start: 0,
      pagination: false,
      rewindSpeed: 500,
      speed: 500,
      pauseOnHover: true,
      perPage: 5,
      perMove: 1,
      gap: 10,
      omitEnd: true,
      breakpoints: {
        375: {
          focus: 0,
          perPage: 1.5,
        },
        576: {
          focus: 0,
          perPage: 1.75,
        },
        768: {
          perPage: 3,
        },
        991: {
          perPage: 3,
        },
        992: {
          perPage: 3,
        },
        1024: {
          perPage: 5,
        },
        1200: {
          perPage: 5,
        },
        1440: {
          perPage: 5,
        },
      },
    };

    new Splide(splideElement, splideDefaultOptions).mount();
  }
}
//for tab switcher
document.addEventListener("DOMContentLoaded", function () {
  filterTabProduct("citrus_purebites_frozen_raw_meals");
});

function filterTabProduct(c) {
  var x, i;
  x = document.getElementsByClassName("citrus_purebitsinner-item");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClassBestDog(x[i], "citrusTabshow");
    if (x[i].className.indexOf(c) > -1) AddClassDogBest(x[i], "citrusTabshow");
  }
}

function AddClassDogBest(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClassBestDog(element, name) {
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
var dogBtnContainer = document.getElementById(
  "dogBestBtnContainer_citrus_purebites"
);
var dogBestbtns = dogBtnContainer.getElementsByClassName(
  "MiCS_tab_item_citrus_purebites"
);
for (var i = 0; i < dogBestbtns.length; i++) {
  dogBestbtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName(
      "MiCS_tab_item_active_citrus_purebites"
    );
    current[0].className = current[0].className.replace(
      " MiCS_tab_item_active_citrus_purebites",
      ""
    );
    this.className += " MiCS_tab_item_active_citrus_purebites";
  });
}

// End child tab for Dog js //
// Add active class to the current button (highlight it)
var catfoodButtonContainer = document.getElementById(
  "catFoodBtnContainer_citrus21_purebites"
);
var catFoodbtns = catfoodButtonContainer.getElementsByClassName(
  "MiCS_cat_food_tab_citrus21_purebites"
);
for (var i = 0; i < catFoodbtns.length; i++) {
  catFoodbtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName(
      "MiCS_cat_food_tab_citrus21_active_citrus21_purebites"
    );
    current[0].className = current[0].className.replace(
      " MiCS_cat_food_tab_citrus21_active_citrus21_purebites",
      ""
    );
    this.className += " MiCS_cat_food_tab_citrus21_active_citrus21_purebites";
  });
}

// Slider scripts Raw JS

let citrus_pureBites_carousel = document.querySelector(
  ".citrus_pureBites_carousel"
);

let citrus_pureBites_carouselInner = document.querySelector(
  ".citrus_pureBites_carousel-inner"
);

let prev = document.querySelector(".citrus_pureBites_carousel-controls .prev");

let next = document.querySelector(".citrus_pureBites_carousel-controls .next");

let slides = document.querySelectorAll(
  ".citrus_pureBites_carousel-inner .citrus_pureBites_carousel-item"
);

let totalSlides = slides.length;

let step = 100 / totalSlides;

let activeSlide = 0;

let activeIndicator = 0;

let direction = -1;

let jump = 1;

let interval = 5000;

let time;

//Init citrus_pureBites_carousel
citrus_pureBites_carouselInner.style.minWidth = totalSlides * 100 + "%";
loadIndicators();
loop(true);

//citrus_pureBites_carousel events

document.addEventListener("DOMContentLoaded", function () {
  citrus_pureBites_carousel.style.display = "flex";
});

next.addEventListener("click", () => {
  slideToNext();
});

prev.addEventListener("click", () => {
  slideToPrev();
});

citrus_pureBites_carouselInner.addEventListener("transitionend", () => {
  if (direction === -1) {
    if (jump > 1) {
      for (let i = 0; i < jump; i++) {
        activeSlide++;
        citrus_pureBites_carouselInner.append(
          citrus_pureBites_carouselInner.firstElementChild
        );
      }
    } else {
      activeSlide++;
      citrus_pureBites_carouselInner.append(
        citrus_pureBites_carouselInner.firstElementChild
      );
    }
  } else if (direction === 1) {
    if (jump > 1) {
      for (let i = 0; i < jump; i++) {
        activeSlide--;
        citrus_pureBites_carouselInner.prepend(
          citrus_pureBites_carouselInner.lastElementChild
        );
      }
    } else {
      activeSlide--;
      citrus_pureBites_carouselInner.prepend(
        citrus_pureBites_carouselInner.lastElementChild
      );
    }
  }

  citrus_pureBites_carouselInner.style.transition = "none";
  citrus_pureBites_carouselInner.style.transform = "translateX(0%)";
  setTimeout(() => {
    jump = 1;
    citrus_pureBites_carouselInner.style.transition = "all ease .5s";
  });
  updateIndicators();
});

document
  .querySelectorAll(".citrus_pureBites_carousel-indicators span")
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      let slideTo = parseInt(e.target.dataset.slideTo);

      let indicators = document.querySelectorAll(
        ".citrus_pureBites_carousel-indicators span"
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

citrus_pureBites_carousel.addEventListener("mouseover", () => {
  loop(false);
});

citrus_pureBites_carousel.addEventListener("mouseout", () => {
  loop(true);
});

//citrus_pureBites_carousel functions

function loadIndicators() {
  slides.forEach((slide, index) => {
    if (index === 0) {
      document.querySelector(
        ".citrus_pureBites_carousel-indicators"
      ).innerHTML += `<span data-slide-to="${index}" class="active"></span>`;
    } else {
      document.querySelector(
        ".citrus_pureBites_carousel-indicators"
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
    .querySelector(".citrus_pureBites_carousel-indicators span.active")
    .classList.remove("active");
  document
    .querySelectorAll(".citrus_pureBites_carousel-indicators span")
    [activeSlide].classList.add("active");
}

function slideToNext() {
  if (direction === 1) {
    direction = -1;
    citrus_pureBites_carouselInner.prepend(
      citrus_pureBites_carouselInner.lastElementChild
    );
  }

  citrus_pureBites_carousel.style.justifyContent = "flex-start";
  citrus_pureBites_carouselInner.style.transform = `translateX(-${step}%)`;
}

function slideToPrev() {
  if (direction === -1) {
    direction = 1;
    citrus_pureBites_carouselInner.append(
      citrus_pureBites_carouselInner.firstElementChild
    );
  }
  citrus_pureBites_carousel.style.justifyContent = "flex-end";
  citrus_pureBites_carouselInner.style.transform = `translateX(${step}%)`;
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
