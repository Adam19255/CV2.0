$(".hamburger").on("click", function (e) {
  console.log("hotdog");
  // prevents default behavior of the element
  e.preventDefault();
  $(this).toggleClass("open");

  $(".nav-items").slideToggle();
  $(".overlay").toggleClass("darken");
});

$(".nav-items li a, .overlay").on("click", function (e) {
  if (windowSize() < 1023) {
    closeNavbar();
  }
});

$(window).on("resize", function (e) {
  if (windowSize() > 1023) {
    $(".nav-items").addClass("flex");
  } else {
    $(".nav-items").removeClass("flex");
    $(".nav-items").hide();
    closeNavbar();
  }
});

$("#contact-form").on("submit", function (e) {
  e.preventDefault();
  $(".popup").fadeIn();
  $(".overlay").addClass("darken");
});

$(".popup-content a, .overlay").on("click", function (e) {
  $(".popup").fadeOut();
  $(".overlay").removeClass("darken");
});

$(document).on("keydown", function (e) {
  // exit of Escape keypress
  if (e.keyCode === 27) {
    $(".popup").fadeOut();
    $(".overlay").removeClass("darken");
  }
});

function closeNavbar() {
  $(".hamburger").removeClass("open");
  $(".nav-items").slideUp();
  $(".overlay").removeClass("darken");
}

function windowSize() {
  return window.innerWidth;
}
