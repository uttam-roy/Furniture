
$(document).ready(function(){
    
    // Nice Select 
    if ($('.ec-nice-select').length > 0){
        $('.ec-nice-select').niceSelect();
    }

    // Accordion Sub Mobile Menu
    function accordion2() {
        var Accordion2 = function(el, multiple) {
            this.el = el || $(document); 
            this.multiple = multiple || false;
            var links = this.el.find('.mobile-dropitem-a-have-sub');
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
        };
        Accordion2.prototype.dropdown = function(e) {
            var $el = e.data.el,
                $this = $(this), 
                $next = $this.next();
            $next.slideToggle(); 
            $this.parent().toggleClass('active-mobile-sub-submenu'); 
            if (!e.data.multiple) {
                $el.find('.mobile-subdrop-menu').not($next).slideUp().parent().removeClass('active-mobile-sub-submenu');
            }
        };
        $('.mobile-dropdown-menu').each(function() {
            new Accordion2($(this), false); 
        });
    }
    accordion2();
    // Accordion Sub Mobile Menu


    // Mega Dropdown
    function accordion3() {
        var Accordion3 = function(el, multiple) {
            this.el = el || $(document); 
            this.multiple = multiple || false;
            var links = this.el.find('.mega-nav-link-have-sub');
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
        };
        Accordion3.prototype.dropdown = function(e) {
            var $el = e.data.el,
                $this = $(this), 
                $next = $this.next();
            $next.slideToggle(); 
            $this.parent().toggleClass('active-mega-nav-sub'); 
            if (!e.data.multiple) {
                $el.find('.mega-nav-dropdown').not($next).slideUp().parent().removeClass('active-mega-nav-sub');
            }
        };
        $('.mega-nav').each(function() {
            new Accordion3($(this), false); 
        });
    }
    accordion3();
    // Mega Dropdown


    // Shopping Cart Slider 
    if ($('.shopping-cart-slider').length > 0) {
        (function(){
            const prevButton = document.querySelector('.cart-slider-prev-btn');
            const nextButton = document.querySelector('.cart-slider-next-btn');
            const shoppingcart = new Swiper('.shopping-cart-slider', {
              loop: true,
              slidesPerView: 1,
              spaceBetween: 20,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                },
            });
            prevButton.addEventListener('click',()=>{
                shoppingcart.slidePrev();
            });
            nextButton.addEventListener('click',()=>{
                shoppingcart.slideNext();
            });
            const buttonIsEdge = ()=>{
              if( shoppingcart.isBeginning ){
                prevButton.classList.add('is-edge');
              }else{
                prevButton.classList.remove('is-edge');
              }
              if( shoppingcart.isEnd ){
                nextButton.classList.add('is-edge');
              }else{
                nextButton.classList.remove('is-edge');
              }
            }
            buttonIsEdge();
            shoppingcart.on('slideChange',()=>{
              buttonIsEdge();    
            });
        })();

    };


    // Increment decrement 
    // Use event delegation to handle dynamically changing elements
    $(document).on("click", ".quantity-btn", function () {
        var $button = $(this);
        var $input = $button.siblings(".quantity-of-product"); // Find the input in the same container
        var oldValue = parseFloat($input.val()) || 0;

        if ($button.hasClass("inc")) {
            var newVal = oldValue + 1;
        } else {
            newVal = oldValue > 0 ? oldValue - 1 : 0;
        }

        $input.val(newVal);
    });


    // Password Show Hide 
    $(".toggle-password").click(function() {
        $(this).toggleClass("lock unlock");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
    });


    // Image zoom plugin code
    if ($('.image-zoom-active').length > 0){
        let zoomImage = $(".image-zoom-active");
        zoomImage.each(function() {
            $(this).imageZoom({ zoom: 200 });
        });
    };

    

    // Category Slider 
    if ($('.category-slider').length > 0) {
        var category = new Swiper(".category-slider", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            // speed: 1000,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                576: {
                  slidesPerView: 1.5,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                992: {
                  slidesPerView: 2.5,
                  centeredSlides: true,
                },
                1200: {
                  slidesPerView: 3,
                },
            },
        });
    };

    

    // Product Slider 
    if ($('.product-slider').length > 0) {
        var product = new Swiper(".product-slider", {
            slidesPerView: 1,
            spaceBetween: 18,
            // loop: true,
            // speed: 1000,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                576: {
                  slidesPerView: 1.5,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 1.5,
                  centeredSlides: true,
                },
                992: {
                  slidesPerView: 2.5,
                  centeredSlides: true,
                },
                1200: {
                  slidesPerView: 3,
                },
            },
        });
    };



    // Testimonial Slider 
    if ($('.testimonial-slider').length > 0) {
        var testimonial = new Swiper(".testimonial-slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            speed: 1000,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            centeredSlides: true,
            breakpoints: {
                576: {
                  slidesPerView: 1.3,
                },
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 60,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 80,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 117,
                },
            },
        });
    };



 });


// Accordion Mobile Menu 
function accordion() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        // Variables privadas
        var links = this.el.find('.mobile-menuitem-a-have-sub');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el,
            $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('active-mobile-submenu');
        if (!e.data.multiple) {
            $el.find('.mobile-dropdown-menu').not($next).slideUp().parent().removeClass('active-mobile-submenu');
            $el.find('.mobile-dropdown-menu').not($next).slideUp();
        };
    }
    var accordion = new Accordion($('.mobile-menu-ul'), false);
}
accordion();
// Accordion Mobile Menu 



