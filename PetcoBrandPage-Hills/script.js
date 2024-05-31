// show video button
function citrusHills_footer_video() {
  var el = event.target.parentElement.querySelector(".show-video");
  console.log(event.target.dataset.id);
  el.style.display = "block";
  el.innerHTML = `
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${event.target.dataset.id}?autoplay=1" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen 
            manual_cm_sp="sponsoredbrandpage:hillssciencediet:sciencelednutrtion:1::video" onclick="clickTrackLink(this);"></iframe>
            `;
}

/*/********************************************/
//  product carousal css
// Species
function filterSpeciesTab(species) {
  // Hide all elements with class="citrusHills__tabcontent_wrapper" by default */
  var i, citrusHills__tabcontent_wrapper, citrusHills__speciesTablinks;
  citrusHills__tabcontent_wrapper = document.getElementsByClassName(
    "citrusHills__tabcontent_wrapper"
  );
  for (i = 0; i < citrusHills__tabcontent_wrapper.length; i++) {
    citrusHills__tabcontent_wrapper[i].style.display = "none";
  }

  // Show the specific tab content
  document.getElementById(species).style.display = "block";
  if (species === "citrusHills__species-dog") {
    filterDogProducts("citrusHills-puppy_Dog-product");
  } else {
    filterProducts("citrusHills-kitten_Cat-product");
  }
}

document.getElementById("defaultOpen").click();

