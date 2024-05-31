/**----------------------
   * product scroller js ---
   --------------------------*/
// tab  carouseljs
// initialize product scroller
advanceArrowsArmHammerScroller("citrus__churchDwight__armHammer_scroller");
function advanceArrowsArmHammerScroller(idx) {
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
    gap: 19,
    perMove: 1,
    omitEnd: true,
    breakpoints: {
      375: {
        perPage: 1,
      },
      576: {
        perPage: 1,
        gap:20
      },
      768: {
        perPage: 3,
        gap:50
      },
      820: {
        gap: 60
      },
      912: {
        perPage: 3,
        gap: 90
      },
      991: {
        perPage: 3,
      },
      992: {
        perPage: 3,
      },
      1024: {
        perPage: 4,
        gap: 40,
      },
      1100: {
        perPage: 4,
        gap: 60,
      },
      1200: {
        perPage: 5,
      },
      1210: {
        gap: 25,
      },
      1280: {
        gap: 40,
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
  filterArm_Hammer_Products("citrus__churchDwight__armHammer_scroller");
});
// for dog filter function
function filterArm_Hammer_Products(c) {
  var x, i;
  x = document.getElementsByClassName("citrus__churchDwight__armHammer_scroller__product");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "citrusTabShow");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], " citrusTabShow");
  }
  advanceArrowsArmHammerScroller(c);
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
//for Dog best seller tab switcher