/* Go Top
-------------------------------------------------------------------------------------*/
var goTop = function () {
    if ($("div").hasClass("scroll-progress-wrap")) {
    var progressPath = document.querySelector(".scroll-progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
    var updateprogress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateprogress();
    $(window).scroll(updateprogress);
    var offset = 200;
    var duration = 0;
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > offset) {
        jQuery(".scroll-progress-wrap").addClass("active-scroll-progress");
        } else {
        jQuery(".scroll-progress-wrap").removeClass("active-scroll-progress");
        }
    });
    jQuery(".scroll-progress-wrap").on("click", function (event) {
        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, duration);
        return false;
    });
    }
};

// Dom Ready
$(function () {
    goTop();
});

// Sticky Menu Start
/* Header Sticky */
var headerSticky = function () {
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = $(".menu-header").outerHeight();

    $(window).on("scroll", function () {
        let st = $(window).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta) return;

        if (st > lastScrollTop && st > navbarHeight) {
            $(".menu-header").css("top", `-${navbarHeight + 3}px`);
        } else {
            if (st + $(window).height() < $(document).height()) {
                $(".menu-header").css("top", "0px");
            }
        }
        lastScrollTop = st;
    });
};

/* Header Change Background */
var headerChangeBg = function () {
    $(window).on("scroll", function () {
        $(".menu-header").toggleClass("header-bg", $(window).scrollTop() > 100);
    });
};

/* Small Header Sticky (For Screens < 768px) */
var smallHeaderSticky = function () {
    let lastScrollTop = 0;
    let delta = 5;

    function handleScroll() {
        let st = $(window).scrollTop();
        let navbarHeight = $(".logo-header").outerHeight();

        if (Math.abs(lastScrollTop - st) <= delta) return;

        if (st > lastScrollTop && st > navbarHeight) {
            $(".logo-header").css("top", `-${navbarHeight + 3}px`);
        } else {
            if (st + $(window).height() < $(document).height()) {
                $(".logo-header").css("top", "0px");
            }
        }
        lastScrollTop = st;
    }

    $(window).off("scroll", handleScroll); // Prevent duplicate bindings
    $(window).on("scroll", handleScroll);
};

/* Small Header Change Background */
var smallHeaderChangeBg = function () {
    function handleBgChange() {
        $(".logo-header").toggleClass("header-bg2", $(window).scrollTop() > 100);
    }

    $(window).off("scroll", handleBgChange);
    $(window).on("scroll", handleBgChange);
};

// Reinitialize on Resize (Ensures proper functionality if window size changes)
var handleResize = function () {
    if ($(window).width() < 768) {
        smallHeaderSticky();
        smallHeaderChangeBg();
    } else {
        $(".logo-header").removeAttr("style").removeClass("header-bg2"); // Reset styles for larger screens
    }
};

// DOM Ready
$(function () {
    headerSticky();
    headerChangeBg();
    handleResize(); // Initialize on load

    $(window).on("resize", function () {
        handleResize(); // Recheck on window resize
    });
});
// Sticky Menu End


/*==================================
 Countdown Timer 
==================================*/
document.addEventListener("DOMContentLoaded", () => {
    const offerTimers = document.querySelectorAll(".ec-offer-timer");

    offerTimers.forEach((offerTimer) => {
        const offerDate = new Date(offerTimer.getAttribute("data-offer-date")).getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = offerDate - now;

            if (timeLeft > 0) {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                offerTimer.innerHTML = `<ul>
                    <li>${days}<span>Days</span></li>
                    <li>${String(hours).padStart(2, '0')}<span>Hrs</span></li>
                    <li>${String(minutes).padStart(2, '0')}<span>Min</span></li>
                    <li>${String(seconds).padStart(2, '0')}<span>Sec</span></li>
                </ul>`;
            } else {
                offerTimer.innerHTML = "Offer Expired!";
                clearInterval(intervalId);
            }
        }

        const intervalId = setInterval(updateCountdown, 1000);
        updateCountdown();
    });
});

/*==================================
 Countdown Timer 2
==================================*/
document.addEventListener("DOMContentLoaded", () => {
    const offerTimers2 = document.querySelectorAll(".ec2-offer-timer");

    offerTimers2.forEach((offerTimer) => {
        const offerDate = new Date(offerTimer.getAttribute("data-offer-date")).getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = offerDate - now;

            if (timeLeft > 0) {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                offerTimer.innerHTML = `<ul>
                    <li>${days}<span>Days</span></li>
                    <li>${String(hours).padStart(2, '0')}<span>Hours</span></li>
                    <li>${String(minutes).padStart(2, '0')}<span>Mints</span></li>
                    <li>${String(seconds).padStart(2, '0')}<span>Secs</span></li>
                </ul>`;
            } else {
                offerTimer.innerHTML = "Offer Expired!";
                clearInterval(intervalId);
            }
        }

        const intervalId = setInterval(updateCountdown, 1000);
        updateCountdown();
    });
});





// Wow js Active 
new WOW({
    animateClass: 'animate__animated'
}).init();

// Bootstrap Tooltip active
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map( function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
  trigger : 'hover'
  });
});

// Bootstrap Toasts active
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}