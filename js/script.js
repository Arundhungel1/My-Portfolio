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
  let typed3 = new Typed('#typed3', {
   strings: ['Hello', '<i>Holla</i>', '<i>你好</i>','<i>Bonjour</i>','<i>Hallo</i>','<strong>नमस्ते</strong>'],
   typeSpeed: 0,
   backSpeed: 0,
   smartBackspace: true, // this is a default
   loop: true,
   showCursor: false
 });

  let typed = new Typed(".typed", {
      strings: ["A Web-Developer.", "A Front-End Developer.", "A Learner."],
      typeSpeed: 70,
      loop: true,
      startDelay: 1000,
      showCursor: false
    });
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
