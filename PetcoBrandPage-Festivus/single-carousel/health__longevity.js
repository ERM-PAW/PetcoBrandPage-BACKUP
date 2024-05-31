
/**----------------------
   * product scroller js ---
   --------------------------*/
// tab Carousel js
// initialize product scroller
advanceHealth__longevityArrows("festivus-health__longevity-product");
function advanceHealth__longevityArrows(idx) {
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
    filterHealth__longevityProducts("festivus-health__longevity-product");
});
// for dog filter function

