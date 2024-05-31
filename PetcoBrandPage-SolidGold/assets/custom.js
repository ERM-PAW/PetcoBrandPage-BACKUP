// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// tab carocel js
var splides = document.querySelectorAll(".cirtus_meet_tabs_22");
if (splides.length) {
  for (var i = 0; i < splides.length; i++) {
    var splideElement = splides[i];
    var splideDefaultOptions = {
      rewind: true,
      type: "slide",
      autoplay: false,
      rewindSpeed: 500,
      speed: 500,
      pauseOnHover: true,
      perPage: 6,
      perMove: 2,
      width: "100%",
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
          perPage: 6,
        },
        1200: {
          perPage: 6,
        },
      },
    };

    new Splide(splideElement, splideDefaultOptions).mount();
  }
}
/* ************************************************************************************** */

// product tab js
//for tab switcher
document.addEventListener("DOMContentLoaded", function () {
  filterBestDog("citrus_all_tab_select");
  filterBestCat("citrus_all_cat");
});

function filterBestDog(c) {
  var x, i;
  x = document.getElementsByClassName("citrusfilterDogDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClassBestDog(x[i], "citrusTabshow");
    if (x[i].className.indexOf(c) > -1) AddClassDogBest(x[i], "citrusTabshow");
  }
}
function filterBestCat(c) {
  var x, i;
  x = document.getElementsByClassName("citrusfilterCatDiv");
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
document.addEventListener("DOMContentLoaded", function () {
  // for dog active class filter
  var dogBtnContainer = document.getElementById("citrusMeetTabId");
  var dogBestbtns = dogBtnContainer.getElementsByClassName(
    "citrus_meet_tab_item"
  );
  // for cat active class
  var catBtnContainer = document.getElementById("citrusMeetTabIdCat");
  var catBestbtns = catBtnContainer.getElementsByClassName(
    "citrus_meet_tab_item"
  );
  addActiveClass(dogBestbtns, "citrus_dog_tab_item_active");
  addActiveClass(catBestbtns, "citrus_cat_tab_item_active");
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

//slider script

new Splide(".splide", {
  type: "loop",
  interval: 5000,
  autoplay: true,
}).mount();
