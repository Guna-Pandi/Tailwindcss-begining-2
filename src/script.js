// mobile menu
const Hamburger = document.querySelector("#hamburger");
const Menu = document.querySelector("#menu");
const Hlink = document.querySelectorAll("#hlink");
const FaBars = document.querySelector(".fa-bars");

Hamburger.addEventListener("click", () => {
  Menu.classList.toggle("hidden");
  FaBars.classList.toggle("fa-xmark");
});

Hlink.forEach((link) => {
  link.addEventListener("click", () => {
    Menu.classList.toggle("hidden");
    FaBars.classList.toggle("fa-xmark");
  });
});

// Testimonials

const userTexts = document.getElementsByClassName("user-text");
const userPics = document.getElementsByClassName("user-pic");

function showReview() {
  for (userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (userText of userTexts) {
    userText.classList.remove("active-text");
  }

  let i = Array.from(userPics).indexOf(event.target);

  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}