// Add active class to the current button (highlight it)
document.addEventListener("DOMContentLoaded", function () {
  // for dog active class filter
  var dogBtnContainer = document.getElementById("citrusHills__speciesTabBtn");
  var dogBtns = dogBtnContainer.getElementsByClassName(
    "citrusHills__speciesTab_item"
  );
  addActiveClass(dogBtns, "citrusHills__species_active_tab");
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
} //for active tab switcher

/**----------------------
       * product scroller js Dog ---
       --------------------------*/
advanceArrowsDog("citrusHills-puppy_Dog-product");
function advanceArrowsDog(idx) {
  var splideElement = "#" + idx;
  var splideDefaultOptions = {
    arrows: true,
    type: "slide",
    start: 0,
    focus: 0,
    pagination: false,
    rewindSpeed: 500,
    speed: 500,
    pauseOnHover: true,
    perPage: 6,
    perMove: 1,
    gap: 20,
    omitEnd: true,
    breakpoints: {
      375: {
        perPage: 1,
      },
      576: {
        perPage: 1,
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

/* ************************************************************************************** */
//for tab sweater & loader added
document.addEventListener("DOMContentLoaded", function () {
  filterDogProducts("citrusHills-puppy_Dog-product");
});
// for dog filter function
function filterDogProducts(c) {
  var x, y, i, j;
  x = document.getElementsByClassName("citrusHills__dogProduct");

  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "citrusDogTabShow");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], " citrusDogTabShow");
  }
  // for active tab class
  y = document.getElementsByClassName("citrusHills__dog_tab_item");
  for (j = 0; j < y.length; j++) {
    RemoveClass(y[j], "citrusHills__active_tab_dog");
    if (y[j].className.indexOf(c) > -1)
      AddClass(y[j], " citrusHills__active_tab_dog");
  }
  advanceArrowsDog(c);
}

/**----------------------
       * product scroller js Cat ---
       --------------------------*/
advanceArrows("citrusHills-kitten_Cat-product");
function advanceArrows(idx) {
  var splideElement = "#" + idx;
  var splideDefaultOptions = {
    arrows: true,
    type: "slide",
    start: 0,
    focus: 0,
    pagination: false,
    rewindSpeed: 500,
    speed: 500,
    pauseOnHover: true,
    perPage: 6,
    perMove: 1,
    gap: 20,
    omitEnd: true,
    breakpoints: {
      375: {
        perPage: 1,
      },
      576: {
        perPage: 1,
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

/* ************************************************************************************** */
//for tab sweater & loader added
document.addEventListener("DOMContentLoaded", function () {
  filterProducts("citrusHills-kitten_Cat-product");
});
// for cat filter function
function filterProducts(c) {
  var x, y, i, j;
  x = document.getElementsByClassName("citrusHills__Product");

  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "citrusTabShow");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], " citrusTabShow");
  }

  // for active tab class
  y = document.getElementsByClassName("citrusHills__tab_item");
  for (j = 0; j < y.length; j++) {
    RemoveClass(y[j], "citrusHills__active_tab");
    if (y[j].className.indexOf(c) > -1)
      AddClass(y[j], " citrusHills__active_tab");
  }
  advanceArrows(c);
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
// <!-- Quiz Script JS Functionality -->

// <!-- Quiz Modal JS Start -->
// The citrus petco hills modal
let citrus_petco_hills_modal = document.getElementById(
  "citrus_petco_hills_modal"
);
const drawerHandle = document.getElementById("drawerHandle");

let btn = document.getElementById("findFood");

let span = document.getElementsByClassName("close")[0];

if (checkQueryStaringInUrl("findYourPetFood")) {
  citrus_petco_hills_modal.style.display = "block";
}
btn.onclick = function () {
  citrus_petco_hills_modal.style.display = "block";
  citrus_petco_hills_modal.classList.remove("hideModal");
  document.body.style.overflow = "hidden"; // Prevent scrolling
};

span.onclick = function () {
  //   citrus_petco_hills_modal.style.display = "none";
  citrus_petco_hills_modal.classList.add("hideModal");
  document.body.style.overflow = "auto"; // Allow scrolling
  setTimeout(() => {
    citrus_petco_hills_modal.style.display = "none";
  }, 500); // Animation duration in milliseconds
};

function checkQueryStaringInUrl(field) {
  var url = window.location.href;
  if (url.indexOf("?" + field + "=") != -1) return true;
  else if (url.indexOf("&" + field + "=") != -1) return true;
  return false;
}

// JS for Swipe on Mobile
let startY = 0;

document.addEventListener("touchstart", (event) => {
  startY = event.touches[0].clientY;
});

document.addEventListener("touchend", (event) => {
  const endY = event.changedTouches[0].clientY;
  const deltaY = endY - startY;

  if (deltaY > 50 && event.target === drawerHandle) {
    // If swiped down by a certain threshold
    citrus_petco_hills_modal.style.animation = "slideOut 0.4s";
    citrus_petco_hills_modal.classList.add("hideModal");
    document.body.style.overflow = "auto"; // Allow scrolling

    setTimeout(() => {
      citrus_petco_hills_modal.style.display = "none";
      citrus_petco_hills_modal.style.transform = "none"; // Reset the transform
      citrus_petco_hills_modal.style.animation = "none"; //
      citrus_petco_hills_modal.classList.add("hideModal");
    }, 500); // Animation duration in milliseconds
  }
});

// Pov
let citrus_hillsBP_carousel = document.querySelector(
  ".citrus_hillsBP_carousel"
);

let citrus_hillsBP_carouselInner = document.querySelector(
  ".citrus_hillsBP_carousel-inner"
);

let prev = document.querySelector(".citrus_hillsBP_carousel-controls .prev");

let next = document.querySelector(".citrus_hillsBP_carousel-controls .next");

let slides = document.querySelectorAll(
  ".citrus_hillsBP_carousel-inner .citrus_hillsBP_carousel-item"
);

let totalSlides = slides.length;

let step = 100 / totalSlides;

let activeSlide = 0;

let activeIndicator = 0;

let direction = -1;

let jump = 1;

let interval = 7000; //7000

let time;

//Init citrus_hillsBP_carousel
citrus_hillsBP_carouselInner.style.minWidth = totalSlides * 100 + "%";
loadIndicators();
loop(true);

//citrus_hillsBP_carousel events

next.addEventListener("click", () => {
  slideToNext();
});

prev.addEventListener("click", () => {
  slideToPrev();
});

citrus_hillsBP_carouselInner.addEventListener("transitionend", () => {
  if (direction === -1) {
    if (jump > 1) {
      for (let i = 0; i < jump; i++) {
        activeSlide++;
        citrus_hillsBP_carouselInner.append(
          citrus_hillsBP_carouselInner.firstElementChild
        );
      }
    } else {
      activeSlide++;
      citrus_hillsBP_carouselInner.append(
        citrus_hillsBP_carouselInner.firstElementChild
      );
    }
  } else if (direction === 1) {
    if (jump > 1) {
      for (let i = 0; i < jump; i++) {
        activeSlide--;
        citrus_hillsBP_carouselInner.prepend(
          citrus_hillsBP_carouselInner.lastElementChild
        );
      }
    } else {
      activeSlide--;
      citrus_hillsBP_carouselInner.prepend(
        citrus_hillsBP_carouselInner.lastElementChild
      );
    }
  }

  citrus_hillsBP_carouselInner.style.transition = "none";
  citrus_hillsBP_carouselInner.style.transform = "translateX(0%)";
  setTimeout(() => {
    jump = 1;
    citrus_hillsBP_carouselInner.style.transition = "all ease .5s";
  });
  updateIndicators();
});

document
  .querySelectorAll(".citrus_hillsBP_carousel-indicators span")
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      let slideTo = parseInt(e.target.dataset.slideTo);

      let indicators = document.querySelectorAll(
        ".citrus_hillsBP_carousel-indicators span"
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

citrus_hillsBP_carousel.addEventListener("mouseover", () => {
  loop(false);
});

citrus_hillsBP_carousel.addEventListener("mouseout", () => {
  loop(true);
});

//citrus_hillsBP_carousel functions

function loadIndicators() {
  slides.forEach((slide, index) => {
    if (index === 0) {
      document.querySelector(
        ".citrus_hillsBP_carousel-indicators"
      ).innerHTML += `<span data-slide-to="${index}" class="active"></span>`;
    } else {
      document.querySelector(
        ".citrus_hillsBP_carousel-indicators"
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
    .querySelector(".citrus_hillsBP_carousel-indicators span.active")
    .classList.remove("active");
  document
    .querySelectorAll(".citrus_hillsBP_carousel-indicators span")
    [activeSlide].classList.add("active");
}

function slideToNext() {
  if (direction === 1) {
    direction = -1;
    citrus_hillsBP_carouselInner.prepend(
      citrus_hillsBP_carouselInner.lastElementChild
    );
  }

  citrus_hillsBP_carousel.style.justifyContent = "flex-start";
  citrus_hillsBP_carouselInner.style.transform = `translateX(-${step}%)`;
}

function slideToPrev() {
  if (direction === -1) {
    direction = 1;
    citrus_hillsBP_carouselInner.append(
      citrus_hillsBP_carouselInner.firstElementChild
    );
  }
  citrus_hillsBP_carousel.style.justifyContent = "flex-end";
  citrus_hillsBP_carouselInner.style.transform = `translateX(${step}%)`;
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
  citrus_hillsBP_carousel.style.display = "flex";
});
