$(".hamburger").on("click", function (e) {
  // prevents default behavior of the element
  e.preventDefault();
  $(this).toggleClass("open");
  $("html").addClass("disable-scroll");
  $(".nav-items").slideToggle();
  $(".overlay").addClass("darken");
});

$(".nav-items li a, .overlay").on("click", function (e) {
  if (windowSize() < 1023) {
    closeNavbar();
  }
});

$(window).on("resize", function (e) {
  if (!$(".popup").length > 0) {
    if (windowSize() > 1023) {
      $(".nav-items").addClass("flex");
    } else {
      $(".nav-items").removeClass("flex");
      $(".nav-items").hide();
      closeNavbar();
    }
  }
});

$("#contact-form").on("submit", function (e) {
  e.preventDefault();
  $("html").addClass("disable-scroll");
  $(".popup").fadeIn();
  $(".overlay").addClass("darken");
});

$(".popup-content a, .overlay").on("click", function (e) {
  $(".popup").fadeOut();
  $("html").removeClass("disable-scroll");
  $(".overlay").removeClass("darken");
});

$(document).on("keydown", function (e) {
  // exit on Escape keypress
  if (e.keyCode === 27) {
    $(".popup").fadeOut();
    $("html").removeClass("disable-scroll");
    $(".overlay").removeClass("darken");
  }
});

function closeNavbar() {
  $("html").removeClass("disable-scroll");
  $(".hamburger").removeClass("open");
  $(".nav-items").slideUp();
  $(".overlay").removeClass("darken");
}

function windowSize() {
  return window.innerWidth;
}
