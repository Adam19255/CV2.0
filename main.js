$(".hamburger").on("click", function (e) {
  console.log("hotdog");
  // prevents default behavior of the element
  e.preventDefault();
  $(this).toggleClass("open");

  $(".nav-items").slideToggle();
  $(".overlay").toggleClass("darken");
});

$(".nav-items li a, .overlay").on("click", function (e) {
  closeNavbar();
});

$(window).on("resize", function (e) {
  console.log("resize");
  if (windowSize() > 1023) {
    $(".nav-items").addClass("flex");
  } else {
    $(".nav-items").removeClass("flex");
    $(".nav-items").hide();
    closeNavbar();
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
