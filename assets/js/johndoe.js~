/*!
  =========================================================

  * Copyright: 2024 niteflyunicorns
  * Coded by niteflyunicorns

  =========================================================
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});


// // NAVBAR visibility function
// $(document).ready(function() {
//     var currentPage = window.location.pathname.split("/").pop();
//     var navbar = document.getElementById("navbar");
//     const activeLink = document.querySelector(".nav-link.active");

//     navbar.style.display = "none";
//     navbar.style.opacity = 0;

//     console.log("Current Page:", currentPage);
//     console.log("Navbar Element:", navbar);

//     if (currentPage === 'about.html') {
// 	// about navbar shows after scroll
// 	window.addEventListener("scroll", function() {
// 	    var scroll = window.scrollY;
// 	    console.log("Scroll Position:", scroll);
// 	    if (scroll > 100 ) {
// 		navbar.style.display = "block";
// 		navbar.style.opacity = 1;
// 		navbar.style.transition = "opacity 0.7s ease, display 0.7s";
// 		console.log("Navbar displayed");
// 	    } else {
// 		navbar.style.display = "none";
// 		navbar.style.opacity = 0;
// 		navbar.style.transition = "opacity 0.7s ease, display 0.7s";
// 		console.log("Navbar hidden");
// 	    }
// 	});
//     }
//     else {
// 	// sticky navbar with fade
// 	document.addEventListener("DOMContentLoaded", function () {
// 	    var fadeStart = 100; // Start fading after 100px of scrolling
// 	    var fadeEnd = 300; // Fully fade out at 300px of scrolling
// 	    var fadeDiff = fadeEnd - fadeStart;

// 	    window.addEventListener("scroll", function () {
// 		var offset = window.pageYOffset;
		
// 		if (offset <= fadeStart) {
// 		    // Fully visible
// 		    navbar.style.opacity = 1;
// 		} else if (offset >= fadeEnd) {
// 		    // Fully faded
// 		    navbar.style.opacity = 0;
// 		} else {
// 		    // Fade between fadeStart and fadeEnd
// 		    navbar.style.opacity = 1 - (offset - fadeStart) / fadeDiff;
// 		}

// 		// if ( activeLink ) {
// 		//     activeLink.classList.add("active");
// 		// }
// 	    });

// 	});

// 	if ( activeLink ) {
// 	    activeLink.classList.add("active");
// 	}
//     }
// });


// Function to handle navbar visibility on about.html
function handleAboutNavbar() {
    var $navbar = $("#navbar");
    const $activeLink = $(".nav-link.active");

    // Initially hide the navbar
    $navbar.hide();
    $navbar.css("opacity", 0);

    // Show or hide navbar based on scroll position
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $navbar.show().css("opacity", 1).css("transition", "opacity 0.7s ease, display 0.7s");
	    if ($activeLink.length) {
		$activeLink.addClass("active");
	    }
        } else {
            $navbar.hide().css("opacity", 0).css("transition", "opacity 0.7s ease, display 0.7s");
        }
    });
}

// Function to handle sticky navbar with fade
function handleStickyNavbar() {
    var $navbar = $("#navbar");
    const $activeLink = $(".nav-link.active");
    var fadeStart = 100; // Start fading after 100px of scrolling
    var fadeEnd = 300; // Fully fade out at 300px of scrolling
    var fadeDiff = fadeEnd - fadeStart;

    // Initially fully visible
    $navbar.css("opacity", 1);
    if ($activeLink.length) {
        $activeLink.addClass("active");
    }

    // Adjust navbar opacity based on scroll position
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll <= fadeStart) {
            // Fully visible
            $navbar.css("opacity", 1);
        } else if (scroll >= fadeEnd) {
            // Fully faded
            $navbar.css("opacity", 0);
        } else {
            // Fade between fadeStart and fadeEnd
            $navbar.css("opacity", 1 - (scroll - fadeStart) / fadeDiff);
        }
	if ($activeLink.length) {
            $activeLink.addClass("active");
	}
    });

    if ($activeLink.length) {
        $activeLink.addClass("active");
    }
}

// Determine which function to call based on the current page
$(document).ready(function() {
    var currentPage = window.location.pathname.split("/").pop();

    if (currentPage === 'about.html') {
        handleAboutNavbar();
    }
    // if ( currentPage === 'index.html' ) {
    // 	handleAboutNavbar();
    // }
    else {
        handleStickyNavbar();
    }
});


// // fade between pages
// document.addEventListener("DOMContentLoaded", function () {
//   var links = document.querySelectorAll(".fade-link");
//   var wrapper = document.querySelectorAll(".container-fluid");

//   links.forEach(function (link) {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();
//       var href = this.href;

//       wrapper.classList.add("fade-out");

//       setTimeout(function () {
//         window.location = href;
//       }, 500); // Match this duration with the CSS transition time
//     });
//   });
// });



// portfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

// typing animation 
var typed = $(".typed");

$(function() {
    typed.typed({
	strings: ["Animator.", "Mathematician.", "Developer.", "Savannah,"],
	typeSpeed: 30,
	loop: false,
	showCursor: false,
    });
});

