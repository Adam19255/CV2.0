const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");
const mainSection = document.querySelector("main");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";

  // Adjust main section margin-top based on the navbar height
  const navbarHeight = document.querySelector(".navbar").offsetHeight;
  mainSection.style.marginTop = isOpen ? navbarHeight + 30 + "px" : "0";
};
