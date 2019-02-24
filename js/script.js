$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000
    });
    $(".menu-icon").on("click", function() {
      $("nav ul").toggleClass("showing");
      })

      $(window).on("scroll", function() {
        if($(window).scrollTop()) {
          $('nav').addClass('black');
        }
        else {
          $('nav').removeClass('black');
        }
      })

  let typed = new Typed(".typed", {
      strings: ["Web-Developer.", "Front-End Developer.", "Learner."],
      typeSpeed: 70,
      loop: true,
      startDelay: 1000,
      showCursor: false
    });

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
      }
    })

        $(".counter").each(function () {
          let element = $(this);
          let endVal = parseInt(element.text());

          element.countup(endVal);
      });

      $("[data-fancybox]").fancybox();

      $(".items").isotope({
        filter: "*",
        animationOptions: {
          duration: 1500,
          easing: 'linear',
          queue: false
        }
        });
$("#filters a").click(function() {
  $("#filters .current").removeClass("current");
  $(this).addClass("current");

  let selector = $(this).attr("data-filter");

  $(".items").isotope({
    filter: selector,
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false,
    }
    });
    return false;
  });
  });
