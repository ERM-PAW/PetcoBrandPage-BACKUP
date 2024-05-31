// initialize product scroller splideJs
advanceArrows("citrusFancy__feast__products");
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
      320: {
        perPage: 1.5,
      },
      425: {
        perPage: 1.5,
      },
      576: {
        perPage: 2,
      },
      700: {
        perPage: 2.5,
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
        perPage: 4,
      },
      1439: {
        perPage: 5,
      },
      1440: {
        perPage: 6,
        // gap:40
      },
    },
  };
  new Splide(splideElement, splideDefaultOptions).mount();
}

/* ************************************************************************************** */

