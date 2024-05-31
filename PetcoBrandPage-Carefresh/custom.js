document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".citrusCarefresh__shopContainer", {
    rewind: true,
    type: "loop",
    autoplay: false,
    rewindSpeed: 5000,
    speed: 2500,
    pauseOnHover: false,
    perPage: 6,
    perMove: 1,
    pagination: false,
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
        perPage: 4,
      },
      1200: {
        perPage: 4,
      },
    },
  });
  splide.mount();
});
