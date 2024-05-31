/**----------------------
     * product scroller js ---
     --------------------------*/
    // tab Carousel js
    // initialize product scroller
    advanceArrows("nulo-DogFood-product");
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
            gap:20,
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

        // If the add 3rd product then we will skip it
        if(idx==="nulo-CatTreatsFood-product"){
            var splideDefaultOptions = {
                arrows: true,
                type: "slide",
                start: 0,
                focus: 0,
                pagination: false,
                rewindSpeed: 500,
                speed: 500,
                pauseOnHover: true,
                perPage: 5,
                perMove: 1,
                gap:20,
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
                        perPage: 5,
                    },
                    1440: {
                        perPage: 5,
                    },
                },
                
            };
        }
        // at there.

        new Splide(splideElement, splideDefaultOptions).mount();
    }

    /* ************************************************************************************** */
    //for tab sweater & loader added
    document.addEventListener("DOMContentLoaded", function () {
        filterProducts("nulo-DogFood-product");
    });
    // for dog filter function
    function filterProducts(c) {
        var x, i;
        x = document.getElementsByClassName("citrusNulo__Product");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            RemoveClass(x[i], "citrusTabShow");
            if (x[i].className.indexOf(c) > -1) AddClass(x[i], " citrusTabShow");
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

    // Add active class to the current button (highlight it)
    document.addEventListener("DOMContentLoaded", function () {
        // for dog active class filter
        var dogBtnContainer = document.getElementById("citrusNuloTabId");
        var dogBtns = dogBtnContainer.getElementsByClassName("citrusNulo__tab_item");
        addActiveClass(dogBtns, "citrusNulo__active_tab");
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