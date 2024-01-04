$(".hamburger").on("click", function (e) {
  // prevents default behavior of the element
  e.preventDefault();
  $(this).toggleClass("open");

  $(".nav-items").slideToggle();
  $(".overlay").toggleClass("darken");
});

$(".nav-items li a, .overlay").on("click", function (e) {
  $(".hamburger").removeClass("open");
  $(".nav-items").slideUp();
  $(".overlay").removeClass("darken");
});
